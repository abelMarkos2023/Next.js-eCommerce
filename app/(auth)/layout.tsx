import Footer from "@/components/Footer";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex flex-col min-h-screen  justify-center items-center">

            <div className="flex flex-1 justify-center items-center flex-col gap-4">
                <Link href = '/'>
                <Image src="/images/logo.svg" height={200} width={200} alt="logo" className="w-44 h-44 object-cover" />
                <h3 className="forn-bold text-xl text-center">{APP_NAME}</h3>
                </Link>
                <div className="w-full  max-w-7xl mx-auto p-5 md:px-10">
                {children}
               
            </div>
            </div>
            
            <Footer />
        </div>
           
    );
  }