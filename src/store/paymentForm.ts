import { PaymentFormInputs } from '@/components/PaymentForm';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PaymentForm {
  paymentForm: PaymentFormInputs;
  updatePaymentForm: ({ data }: { data: PaymentFormInputs }) => void;
}

const emptyPaymentForm = {
  name: '',
  cardNumber: '',
  cvv: '',
  expirationDate: '',
};

export const usePaymentForm = create<PaymentForm>()(
  persist(
    (set) => {
      return {
        paymentForm: emptyPaymentForm,
        updatePaymentForm: ({ data }) => {
          set(() => {
            const paymentForm = data;
            return { paymentForm };
          });
        },
      };
    },
    {
      name: 'paymentForm',
    }
  )
);
