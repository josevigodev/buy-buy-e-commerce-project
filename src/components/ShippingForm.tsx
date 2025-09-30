'use client';
import { useShippingForm } from '@/store/shippingForm';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { PopUp } from './PopUp';
import { Loading } from './Loading';

const schema = z.object({
  firstName: z
    .string()
    .regex(/^[a-zA-Z]+$/, 'This field must contain only letters'),
  lastName: z
    .string()
    .regex(/^[a-zA-Z]+$/, 'This field must contain only letters'),
  country: z.string(),
  phoneNumber: z
    .string()
    .regex(/^[\d ]+$/, 'This field must contain only numbers')
    .min(8, 'The phone number must contain at least 8 numbers'),
  city: z.string().regex(/^[a-zA-Z]+/, 'This field must contain only letters'),
  state: z.string().optional(),
  postCode: z
    .string()
    .regex(/^[a-zA-Z0-9]*/, 'This field must contain only letters and numbers')
    .min(4, 'The post/zip code must contain at least 4 characters'),
  addressLine1: z
    .string()
    .min(5, 'The address must contain at least 5 characters'),
  addressLine2: z.string(),
});

export type ShippingFormInputs = z.infer<typeof schema>;

export function ShippingForm() {
  const disabled = 'pointer-events-none';
  const updateShippingForm = useShippingForm(
    (state) => state.updateShippingForm
  );
  const shippingForm = useShippingForm((state) => state.shippingForm);

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting, isDirty, isSubmitSuccessful },
  } = useForm<ShippingFormInputs>({
    defaultValues: shippingForm,
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (shippingForm) reset(shippingForm);
  }, [shippingForm, reset]);

  const onSubmit: SubmitHandler<ShippingFormInputs> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      updateShippingForm({ data });
      reset(data);
    } catch {
      setError('root', {
        message: 'Something went wrong',
      });
    }
  };

  return (
    <section className='min-h-dvh flex flex-col mt-4 mb-10 flex-1 md:border-r-1 border-r-gray-400 md:pr-3 lg:pr-6 xl:pr-12'>
      {isSubmitSuccessful && <PopUp text='Form saved successfully' />}
      <h2 className='font-bold text-dark-text text-xl xl:text-2xl'>
        Shipping Address
      </h2>
      <form
        className='flex flex-col border-t-1 border-t-gray-400 mt-1 pt-1 gap-2 lg:grid lg:grid-cols-2 lg:gap-4 lg:mt-3 lg:pt-3'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor={ids.firtName}
          className={`text-md lg:text-lg font-bold transition-all duration-300 ${
            errors.firstName ? 'text-red-400' : 'text-gray-500'
          }`}
        >
          *First Name
          <input
            data-test='first-name'
            className={`w-full flex items-center gap-2 text-gray-600 border-1 p-2 transition-all duration-250 outline-none rounded-sm group text-lg font-normal ${
              errors.firstName
                ? 'bg-red-200 border-red-500 focus:border-red-500'
                : 'border-gray-300 bg-gray-100 focus:border-yellow-500'
            }`}
            type='text'
            id={ids.firtName}
            {...register('firstName')}
          />
          {errors.firstName && (
            <span className='text-red-500 font-normal'>
              {errors.firstName.message}
            </span>
          )}
        </label>
        <label
          className={`text-lg font-bold transition-all duration-300 ${
            errors.lastName ? 'text-red-400' : 'text-gray-500'
          }`}
          htmlFor={ids.lastName}
        >
          *Last Name
          <input
            data-test='last-name'
            className={`w-full flex items-center gap-2 text-gray-600 border-1 p-3 transition-all duration-250 outline-none rounded-sm group text-lg font-normal ${
              errors.lastName
                ? 'bg-red-200 border-red-500 focus:border-red-500'
                : 'border-gray-300 bg-gray-100 focus:border-yellow-500'
            }`}
            type='text'
            id={ids.lastName}
            {...register('lastName')}
          />
          {errors.lastName && (
            <span className='text-red-500 font-normal'>
              {errors.lastName.message}
            </span>
          )}
        </label>
        <label
          htmlFor={ids.location}
          className={`text-lg font-bold transition-all duration-300 ${
            errors.country ? 'text-red-400' : 'text-gray-500'
          }`}
        >
          *Location
          <select
            data-test='location'
            className={`w-full flex items-center gap-2 text-gray-600 border-1 p-3 transition-all duration-250 outline-none rounded-sm group text-lg font-normal ${
              errors.country
                ? 'bg-red-200 border-red-500 focus:border-red-500'
                : 'border-gray-300 bg-gray-100 focus:border-yellow-500'
            }`}
            id={ids.location}
            {...register('country')}
          >
            <option value=''>Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && (
            <span className='text-red-500 font-normal'>
              {errors.country.message}
            </span>
          )}
        </label>
        <label
          className={`text-md lg:text-lg font-bold transition-all duration-300 ${
            errors.phoneNumber ? 'text-red-400' : 'text-gray-500'
          }`}
          htmlFor={ids.phone}
        >
          *Phone Number
          <input
            data-test='phone'
            className={`w-full flex items-center gap-2 text-gray-600 border-1 p-3 transition-all duration-250 outline-none rounded-sm group text-lg font-normal ${
              errors.phoneNumber
                ? 'bg-red-200 border-red-500 focus:border-red-500'
                : 'border-gray-300 bg-gray-100 focus:border-yellow-500'
            }`}
            type='text'
            id={ids.phone}
            {...register('phoneNumber')}
          />
          {errors.phoneNumber && (
            <span className='text-red-500 font-normal'>
              {errors.phoneNumber.message}
            </span>
          )}
        </label>
        <label
          className={`text-md lg:text-lg font-bold transition-all duration-300 ${
            errors.city ? 'text-red-400' : 'text-gray-500'
          }`}
          htmlFor={ids.city}
        >
          *City
          <input
            data-test='city'
            className={`w-full flex items-center gap-2 text-gray-600 border-1 p-3 transition-all duration-250 outline-none rounded-sm group text-lg font-normal ${
              errors.city
                ? 'bg-red-200 border-red-500 focus:border-red-500'
                : 'border-gray-300 bg-gray-100 focus:border-yellow-500'
            }`}
            type='text'
            id={ids.city}
            {...register('city')}
          />
          {errors.city && (
            <span className='text-red-500 font-normal'>
              {errors.city.message}
            </span>
          )}
        </label>
        <label
          className='text-md lg:text-lg font-bold transition-all duration-300 text-gray-500'
          htmlFor={ids.state}
        >
          State (Optional)
          <input
            data-test='state'
            className='w-full flex items-center gap-2 text-gray-600 border-1 p-3 transition-all duration-250 outline-none rounded-sm group text-lg font-normal border-gray-300 bg-gray-100 focus:border-yellow-500'
            type='text'
            id={ids.state}
            {...register('state')}
          />
        </label>
        <label
          className={`text-md col-span-2 lg:text-lg font-bold transition-all duration-300 ${
            errors.postCode ? 'text-red-400' : 'text-gray-500'
          }`}
          htmlFor={ids.postCode}
        >
          *Post/Zip Code
          <input
            data-test='post-code'
            className={`w-full flex items-center gap-2 text-gray-600 border-1 p-3 transition-all duration-250 outline-none rounded-sm group text-lg font-normal ${
              errors.postCode
                ? 'bg-red-200 border-red-500 focus:border-red-500'
                : 'border-gray-300 bg-gray-100 focus:border-yellow-500'
            }`}
            type='text'
            id={ids.postCode}
            {...register('postCode')}
          />
          {errors.postCode && (
            <span className='text-red-500 font-normal'>
              {errors.postCode.message}
            </span>
          )}
        </label>
        <label
          className={`text-md col-span-2 lg:text-lg font-bold transition-all duration-300 ${
            errors.addressLine1 ? 'text-red-400' : 'text-gray-500'
          }`}
          htmlFor={ids.addressLine1}
        >
          *Address Line 1
          <input
            data-test='address'
            className={`w-full flex items-center gap-2 text-gray-600 border-1 p-3 transition-all duration-250 outline-none rounded-sm group text-lg font-normal ${
              errors.addressLine1
                ? 'bg-red-200 border-red-500 focus:border-red-500'
                : 'border-gray-300 bg-gray-100 focus:border-yellow-500'
            }`}
            type='text'
            id={ids.addressLine1}
            {...register('addressLine1')}
          />
          {errors.addressLine1 && (
            <span className='text-red-500 font-normal'>
              {errors.addressLine1.message}
            </span>
          )}
        </label>
        <label
          className='text-md lg:text-lg col-span-2 font-bold transition-all duration-300 text-gray-500'
          htmlFor={ids.addressLine2}
        >
          Address Line 2
          <input
            className='w-full flex items-center gap-2 text-gray-600 border-1 p-3 transition-all duration-250 outline-none rounded-sm group text-lg font-normal border-gray-300 bg-gray-100 focus:border-yellow-500'
            type='text'
            id={ids.addressLine2}
            {...register('addressLine2')}
          />
        </label>
        <button
          data-test='save-button'
          disabled={isSubmitting}
          type='submit'
          className={`bg-dark-gray text-white py-3 px-20 font-semibold  rounded-sm mt-3 xl:self-center cursor-pointer relative ${
            (isSubmitting || !isDirty) && disabled
          } ${!isDirty && 'opacity-70'}`}
        >
          {isSubmitting ? 'Saving' : 'Save'}
          {isSubmitting && (
            <span className='absolute top-5 right-10'>
              <Loading color='bg-white' />
            </span>
          )}
        </button>
      </form>
    </section>
  );
}

