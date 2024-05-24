'use client'; // Only run on client-side

import { NextAuthOptions, User, getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';

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
        register :{type : 'register'}
      },
      async authorize(credentials) {
        let url = AppUrl
        if (!credentials) {
          return null;
        }else{
          if (credentials.register){
            url += `auth/signup`
          }else{
            url += 'auth/login'
          }

        }
        try {
          const response = await axios.post(url, { ...credentials });
          if (response.status === 201) return response.data;
          
        } catch (error) {
          console.error('Error during authentication:', error);
          // Handle the error here (e.g., display an error message to the user)
          return null;
        }
      }
      
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
  if (!session) return redirect('/');
}

export function loginIsRequiredClient() {
  const session = useSession();
  const router = useRouter();
  if (!session) router.push('/');
}
