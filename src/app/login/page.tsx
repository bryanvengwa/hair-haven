'use client'
import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import '@/scss/loginPage.scss'
import loginImg from '../../../public/images/login.jpeg';
import Image from 'next/image'


const ImageContainer = ()=>{
return (<>
  <Image src={loginImg} layout='responsive' objectFit='cover' alt='loginImage' />

</>)                
}



const LoginForm = ()=> {
   
  return(
    <>
             <form className='flex flex-col gap-4'  action="">
                        <label htmlFor="username" className='flex flex-col gap-2'>
                          Username
                        <input type="text" id='username' name='username' className='form-control' />

                        </label>
                        <label htmlFor="password" className='flex flex-col gap-2' >
                          Password
                        <input type="password" className='form-control' />
                        </label>
                        <button  >Submit</button>
                    </form>
    </>
  )
}

const SignUpForm = () =>{

  return (
    <form className='flex flex-col gap-4'  action="">
    <label htmlFor="username" className='flex flex-col gap-2'>
      Username
    <input type="text" id='username' name='username' className='form-control' />

    </label>
    <label htmlFor="email" className='flex flex-col gap-2'>
      Email
    <input type="text" id='email' name='email' className='form-control' />

    </label>
    <label htmlFor="password" className='flex flex-col gap-2' >
      Password
    <input type="password" className='form-control' />
    </label>
    <label htmlFor="password-retype" className='flex flex-col gap-2' >
      Password Retype
    <input type="password-retype" className='form-control' />
    </label>
    <button  >Submit</button>
</form>

  )

}


export default function page() {
const [login, setLogin] = useState(true);

const toggleLogin = ()=>{
  setLogin(!login)
}


  return (
    <div className='login-page  bg-red flex items-center justify-center'>
        <div className="flex-container  ">
            <div className="left">
              <ImageContainer/>
     
            </div>
            <div className="right flex items-center justify-center">
              <div className="toggle-container">
                <button onClick={toggleLogin} > { !login ?'Login ?' : 'Sign up ?' }  </button>
              </div>
          { login ?  <LoginForm/> :  <SignUpForm/>  }
            </div>
        </div>
    </div>
  )
}
