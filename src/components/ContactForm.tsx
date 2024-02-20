import React from 'react'

export default function ContactForm() {
  return (
    <form action="">
        <div className="flex-container">
            <input type="text" name='name' placeholder='Your name' />
            <input type="email" name='email' placeholder='Your email' />
        </div>
        <div className="flex-container">
            <textarea name="meassage" id="" ></textarea>
        </div>
        <div className="flex-container">
            <button type='submit' >SEND MESSSAGE</button>
        </div>

    </form>
  )
}
