import { create } from 'zustand';

type State = {
  email: string;
  name: string;
  password: string;
};

export type Action = {
  setEmail: (email: string) => void;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
};

export const useUserLoginStore = create<State & Action>((set) => ({
  email: '',
  name: '',
  password: '',
  setPassword: (password: string) => set({ password }),
  setEmail: (email: string) => set({ email }),
  setName: (name: string) => set({ name }),
}));
