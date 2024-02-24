import React from 'react'
import '@/scss/contact-form.scss'


export default function ContactForm() {
  return (
    <form className="contact-form" action="">
        <div className="flex-container flex-container-flex">
            <input type="text" name='name'  placeholder='Your name'  required />
            <input type="email" name='email' placeholder='Your email' required />
        </div>
        <div className="flex-container">
            <textarea name="meassage" id="" placeholder='Your message'  required ></textarea>
        </div>
        <div className="flex-container">
        </div>
            <button type='submit' >SEND MESSSAGE</button>

    </form>
  )
}
