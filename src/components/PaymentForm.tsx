'use client';
import { usePaymentForm } from '@/store/paymentForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const validateCardNumber = (cardNumber: string): boolean => {
  const sanitized = cardNumber.replace(/[\s-]/g, '');

  const regex = /^\d{13,19}$/;

  if (!regex.test(sanitized)) return false;

  let sum = 0;
  let shouldDouble = false;

  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized[i], 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

const schema = z.object({
  name: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, 'This field must contain only letters'),
  cardNumber: z
    .string()
    .regex(/^[\d\s-]+$/, 'This field must contain only numbers')
    .refine((val) => validateCardNumber(val), 'Invalid card number'),
  cvv: z.string().regex(/^\d{3,4}$/, 'Invalid CVV'),
  expirationDate: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiration date'),
});

export type PaymentFormInputs = z.infer<typeof schema>;

export function PaymentForm() {
  const paymentForm = usePaymentForm((state) => state.paymentForm);
  const updatePaymentForm = usePaymentForm((state) => state.updatePaymentForm);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PaymentFormInputs>({
    defaultValues: paymentForm,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<PaymentFormInputs> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      updatePaymentForm({ data });
    } catch {
      setError('root', { message: 'Something went wrong' });
    }
  };

  useEffect(() => {
    reset(paymentForm);
  }, [paymentForm, reset]);

  return (
    <section className='min-h-dvh flex flex-col mt-4 flex-1 md:border-r-1 border-r-gray-400 md:pr-3 lg:pr-6 xl:pr-12'>
      <h2 className='font-bold text-dark-text text-xl xl:text-2xl'>
        Payment method
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col border-t-1 border-t-gray-400 mt-1 pt-1 gap-2 xl:grid xl:grid-cols-2 xl:gap-4 xl:mt-3 xl:pt-3'
      >
        <label htmlFor={ids.name} className='flex-col flex text-dark-text'>
          Name
          <input
            className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
            type='text'
            id={ids.name}
            {...register('name')}
          />
          {errors.name && (
            <span className='text-red-800'>{errors.name.message}</span>
          )}
        </label>
        <label
          htmlFor={ids.cardNumber}
          className='flex-col flex text-dark-text'
        >
          Card Number
          <input
            className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
            type='text'
            id={ids.cardNumber}
            {...register('cardNumber')}
          />
          {errors.cardNumber && (
            <span className='text-red-800'>{errors.cardNumber.message}</span>
          )}
        </label>
        <label htmlFor={ids.cvv} className='flex-col flex text-dark-text'>
          CVV
          <input
            className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
            type='password'
            id={ids.cvv}
            {...register('cvv')}
          />
          {errors.cvv && (
            <span className='text-red-800'>{errors.cvv.message}</span>
          )}
        </label>
        <label
          htmlFor={ids.expirationDate}
          className='flex-col flex text-dark-text'
        >
          Expiration Date
          <input
            className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
            placeholder='MM/YY'
            type='text'
            id={ids.expirationDate}
            {...register('expirationDate')}
          />
          {errors.expirationDate && (
            <span className='text-red-800'>
              {errors.expirationDate.message}
            </span>
          )}
        </label>
        <button
          disabled={isSubmitting}
          className={`bg-dark-gray text-white py-3 px-20 font-semibold rounded-sm mt-3 xl:self-center ${
            isSubmitting ? 'cursor-default opacity-80' : 'cursor-pointer'
          }`}
        >
          {isSubmitting ? 'Saving...' : 'Save as default card'}
        </button>
      </form>
      {errors.root && (
        <span className='text-red-800'>{errors.root.message}</span>
      )}
    </section>
  );
}

const ids = {
  name: 'name',
  cardNumber: 'card number',
  cvv: 'cvv',
  expirationDate: 'expiration date',
};
