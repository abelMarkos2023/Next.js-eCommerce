import React from 'react'
import SigninForm from './SigninForm'
import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata : Metadata = {
  title: 'Signin',
  description: 'Pro Store Website Signin page',
}

const page = async(props:{searchParams: Promise<{
  callbackUrl: string
}>}) => {

    const {callbackUrl} = await props.searchParams

    const session = await auth();

    if(session){
        return redirect('/'+callbackUrl || '/')
    }
  return (
    <div className='max-w-4xl mx-auto w-2xl'>
        <SigninForm/>
    </div>
  )
}

export default page