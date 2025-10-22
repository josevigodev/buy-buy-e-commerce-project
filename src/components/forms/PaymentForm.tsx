'use client';
import { usePaymentForm } from '@/store/paymentForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { PopUp } from '@/components/ui/PopUp';
import { Loading } from '@/components/ui/Loading';

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
  const disabled = 'pointer-events-none';
  const paymentForm = usePaymentForm((state) => state.paymentForm);
  const updatePaymentForm = usePaymentForm((state) => state.updatePaymentForm);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting, isDirty, isSubmitSuccessful },
  } = useForm<PaymentFormInputs>({
    defaultValues: paymentForm,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<PaymentFormInputs> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      updatePaymentForm({ data });
      reset(data);
    } catch {
      setError('root', { message: 'Something went wrong' });
    }
  };

  useEffect(() => {
    reset(paymentForm);
  }, [paymentForm, reset]);

  return (
    <section className='md:min-h-dvh mb-10 flex flex-col mt-4 flex-1 md:border-r-1 border-r-gray-400 md:pr-3 lg:pr-6 xl:pr-12'>
      {isSubmitSuccessful && <PopUp text='Form saved successfully' />}
      <h2 className='font-bold text-dark-text text-xl xl:text-2xl'>
        Payment method
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col border-t-1 border-t-gray-400 mt-1 pt-1 gap-2 xl:grid xl:grid-cols-2 xl:gap-4 xl:mt-3 xl:pt-3'
      >
        <label
          htmlFor={ids.name}
          className={`text-md lg:text-lg font-bold transition-all duration-300 ${
            errors.name ? 'text-red-400' : 'text-gray-500'
          }`}
        >
          Name
          <input
            data-test='name'
            className={`w-full flex items-center gap-2 text-gray-600 border-1 p-2 transition-all duration-250 outline-none rounded-sm group text-lg font-normal ${
              errors.name
                ? 'bg-red-200 border-red-500 focus:border-red-500'
                : 'border-gray-300 bg-gray-100 focus:border-yellow-500'
            }`}
            type='text'
            id={ids.name}
            {...register('name')}
          />
          {errors.name && (
            <span className='text-red-500 font-normal'>
              {errors.name.message}
            </span>
          )}
        </label>
        <label
          htmlFor={ids.cardNumber}
          className={`text-md lg:text-lg font-bold transition-all duration-300 ${
            errors.cardNumber ? 'text-red-400' : 'text-gray-500'
          }`}
        >
          Card Number
          <input
            data-test='card-number'
            className={`w-full flex items-center gap-2 text-gray-600 border-1 p-2 transition-all duration-250 outline-none rounded-sm group text-lg font-normal ${
              errors.cardNumber
                ? 'bg-red-200 border-red-500 focus:border-red-500'
                : 'border-gray-300 bg-gray-100 focus:border-yellow-500'
            }`}
            type='text'
            id={ids.cardNumber}
            {...register('cardNumber')}
          />
          {errors.cardNumber && (
            <span className='text-red-500 font-normal'>
              {errors.cardNumber.message}
            </span>
          )}
        </label>
        <label
          htmlFor={ids.cvv}
          className={`text-md lg:text-lg font-bold transition-all duration-300 ${
            errors.cvv ? 'text-red-400' : 'text-gray-500'
          }`}
        >
          CVV
          <input
            data-test='cvv'
            className={`w-full flex items-center gap-2 text-gray-600 border-1 p-2 transition-all duration-250 outline-none rounded-sm group text-lg font-normal ${
              errors.cvv
                ? 'bg-red-200 border-red-500 focus:border-red-500'
                : 'border-gray-300 bg-gray-100 focus:border-yellow-500'
            }`}
            type='password'
            id={ids.cvv}
            {...register('cvv')}
          />
          {errors.cvv && (
            <span className='text-red-500 font-normal'>
              {errors.cvv.message}
            </span>
          )}
        </label>
        <label
          htmlFor={ids.expirationDate}
          className={`text-md lg:text-lg font-bold transition-all duration-300 ${
            errors.expirationDate ? 'text-red-400' : 'text-gray-500'
          }`}
        >
          Expiration Date
          <input
            data-test='expiration-date'
            className={`w-full flex items-center gap-2 text-gray-600 border-1 p-2 transition-all duration-250 outline-none rounded-sm group text-lg font-normal ${
              errors.expirationDate
                ? 'bg-red-200 border-red-500 focus:border-red-500'
                : 'border-gray-300 bg-gray-100 focus:border-yellow-500'
            }`}
            placeholder='MM/YY'
            type='text'
            id={ids.expirationDate}
            {...register('expirationDate')}
          />
          {errors.expirationDate && (
            <span className='text-red-500 font-normal'>
              {errors.expirationDate.message}
            </span>
          )}
        </label>
        <button
          data-test='save-button'
          disabled={isSubmitting}
          className={`bg-dark-gray relative text-white py-3 px-20 font-semibold rounded-sm mt-3 xl:self-center ${
            (isSubmitting || !isDirty) && disabled
          } ${!isDirty && 'opacity-70'}`}
        >
          {isSubmitting ? 'Saving' : 'Save as default card'}
          {isSubmitting && (
            <span className='absolute top-5 right-10'>
              <Loading color='bg-white' />
            </span>
          )}
        </button>
      </form>
      {errors.root && (
        <span className='text-red-500 font-normal'>{errors.root.message}</span>
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
