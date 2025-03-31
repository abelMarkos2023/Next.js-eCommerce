import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
        <Link href="/" className='flex items-start gap-2'>
             <Image
            src="/images/logo.svg"
            alt="logo"
            width={48}
            height={48}
            priority={true}
              />
             <span className="hidden md:block text-2xl font-extrabold">{APP_NAME}</span>
    </Link>  
    )
}

export default Logo