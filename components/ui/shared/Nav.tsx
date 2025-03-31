import ThemeToggler from '@/components/ThemeToggler'
import React from 'react'
import { Button } from '../button'
import Link from 'next/link'
import { ShoppingCart, UserIcon } from 'lucide-react'

const Nav = ({col}:{col?:boolean}) => {
  return (
        <div className={`flex  gap-2 ${col && 'flex-col items-start'}`}>
             <ThemeToggler />
              <Button asChild variant="ghost" size="lg">
                <Link href="/cart" className=''>
                  <ShoppingCart /> Cart
                </Link>
              </Button>
              <Button asChild variant="default" size="lg">
                <Link href="/login" className=''>
                  <UserIcon /> Sign In
                </Link>
              </Button>
        </div>
  )
}

export default Nav