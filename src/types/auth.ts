export interface AuthUser {
  id: string;
  email: string;
  name: string | null;
  avatar_url: string | null;
  email_verified: boolean;
  created_at: string;
  updated_at: string;
}

export interface AuthSession {
  user: AuthUser;
  access_token: string;
  refresh_token: string;
  expires_at: number;
}

export interface SignUpData {
  email: string;
  password: string;
  name: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface ResetPasswordData {
  email: string;
}

export interface UpdatePasswordData {
  password: string;
  confirm_password: string;
}

export interface AuthError {
  message: string;
  code?: string;
}

export type AuthState = {
  user: AuthUser | null;
  session: AuthSession | null;
  loading: boolean;
  error: AuthError | null;
};