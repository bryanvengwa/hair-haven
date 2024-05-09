import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
        <body className={inter.className}>
        <div className="pos-relative  bg-black left-0 top-0 bg-brown w-full gap-5">
        <div className=" absolute top-0 left-0 bg-white  h-full ">
        <Navigation/>
        </div>
            <div className='dashboard-side absolute left-50 top-0 h-full w-full flex flex-col items-center justify-center'>

            {children}
            </div>

        </div>
            </body>
      
    </html>
  );
}
