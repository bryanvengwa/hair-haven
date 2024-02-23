import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import '@/scss/footer.scss';



function Footer() {
  return (
   <div className="footer">
        <div className="containermain">
        <div className="contone col-lg-3.col-md-6.col-sm-6">
    <ul>
        <Image className='logo' src={Logo} alt='Logo' />
        <br />
        <p className="information">Address: 60-49 Road 11378 New York</p>
        <p className="information">Phone: +65 11.188.888</p>            
        <p className="information">Email: hello@colorlib.com</p>
    </ul>   
    </div>
    <div className="conttwo col-lg-2.col-md-6.col-sm-6">
    <ul>
                <p className="headlink">Useful Links</p>
                <li className="informationone">About Us</li>
                <li className="informationone">About Our Shop</li>
                <li className="informationone">Secure Shopping</li>
                <li className="informationone">Delivery infomation</li>
                <li className="informationone">Privacy Policy</li>
                <li className="informationone">Our Sitemap</li>

            </ul>
    </div>
    <div className="contthree col-lg-2.col-md-6.col-sm-6">
    <ul>
                
                <li className="informationone">Who We Are</li>
                <li className="informationone">Our Services</li>
                <li className="informationone">Projects</li>
                <li className="informationone">Contact</li>
                <li className="informationone">Privacy Policy</li>
                <li className="informationone">Our Sitemap</li>

            </ul>
    </div>
    <div className="contfour col-lg-4 .col-md-12">
    <ul>
                <p className="headlink">Join Our Newsletter Now</p>
                <li className="informationone">Get E-mail updates about our latest shop and special offers.</li>
                <li className="informationone">About Our Shop</li>
                <li className="informationone">Secure Shopping</li>
                <li className="informationone">Delivery infomation</li>
                <li className="informationone">Privacy Policy</li>
                <li className="informationone">Our Sitemap</li>

            </ul>
    </div>
        </div>
   </div>
  )
}

export default Footer
