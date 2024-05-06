import { create } from 'zustand';

type State = {
  email: string;
  name: string;
  password: string;
};

export type Action = {
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const useUserLoginStore = create<State & Action>((set) => ({
  email: '',
  name: '',
  password: '',
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) =>
    set({ password: e.target.value }),
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) =>
    set({ email: e.target.value }),
  setName: (e: React.ChangeEvent<HTMLInputElement>) =>
    set({ name: e.target.value }),
}));

export const useUserLoginCurrentState = () => {
  const { email, name, password } = useUserLoginStore();
  return { email, name, password };
};
