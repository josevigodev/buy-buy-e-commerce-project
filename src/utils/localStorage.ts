import { Product } from '@/types/fakeStoreApi';

export const updateLocalStorage = (key: string, value: Product[]) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
};

export const getLocalStorage = (key: string) => {
  try {
    const stored = window.localStorage.getItem(key);
    if (stored) return JSON.parse(stored);
  } catch (error) {
    console.error(error);
  }
};
