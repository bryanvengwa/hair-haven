import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import '@/scss/footer.scss';



function Footer() {
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
                        <h6>Useful Links</h6>
                        <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">About Our Shop</a></li>
                        <li><a href="#">Secure Shopping</a></li>
                        <li><a href="#">Delivery infomation</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Our Sitemap</a></li>
                        </ul>
                        <ul>
                        <li><a href="#">Who We Are</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Innovation</a></li>
                        <li><a href="#">Testimonials</a></li>
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
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer__copyright">
                    </div>
                </div>
            </div>
        </div>
    </footer>    
  )
}

export default Footer


// <div const className="footer">
//         <div className="containermain">
//         <div className="contone col-lg-3.col-md-6.col-sm-6">
//     <ul>
//         <Image className='logo' src={Logo} alt='Logo' />
//         <br />
//         <p className="information">Address: 60-49 Road 11378 New York</p>
//         <p className="information">Phone: +65 11.188.888</p>            
//         <p className="information">Email: hello@colorlib.com</p>
//     </ul>   
//     </div>
//     <div className="conttwo col-lg-2.col-md-6.col-sm-6">
//     <ul>
//                 <p className="headlink">Useful Links</p>
//                 <li className="informationone">About Us</li>
//                 <li className="informationone">About Our Shop</li>
//                 <li className="informationone">Secure Shopping</li>
//                 <li className="informationone">Delivery infomation</li>
//                 <li className="informationone">Privacy Policy</li>
//                 <li className="informationone">Our Sitemap</li>

//             </ul>
//     </div>
//     <div className="contthree col-lg-2.col-md-6.col-sm-6">
//     <ul>
                
//                 <li className="informationone">Who We Are</li>
//                 <li className="informationone">Our Services</li>
//                 <li className="informationone">Projects</li>
//                 <li className="informationone">Contact</li>
//                 <li className="informationone">Privacy Policy</li>
//                 <li className="informationone">Our Sitemap</li>

//             </ul>
//     </div>
//     <div className="contfour col-lg-4 .col-md-12">
//     <ul>
//                 <p className="headlink">Join Our Newsletter Now</p>
//                 <li className="informationone">Get E-mail updates about our latest shop and special offers.</li>
//                 <br />
//                 <br />
//                 <div className='searchbar-container flex ' >
//                 <input type="search" placeholder='ENTER YOUR EMAIL ?' className='g' />
//                     <div className='search-text g' >
//                         <h3>SUBSCRIBE</h3>
//                     </div>

//                     </div>

//             </ul>
//     </div>
//         </div>
//    </div>
