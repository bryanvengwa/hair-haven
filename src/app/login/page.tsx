'use client'
import React, { useContext, useState } from 'react';
import '@/scss/loginPage.scss'
import loginImg from '../../../public/images/login.jpeg';
import Image from 'next/image'
import { GlobalContext, GlobalContextProvider } from '@/app/context/context';


const ImageContainer = ()=>{
return (<>
  <Image src={loginImg} layout='responsive' objectFit='cover' alt='loginImage' />

</>)                
}



const LoginForm = (props : any)=> {
   
  return(
    <>
             <form  onSubmit={props.submitFunction} className='flex flex-col gap-4'  action="">
                        <label htmlFor="username" className='flex flex-col gap-2'>
                          Username
                        <input type="text" id='username' name='username' className='form-control' />

                        </label>
                        <label htmlFor="password" className='flex flex-col gap-2' >
                          Password
                        <input type="password" name='password'  className='form-control' />
                        </label>
                        <button  >Logino</button>
                    </form>
    </>
  )
}

const SignUpForm = (props : any ) =>{

  return (
    <form onSubmit={props.submitFunction}  className='flex flex-col gap-4'  action="">
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
    <button  >Sign Up</button>
</form>

  )

}


export default function Page() {
const [login, setLogin] = useState(true);

const toggleLogin = ()=>{
  setLogin(!login)
}
const {user , loginUser, logOutUser } = useContext(GlobalContext)
 

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
          { login ?  <LoginForm submitFunction={loginUser} /> :  <SignUpForm submitFunction={logOutUser} />  }
            </div>
        </div>
    </div>
    
  )
}
