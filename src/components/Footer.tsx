import React, { useEffect, useState }  from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import '@/scss/footer.scss';
import Link from 'next/link';
import { FaInstagram , FaFacebook, FaPinterest, FaLinkedinIn} from 'react-icons/fa';





function Footer() {
    
    // const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Get the current year
    const [currentYear] = useState(new Date().getFullYear());

  return (
    <footer className="footer spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer__about">
                        <div className="footer__about__logo">
                        <Image className='logo' src={Logo} alt='Logo' />
                        </div>
                        <ul>
                        <li>Address: 60-49 Road 11378 New York</li>
                        <li>Phone: +65 11.188.888</li>
                        <li>Email: hello@colorlib.com</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                    <div className="footer__widget">
                        <h6>Our Services</h6>
                        <ul>
                        {/* <li><Link href="#">About Us</Link></li> */}
                        <li><Link href="#">Top notch products</Link></li>
                        <li><Link href="#">Secure Shopping</Link></li>
                        <li><Link href="#">Swift Deliveries</Link></li>
                        <li><Link href="#">Promotions</Link></li>
                        <li><Link href="#">24/7 customer support</Link></li>
                        </ul>
                        <ul>
                        {/* <li><Link href="#">Who We Are</Link></li> */}
                        <li><Link href="#">Site Map</Link></li>
                        <li><Link href="#">Cart</Link></li>
                        <li><Link href="#">Shop</Link></li>
                        <li><Link href="#">Checkout</Link></li>
                        <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="footer__widget">
                    <h6>Join Our Newsletter Now</h6>
                    <p>Get E-mail updates about our latest shop and special offers.</p>
                    <form action="#">
                    <input type="text" placeholder='Enter your mail'/>
                    <button type="submit" className="site-btn">Subscribe</button>
                    </form>
                    <div className="footer__widget__social">
                    <div className='icon-container' ><FaFacebook className='iconn'/></div>
                    <div className='icon-container' ><FaInstagram className='iconn'/></div>
                    <div className='icon-container' ><FaLinkedinIn className='iconn'/></div>
                    <div className='icon-container' ><FaPinterest className='iconn'/></div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <div className="footer__copyright">
                <div className="footer__copyright__text"><p>
                    Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank"><span className='colo'>Colorlib</span></a>
                </p></div>
                <div className="footer__copyright__payment"><Image className='logo' src={Logo} alt='Logo' /></div>
            </div>
        </div>
        </div>
        </div>
    </footer>    
  )
}

export default Footer

