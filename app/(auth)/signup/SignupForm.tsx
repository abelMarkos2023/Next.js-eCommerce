"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {signUpUser } from '@/lib/actions/auth.action'
import Link from 'next/link'
import { useFormStatus } from 'react-dom'
import React, { useActionState } from 'react'
import { useSearchParams } from 'next/navigation'



const SignUpButton = () => {

  const {pending} = useFormStatus()
 return <Button disabled ={pending} variant={'default'} className='w-full'>
    {pending ? (
     <div className="flex items-center justify-center">
         <span className="animate-spin mr-2 w-6 h-6 rounded-full border-b-3 border-blue-500 text-black"></span>
         <span>Signing Up...</span>
     </div>
    ) : 'Sign Up'}
 </Button>
}
const SignunForm = () => {
  const [data,action] = useActionState(signUpUser,{
    success:false,
    message:"",
    error:'',
    user:null
  })
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl') || '/';


  

 
  return (
    <Card>
      <CardHeader>
        <h1>Signup Form</h1>
      </CardHeader>
      <CardContent>
        {
          (data && !data.success) && <div className="text-sm text-red-500 text-center font-semibold">{data.message}</div>
        }
        <form action={action}>
          <input type="hidden" name="callbackUrl" value={callbackUrl || "/"} />
          <div className="space-y-6">
            {/* User name Field */}
            <div className="form-control w-full space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                type="name"
                id="name"
                name="name"
                placeholder="Name"
                autoComplete='name'
                className='w-full'
              />
            </div>
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
            {/* Confirm Password Field */}
            {/* Password Field */}
            <div className="form-control w-full space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input 
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Password"
                autoComplete='confirmPassword'
                className='w-full'
              />
            </div>
            <div>
            <SignUpButton />
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

export default SignunForm