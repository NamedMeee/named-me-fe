import {
  SESSION_KEY,
  getSessionStorage,
  setSessionStorage,
} from 'libraries/sessionStorageUtils';
import { SocialProviderType } from 'pages/api/login/type';
import { create } from 'zustand';

export type ValidationResult = {
  error: boolean;
  message?: string;
};

type LoginState = {
  email: string;
  name: string;
  password: string;
  firstPassword: string;
  socialId: string;
  profileImage: string;
};

type LoginActionState = {
  setLoginState: (state: Partial<LoginState>) => void;
};

type ErrorState = {
  firstPassword: ValidationResult;
  email: ValidationResult;
  name: ValidationResult;
  password: ValidationResult;
};

type ErrorActionState = {
  setLoginError: (state: Partial<ErrorState>) => void;
};

export const LoginStateDefault: LoginState = {
  email: '',
  name: '',
  password: '',
  firstPassword: '',
  socialId: '',
  profileImage: '',
};

export const LoginErrorStateDefault: ErrorState = {
  email: { error: false, message: '' },
  firstPassword: { error: false, message: '' },
  name: { error: false, message: '' },
  password: { error: false, message: '' },
};

export const useUserLoginStore = create<LoginState & LoginActionState>(
  (set) => ({
    ...LoginStateDefault,
    setLoginState: (update: Partial<LoginState>) => {
      set((state: LoginState) => ({ ...state, ...update }));
    },
  }),
);

export const useUserLoginErrorStore = create<ErrorState & ErrorActionState>(
  (set) => ({
    ...LoginErrorStateDefault,
    setLoginError: (update: Partial<ErrorState>) => {
      set((state: ErrorState) => ({ ...state, ...update }));
    },
  }),
);

export const setLoginProvider = (provider: SocialProviderType) => {
  setSessionStorage(SESSION_KEY.LOGIN_PROVIDER, provider);
};

export const getLoginProvider = () => {
  return getSessionStorage(SESSION_KEY.LOGIN_PROVIDER) as SocialProviderType;
};
