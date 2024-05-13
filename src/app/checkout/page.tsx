'use client';
import React, { useContext } from 'react';
import BreadCrumb from '@/components/BreadCrumb';
import Header from '@/components/Header';
import '@/scss/checkout.scss';
import { CartContext } from '../context/CartContext';
import Footer from '@/components/Footer';

export default function Page() {
  const { items, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout">
      <Header />
      <BreadCrumb
        pageFull="Checkout"
        page="checkout"
        imageUrl="/images/blog.jpg"
      />
      <br />
      <br />
      <div className="container">
        <h4>Billing Details</h4>
        <hr />
        <div className="checkout-container p-2">
          <div className="left">
            <div className="flex-container flex-container-2 ">
              <div className="input-container">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" />
              </div>
              <div className="input-container">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" />
              </div>
            </div>
            <div className="flex-container">
              <div className="input-container">
                <label htmlFor="country">Country</label>
                <input type="text" id="country" />
              </div>
            </div>
            <div className="flex-container flex-container-2">
              <div className="input-container">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Street Address" />
              </div>
              <div className="input-container ">
                <label htmlFor="addres-2">_</label>
                <input
                  type="text"
                  id="address-2"
                  placeholder="Apartment, suite, unite , etc(optional)"
                />
              </div>
            </div>

            <div className="flex-container">
              <div className="input-container">
                <label htmlFor="town">Town/City</label>
                <input type="text" id="town" />
              </div>
            </div>
            <div className="flex-container">
              <div className="input-container">
                <label htmlFor="post_code">PostCode/Zip</label>
                <input type="text" id="post_code" />
              </div>
            </div>
            <div className="flex-container flex-container-2">
              <div className="input-container">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" name="phone" />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="phone" />
              </div>
            </div>
            <div className="flex-container pt-2">
              <div className="input-container">
                <label htmlFor="order-notes">Order notes</label>
                <input type="text" id="order-notes" />
              </div>
            </div>
          </div>

          <div className="right">
            <div className="order-card card ">
              <h4>Your Order</h4>
              <hr />
              <div className="heading-container pt-3 flex justify-between">
                <h4>Products</h4>
                <h4>Total</h4>
              </div>
              <ul>
                {items &&
                  items.map((item: any) => {
                    return (
                      <>
                        <li key={item.product.title + 1} className="flex justify-between">
                          <span> ${item.product.title} </span>
                          <span> ${item.product.unit_price}</span>
                        </li>
                      </>
                    );
                  })}
              </ul>
              <hr className="pt-3 pb-3" />
              <div className="heading-container flex justify-between">
                <h4>Subtotal</h4>
                <h4>${totalPrice ? totalPrice : 0} </h4>
              </div>
              <div className="heading-container pt-3 flex justify-between">
                <h4>Total</h4>
                <h4 style={{ color: 'red' }}>${totalPrice ? totalPrice : 0}</h4>
              </div>
              <hr className="pt-3 pb-3" />

              <div className="check-box-container w-100 flext align-items gap-2 ">
                <input type="checkbox" id="acc-create" />
                <label className="pl-2" htmlFor="acc-create">
                  Create an Account
                </label>
              </div>
              <p>
                We will create an account using the information you entered
                during your checkout. If you are a returning customer please
                login at the top of the page
              </p>

              <button>PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
