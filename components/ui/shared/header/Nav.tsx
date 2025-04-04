import ThemeToggler from '@/components/ThemeToggler'
import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import UserButton from './UserButton'
import { Button } from '../../button'

const Nav = ({col}:{col?:boolean}) => {
  return (
        <div className={`flex  gap-2 ${col && 'flex-col items-start'}`}>
             <ThemeToggler />
              <Button asChild variant="ghost" size="lg">
                <Link href="/cart" className=''>
                  <ShoppingCart /> Cart
                </Link>
              </Button>
              <UserButton />
        </div>
  )
}

export default Nav