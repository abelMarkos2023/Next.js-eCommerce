import Footer from "@/components/Footer";
import Header from "@/components/ui/shared/header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-1 w-full max-w-7xl mx-auto p-5 md:px-10">
                <Header />
                {children}
               
            </div>
            <Footer />
        </div>
           
    );
  }