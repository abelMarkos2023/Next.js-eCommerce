import nextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import { prisma } from "./sample-data/db/prisma";
import CredentialsProvider from "next-auth/providers/credentials"



import {PrismaAdapter} from "@auth/prisma-adapter";
import { compareSync } from "bcrypt-ts-edge";

export const config = {
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
        error: "/auth/signin",
    },
    session:{
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60 // a day
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "password",
                },
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.email as string,
                    },
                });
                if (!user) {
                    return null;
                }

                if(user && user.password){
                    const isMatch = compareSync(credentials?.password as string,user.password);

                    if(!isMatch){
                        return null
                    }
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    }
                }
                return null

        }
        }),
    
    
    ],
    callbacks:{
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        async session({session,token,user,trigger} : any){
            session.user.id = token.sub;
            session.user.role = token.role;
            session.user.name = token.name

            if(trigger === "update"){
                session.user = user;
            }
            return session
            
        },
        //eslint-disable-next-line @typescript-eslint/no-explicit-any
        async jwt({token,user,trigger,session} : any){
            console.log(trigger,session)
            if(user){
                token.role = user.role
            }

            if(user.name === 'NO_NAME'){
                token.name = user.email.split('@')[0];

                await prisma.user.update({
                    where: {
                        id: user.id
                    },
                    data: {
                        name: token.name
                    }
                })
            }
            return token
        }
    }
} satisfies NextAuthConfig;

export const {handlers, auth, signIn,signOut} = nextAuth(config)