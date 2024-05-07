import { create } from 'zustand';

export type ValidationResult = {
  error: boolean;
  errorMessage?: string;
};

type LoginState = {
  email: string;
  firstPassword: string;
  name: string;
  password: string;
  setEmail: (value: string) => void;
  setFirstPassword: (value: string) => void;
  setName: (value: string) => void;
  setPassword: (value: string) => void;
};

export type ErrorState = {
  emailError: ValidationResult;
  firstPasswordError: ValidationResult;
  nameError: ValidationResult;
  passwordError: ValidationResult;
  setError: (errorField: string, error: ValidationResult) => void;
};

export const useUserLoginStore = create<LoginState>((set) => ({
  email: '',
  name: '',
  password: '',
  firstPassword: '',
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
