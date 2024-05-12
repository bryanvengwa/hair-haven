// features/auth/types.ts
export interface AuthState {
    isAuthenticated: boolean;
    user: {
      id: string;
      email: string;
      // Add other user properties as needed
    } | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    accessToken: string | null;
    refreshToken: string | null;
  }
  