import { ShippingFormInputs } from '@/components/forms/ShippingForm';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ShippingForm } from '@/components/forms/ShippingForm';

interface ShippingForm {
  shippingForm: ShippingFormInputs;
  updateShippingForm: ({ data }: { data: ShippingFormInputs }) => void;
}

const emptyShippingForm = {
  firstName: '',
  lastName: '',
  country: '',
  phoneNumber: '',
  city: '',
  state: '',
  postCode: '',
  addressLine1: '',
  addressLine2: '',
};

export const useShippingForm = create<ShippingForm>()(
  persist(
    (set) => {
      return {
        shippingForm: emptyShippingForm,
        updateShippingForm: ({ data }) => {
          set(() => {
            const shippingForm = data;
            return { shippingForm };
          });
        },
      };
    },
    {
      name: 'shippingForm',
    }
  )
);
