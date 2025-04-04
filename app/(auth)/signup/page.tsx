import { auth } from '@/auth'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import React from 'react'
import SignunForm from './SignupForm'


export const metadata : Metadata = {
    title: 'Signup',
    description: 'Pro Store Website Signup page',  
}
const page = async (props:{searchParams: Promise<{
  callbackUrl: string
}>}) => {

    const {callbackUrl} = await props.searchParams

    const session = await auth();

    if(session){
        return redirect(callbackUrl || '/')
    }
  return (
    <div className='max-w-4xl mx-auto w-2xl'>
                <SignunForm/>
    </div>
  )
}

export default page
