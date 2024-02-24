'use client'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Header from "@/components/Header"
import ContactHeader from "@/components/ContactHeader"
import ContactForm from '@/components/ContactForm'

export default function page() {
  return (
    <div>
        <Header />
        <BreadCrumb pageFull='Contact Us' page='Contact us' imageUrl='/images/contact-us.jpg' / >
        <div className="container">
          

        </div>
        <br />
        <ContactHeader />
        
        <ContactForm />
    </div>
  )
}
