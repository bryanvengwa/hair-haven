import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalContextProvider } from './context/context';
import { ProductContextProvider } from './context/ProductContext';
import { CartContextProvider } from './context/CartContext';
import { CartPageContextProvider } from './context/CartPageContext';
import { BlogContextProvider } from './context/BlogContext';
import { NotificationContextProvider } from './context/NotificationContext';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import core styles
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import React from 'react';
import { Providers } from '@/redux/provider';

config.autoAddCss = false; // Prevent duplicate loading in Next.js
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hair Haven',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NotificationContextProvider>
      <CartContextProvider>
        <BlogContextProvider>
          <GlobalContextProvider>
            <ProductContextProvider>
              <CartPageContextProvider>
                <Providers>
                  <html lang="en">
                    <body className={inter.className}>{children}</body>
                  </html>
                </Providers>
              </CartPageContextProvider>
            </ProductContextProvider>
          </GlobalContextProvider>
        </BlogContextProvider>
      </CartContextProvider>
    </NotificationContextProvider>
  );
}
