'use client'

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Button } from './ui/button';
import { MoonIcon, SunIcon, SunMoonIcon } from 'lucide-react';

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='focus-visible:ring-0 focus-visible:ring-offset-0'>
                {
                    theme === 'system' ? (<SunMoonIcon />) : theme === 'light' ? (<SunIcon />) : (<MoonIcon />)
                }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Theme</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked = {theme === 'system'} onCheckedChange={() => setTheme('system')}>
                System
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked = {theme === 'light'} onCheckedChange={() => setTheme('light')}>
                Light
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked = {theme === 'dark'} onCheckedChange={() => setTheme('dark')}>
                Dark
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggler