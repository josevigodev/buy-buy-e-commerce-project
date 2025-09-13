import { db } from '@/firebase/client';
import { Shipping } from '@/store/order';
import { Product } from '@/types/fakeStoreApi';
import { collection, addDoc } from 'firebase/firestore';
import { query, where, getDocs } from 'firebase/firestore';

export interface UserOrder {
  userId: string;
  items: Product[];
  total: number;
  address: Shipping;
  createdAt: string;
  status: string;
}

export const saveOrder = async (order: UserOrder) => {
  try {
    await addDoc(collection(db, 'orders'), order);
    console.log('Order saved!');
  } catch (error) {
    console.error('Error saving order: ', error);
  }
};

export const getOrders = async (userId: string) => {
  const q = query(collection(db, 'orders'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
