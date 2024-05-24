'use client';
import React, { useContext, useState } from 'react';
import '@/scss/loginPage.scss';
import loginImg from '../../../public/images/login.jpeg';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { signUp, login } from '@/redux/features/auth-slice';
import { AppDispatch, RootState } from '@/redux/store';
import {
  GoogleSignInButton,
  GithubSignInButton,
} from '@/components/AuthButtons';

const ImageContainer = () => {
  return (
    <>
      <Image
        src={loginImg}
        layout="responsive"
        objectFit="cover"
        alt="loginImage"
      />
    </>
  );
};

const OauthButtons = () => {
  return (
    <div className="flex flex-col  gap-1 ">
      <GoogleSignInButton />
      <GithubSignInButton />
    </div>
  );
};

const LoginForm = (props: any) => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Cast e.currentTarget to HTMLFormElement to access the elements property
    const formData = new FormData(e.currentTarget);

    // Collect the values from the input fields using FormData
    const userName = formData.get('userName');
    const lastName = formData.get('lastName');
    const firstName = formData.get('firstName');
    const password = formData.get('password');

    dispatch(signUp({ userName, password, lastName, firstName }));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3" action="">
        <OauthButtons />
        <label htmlFor="firstName" className="flex flex-col gap-2">
          First Name
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control"
          />
        </label>
        <label htmlFor="lastName" className="flex flex-col gap-2">
          Last Name
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control"
          />
        </label>
        <label htmlFor="userName" className="flex flex-col gap-2">
          Username
          <input
            type="text"
            id="userName"
            name="userName"
            className="form-control"
          />
        </label>
        <label htmlFor="password" className="flex flex-col gap-2">
          Password
          <input type="password" name="password" className="form-control" />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

const SignUpForm = (props: any) => {
  return (
    <form
      onSubmit={props.submitFunction}
      className="flex flex-col gap-4"
      action=""
    >
      <label htmlFor="username" className="flex flex-col gap-2">
        Username
        <input
          type="text"
          id="username"
          name="username"
          className="form-control"
        />
      </label>
      <label htmlFor="email" className="flex flex-col gap-2">
        Email
        <input type="text" id="email" name="email" className="form-control" />
      </label>
      <label htmlFor="password" className="flex flex-col gap-2">
        Password
        <input type="password" className="form-control" />
      </label>
      <label htmlFor="password-retype" className="flex flex-col gap-2">
        Password Retype
        <input type="password-retype" className="form-control" />
      </label>
      <button>Sign Up</button>
    </form>
  );
};

export default function Page() {
  const [login, setLogin] = useState(true);

  const toggleLogin = () => {
    setLogin(!login);
  };

  return (
    <div className="login-page   flex items-center justify-center">
      <div className="flex-container  ">
        <div className="left">
          <ImageContainer />
        </div>
        <div className="right flex items-center justify-center">
          <div className="toggle-container">
            <button onClick={toggleLogin}>
              {' '}
              {!login ? 'Login ?' : 'Sign up ?'}{' '}
            </button>
          </div>
          {login ? (
            <LoginForm submitFunction={''} />
          ) : (
            <SignUpForm submitFunction={''} />
          )}
        </div>
      </div>
    </div>
  );
}
