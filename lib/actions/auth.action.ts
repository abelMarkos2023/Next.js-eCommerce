"use server"

import { signIn, signOut } from "@/auth"
import { signInFormSchema, signUpFormSchema } from "../validators"
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { hashSync } from "bcrypt-ts-edge";
import { prisma } from "@/sample-data/db/prisma";



type TLoginFormState = {
    success: boolean;
    message: string;
    error: string | null;
    user: null | { id: string; name: string; email: string; role: string } | null;
}
export async function signInWithCredentials(PrevState:TLoginFormState,formData:FormData): Promise<TLoginFormState> {
   try {
    const user = signInFormSchema.parse({
        email: formData.get('email') as string,
        password: formData.get('password') as string
    })


    await signIn('credentials',user);

    const currentUser = await prisma.user.findUnique({where:{email:user.email}});

    if(!currentUser){
        return {success:false,message:"User Not Found",error:"User Not Found",user:null}
    }
    return {
        success:true,
        message:"User Logged In successfully",
        error:null,
        user:{
            name:currentUser.name,
            email:currentUser?.email,
            id:currentUser?.id,
            role:currentUser?.role
        }
    }
   } catch (error) {
    if(isRedirectError(error)){
        throw error;
    }
    return {success:false,message:"Invalid Email Or Password",error:formatError(error),user:null}
   }
}

export async function signUserOut(){
    await signOut();
}


type TSignupFormState =
  | {
      success: boolean;
      message: string;
      error: null;
      user: {
        name: string;
        email: string;
        password?: string;
        confirmPassword?: string;
      };
    }
  | {
      success: boolean;
      message: string;
      error: string;
      user: null;
    };
export async function signUpUser(prevState:TSignupFormState,formData:FormData): Promise<TSignupFormState>{

    try {
        const user  = signUpFormSchema.parse({
            name : formData.get('name') as string,
            email : formData.get('email') as string,
            password : formData.get('password') as string,
            confirmPassword : formData.get('confirmPassword') as string
        })

        //const password = user.password;

        user.password = hashSync(user.password,10);

        await prisma.user.create({data:{
            name:user.name,
            email:user.email,
            password:user.password
        }});

        await signIn('credentials',{
            email:user.email,
            password:formData.get('password') as string
        });

        console.log(user)
        return {
            success:true,
            message:"User Signed Up successfully",
            error:null,
            user :{
                name:user.name,
                email:user.email
            }
        }
    } catch (error) {
        console.log(error);
        if(isRedirectError(error)){
            throw error;
        }
        return {success:false,message:formatError(error),error:"error",user:null}
    }
}

//eslint-disable-next-line @typescript-eslint/no-explicit-any
 function formatError(error:any) : string{
    console.log(error)
    if(error.name === 'Zod Error'){

        const fieldErrors = Object.keys(error.errors).map(key => error.errors[key].message)
        return fieldErrors.join(', ');
    }
    else if(error.name === 'PrismaClientKnownRequestError' && error.code === 'P2002'){
        const field = error.meta?.target ? error.meta.target[0] : "Field"
        return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`
    }
    else{
        return error.message
    }
}