const ids = {
  location: 'location',
  firtName: 'first name',
  lastName: 'last name',
  phone: 'phone',
  city: 'city',
  state: 'state',
  postCode: 'post code',
  addressLine1: 'address line 1',
  addressLine2: 'address line 2',
};

const countries = [
  'Albania',
  'Andorra',
  'Argentina',
  'Australia',
  'Austria',
  'Barbados',
  'Belgium',
  'Bermuda',
  'Bolivia',
  'Bosnia And Herzegovina',
  'Brazil',
  'Bulgaria',
  'Cambodia',
  'Canada',
  'Chile',
  'China',
  'Colombia',
  'Costa Rica',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Ecuador',
  'Egypt',
  'Estonia',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'Germany',
  'Gibraltar',
  'Greece',
  'Guadeloupe',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Ireland',
  'Italy',
  'Jamaica',
  'Japan',
  'Kazakhstan',
  'Kenya',
  'Latvia',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Malaysia',
  'Maldives',
  'Malta',
  'Martinique',
  'Mexico',
  'Micronesia',
  'Morocco',
  'Netherlands',
  'New Caledonia',
  'New Zealand',
  'Norway',
  'Oman',
  'Panama',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Reunion',
  'Romania',
  'Saint Martin',
  'Saudi Arabia',
  'Serbia',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'Sweden',
  'Taiwan',
  'Thailand',
  'Trinidad and Tobago',
  'Turkey',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Venezuela',
] as const;
