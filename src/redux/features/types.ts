// features/auth/types.ts
export interface AuthState {
    isAuthenticated: boolean;
    user: {
      id: string;
      email: string | null;
      userName: string | null;
      image : string | null;
      // Add other user properties as needed
    } | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    accessToken: string | null;
    refreshToken: string | null;
  }
  