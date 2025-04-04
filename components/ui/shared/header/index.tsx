
import React from 'react'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../../sheet'
import { EllipsisIcon } from 'lucide-react'
import Logo from './Logo'
import Nav from './Nav'


const Header = () => {
  return (
    <header className='w-full border-b border-gray-200'>
           <div className="flex items-center justify-between w-full max-w-7xl mx-auto p-4 md:px-10">
              <Logo />
            <div className="hidden md:flex items-center justify-center gap-2">
             <Nav />
            </div>

            <div className="flex flex-col w-xs p-4 md:hidden">
              <Sheet>
                <SheetTrigger asChild className='self-end'>
                  <EllipsisIcon className="size-6" />
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                  <SheetTitle>
                    <span className="text-2xl font-bold">Pro Store</span>
                  </SheetTitle>
                  </SheetHeader>
                  <Nav col />
                  <SheetFooter></SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
        </div>
    </header>
  )
}

export default Header