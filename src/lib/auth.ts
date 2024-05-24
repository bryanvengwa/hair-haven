import { NextAuthOptions, User, getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
// import { redirect, useRouter } from 'next/navigation';

import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import axios from 'axios';

import prisma from './prisma';
import { AppUrl } from '@/utils/AppData';

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        password: { label: 'Password', type: 'password' },
        register: { type: 'register' },
        name: { label: 'Name', type: 'string' },
      },
      async authorize(credentials) {
        let authData;

        let url = AppUrl;
        if (!credentials || !credentials.email || !credentials.password) {
          console.log("somethin is misssing from credentials")
          return null;
        } else {

          authData = {
            email: credentials!.email,
            password: credentials!.password,
            
          };
          if(credentials.name){
            authData = {...authData , name : credentials!.name,}
          }

          if (credentials.register === 'register') {
            url += `api/auth/signup`;
          } else {
            url += 'api/auth/login';
          }
        }

        try {

   if(authData ){

   }
          const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authData),
          });


          // console.log(response)
          if (!response.ok) {
            // Handle errors (e.g., display an error message to the user)

            console.error('Error during authentication:', response.statusText);
            return response.statusText;
          }

          const data = await response.json();
          console.log('here is the data ', data);
          return data;
        } catch (error) {
          // console.error('Error during authentication:', error);
          // Handle the error here (e.g., display an error message to the user)
          return error;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authConfig);
  // if (!session) return redirect('/');
}

export function loginIsRequiredClient() {
  const session = useSession();
  // const router = useRouter();
  // if (!session) router.push('/');
}
