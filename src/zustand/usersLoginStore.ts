import { SocialProviderType } from 'pages/api/login/type';
import { create } from 'zustand';

export type ValidationResult = {
  error: boolean;
  errorMessage?: string;
};

type LoginState = {
  email: string;
  name: string;
  password: string;
  firstPassword: string;
  provider: SocialProviderType;
  setEmail: (value: string) => void;
  setName: (value: string) => void;
  setPassword: (value: string) => void;
  setFirstPassword: (value: string) => void;
  setProvider: (value: SocialProviderType) => void;
};

export type ErrorState = {
  firstPasswordError: ValidationResult;
  emailError: ValidationResult;
  nameError: ValidationResult;
  passwordError: ValidationResult;
  setError: (errorField: string, error: ValidationResult) => void;
};

export const useUserLoginStore = create<LoginState>((set) => ({
  email: '',
  name: '',
  password: '',
  firstPassword: '',
  provider: 'KAKAO',
  setProvider: (value: SocialProviderType) => set({ provider: value }),
  setPassword: (value: string) => set({ password: value }),
  setEmail: (value: string) => set({ email: value }),
  setName: (value: string) => set({ name: value }),
  setFirstPassword: (value: string) => set({ firstPassword: value }),
}));

export const useUserLoginErrorStore = create<ErrorState>((set) => ({
  emailError: { error: false, message: '' },
  firstPasswordError: { error: false, message: '' },
  nameError: { error: false, message: '' },
  passwordError: { error: false, message: '' },
  setError: (errorField: string, errorState: ValidationResult) =>
    set((state: ErrorState) => ({
      ...state,
      [errorField]: errorState,
    })),
}));
