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
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFirstPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) =>
    set({ password: e.target.value }),
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) =>
    set({ email: e.target.value }),
  setName: (e: React.ChangeEvent<HTMLInputElement>) =>
    set({ name: e.target.value }),
  setFirstPassword: (e: React.ChangeEvent<HTMLInputElement>) =>
    set({ firstPassword: e.target.value }),
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
