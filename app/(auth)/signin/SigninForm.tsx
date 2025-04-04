"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signInWithCredentials } from '@/lib/actions/auth.action'
import Link from 'next/link'
import { useFormStatus } from 'react-dom'
import React, { useActionState } from 'react'
import { useSearchParams } from 'next/navigation'


const SignInButton = () => {

  const {pending} = useFormStatus()
 return <Button disabled ={pending} variant={'default'} className='w-full'>SignIn</Button>
}
const SigninForm = () => {
  const [data,action] = useActionState(signInWithCredentials,{
    success:false,
    error:"",
    message:"",
    user:null
  })
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl') || '/';


  

 
  return (
    <Card>
      <CardHeader>
        <h1>Signin Form</h1>
      </CardHeader>
      <CardContent>
        {
          (data && !data.success) && <div className="text-sm text-red-500 text-center font-semibold">{data.message}</div>
        }
        <form action={action}>
          <input type="hidden" name="callbackUrl" value={callbackUrl || "/"} />
          <div className="space-y-6">
            <div className="form-control w-full space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                autoComplete='email'
                className='w-full'
              />
            </div>

            {/* Password Field */}
            <div className="form-control w-full space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                autoComplete='password'
                className='w-full'
              />
            </div>
            <div>
            <SignInButton />
            </div>
            <p className="mt-4 text-center text-sm text-muted-forground">
              Dpn&apos;t have an account?{' '} <Link href='/signup'>
                SignUp
              </Link>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default SigninForm