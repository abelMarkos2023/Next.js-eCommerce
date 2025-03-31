import { APP_NAME } from '@/lib/constants';
import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
        <footer className="flex items-center justify-center w-full bg-gray-200 dark:bg-gray-800 shadow-lg px-4 py-3">
            all right reserved &copy; {currentYear} - {APP_NAME}
        </footer>

)
}

export default Footer