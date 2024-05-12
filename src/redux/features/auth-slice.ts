'use client';
// features/auth/authSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthState } from './types'; // Import the AuthState interface
import { AppUrl } from '@/utils/AppData';
import { storeAuth } from '@/utils/AuthStorage';
import { jwtDecode } from "jwt-decode";

// Define the initial state using the AuthState interface
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  status: 'idle',
  error: null,
  accessToken: null,
  refreshToken: null,
};

// Async thunk for login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    const response = await axios.post(`${AppUrl}api/auth/login`, credentials);
    // Ensure response.data is not undefined before returning it
    return response.data || {}; // Return an empty object if response.data is undefined
  }
);

// Async thunk for logout
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  const state = thunkAPI.getState() as AuthState; // Get the current state
  const accessToken = state.accessToken; // Access the access token from the state

  // Include the access token in the request header
  const response = await axios.post(
    `${AppUrl}api/auth/logout`,
    {},
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  return null;
});

// Async thunk for refresh token
export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, thunkAPI) => {
    const response = await axios.post(`${AppUrl}api/auth/refresh`, {
      refreshToken: (thunkAPI.getState() as AuthState).refreshToken,
    });
    return response.data;
  }
);
// Async thunk for sign-up
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (userDetails: any, thunkAPI) => {
    const response = await axios.post(`${AppUrl}api/auth/signup`, userDetails);
    console.log(response);
     console.log(jwtDecode(response.data.accessToken))
     const user = jwtDecode(response.data.accessToken)

    storeAuth({
      accessToken: response.data.accessToken,
      refreshToken: response.data.refreshToken,
    });

    return response.data; // This might be an empty object or a redirect URL
  }
);

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserFromStorage : (state, action  )=>{
      state.status = 'succeeded';
      state.isAuthenticated = true
      state.user = action.payload
      state.error = null;

    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        // Ensure action.payload.user is not undefined before assigning it
        state.user = action.payload.user || null;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.status = 'idle';
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuthenticated = true; // Assuming the payload includes user details
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken; // Assuming the payload includes this
        state.error = null;
      });
  },
});

export default authSlice.reducer;
export const {setUserFromStorage} = authSlice.actions