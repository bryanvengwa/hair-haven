'use client';
import React from 'react';
import Header from '@/components/Header';
import '@/scss/checkout.scss';
import BreadCrumb from '@/components/BreadCrumb';
import Footer from '@/components/Footer';
import ShoppingDetails from '@/components/ShoppingDetails';

function Page() {
  return (
    <div className="blogdetails">
      <Header />
      <BreadCrumb
        pageFull="Contact Us"
        page="Contact us"
        imageUrl="/images/contact-us.jpg"
      />
      <ShoppingDetails />

      <Footer />
    </div>
  );
}

export default Page;
