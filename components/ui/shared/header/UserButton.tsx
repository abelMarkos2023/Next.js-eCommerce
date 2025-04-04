import { auth } from '@/auth';
import React from 'react'
import { Button } from '../../button';
import Link from 'next/link';
import { UserIcon } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../../dropdown-menu';
import { signUserOut } from '@/lib/actions/auth.action';

const UserButton = async () => {

    const session = await auth();

    if (!session){
        return (
          <Button asChild variant="default" size="lg">
            <Link href="/signin" className="">
              <UserIcon /> Sign In
            </Link>
          </Button>
        );
    }

    const nameInitial = session.user?.name?.charAt(0).toUpperCase() || 'U';
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center">
          <Button className="relative w-8 h-8 font-bold text-xl cursor-pointer rounded-full flex items-center justify-center bg-gray-400 shadow-lg">
            {nameInitial}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align='end'>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{session.user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {session.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <form action = {signUserOut} className='w-full'>
            <Button className='w-full h-4 justify-start py-2 rounded-xl' variant={'ghost'}>LogOut</Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserButton