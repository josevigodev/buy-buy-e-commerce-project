import { create } from 'zustand';

interface User {
  user: string;
  setUser: (user: string) => void;
}

export const useUserStore = create<User>((set) => ({
  user: '',
  setUser: (user) => set({ user }),
}));
