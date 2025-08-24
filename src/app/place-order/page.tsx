import { OrderSummary } from '../../components/OrderSummary';
// const ids = {
//   location: 'location',
//   firtName: 'first name',
//   lastName: 'last name',
//   phone: 'phone',
//   city: 'city',
//   state: 'state',
//   postCode: 'post code',
//   addressLine1: 'address line 1',
//   addressLine2: 'address line 2',
// };
const ids = {
  name: 'name',
  cardNumber: 'card number',
  cardSecurityCode: 'card security code',
  expirationDate: 'expiration date',
};

export default function PlaceOrderPage() {
  return (
    <main className='flex-1 mb-20 px-3 flex flex-col md:flex-row lg:px-15'>
      {/* <section className='min-h-dvh flex flex-col mt-4 flex-1 md:border-r-1 border-r-gray-400 md:pr-3 lg:pr-6 xl:pr-12'>
        <h2 className='font-bold text-dark-text text-xl xl:text-2xl'>
          Shipping Address
        </h2>
        <form className='flex flex-col border-t-1 border-t-gray-400 mt-1 pt-1 gap-2 xl:grid xl:grid-cols-2 xl:gap-4 xl:mt-3 xl:pt-3'>
          <label
            htmlFor={ids.firtName}
            className='flex-col flex text-dark-text'
          >
            *First Name
            <input
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              required
              type='text'
              id={ids.firtName}
            />
          </label>
          <label
            className='flex-col flex text-dark-text'
            htmlFor={ids.lastName}
          >
            *Last Name
            <input
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              required
              type='text'
              id={ids.lastName}
            />
          </label>
          <label
            htmlFor={ids.location}
            className='flex-col flex text-dark-text'
          >
            *Location
            <select
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              required
              id={ids.location}
            >
              <option value='none'>Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>
          <label className='flex-col flex text-dark-text' htmlFor={ids.phone}>
            *Phone Number
            <input
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              required
              type='text'
              id={ids.phone}
            />
          </label>
          <label className='flex-col flex text-dark-text' htmlFor={ids.city}>
            *City
            <input
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              required
              type='text'
              id={ids.city}
            />
          </label>
          <label className='flex-col flex text-dark-text' htmlFor={ids.state}>
            State (Optional)
            <input
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              type='text'
              id={ids.state}
            />
          </label>
          <label
            className='flex-col flex text-dark-text col-span-2'
            htmlFor={ids.postCode}
          >
            *Post/Zip Code
            <input
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              required
              type='text'
              id={ids.postCode}
            />
          </label>
          <label
            className='flex-col flex text-dark-text col-span-2'
            htmlFor={ids.addressLine1}
          >
            *Address Line 1
            <input
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              required
              type='text'
              id={ids.addressLine1}
            />
          </label>
          <label
            className='flex-col flex text-dark-text col-span-2'
            htmlFor={ids.addressLine2}
          >
            Address Line 2
            <input
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              type='text'
              id={ids.addressLine2}
            />
          </label>
        </form>
        <button className='bg-dark-gray text-white py-3 px-20 font-semibold cursor-pointer rounded-sm mt-3 xl:self-center'>
          Save
        </button>
      </section> */}
      <section className='min-h-dvh flex flex-col mt-4 flex-1 md:border-r-1 border-r-gray-400 md:pr-3 lg:pr-6 xl:pr-12'>
        <h2 className='font-bold text-dark-text text-xl xl:text-2xl'>
          Payment method
        </h2>
        <form className='flex flex-col border-t-1 border-t-gray-400 mt-1 pt-1 gap-2 xl:grid xl:grid-cols-2 xl:gap-4 xl:mt-3 xl:pt-3'>
          <label htmlFor={ids.name} className='flex-col flex text-dark-text'>
            Name
            <input
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              required
              type='text'
              id={ids.name}
            />
          </label>
          <label
            htmlFor={ids.cardNumber}
            className='flex-col flex text-dark-text'
          >
            Card Number
            <input
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              required
              type='text'
              id={ids.cardNumber}
            />
          </label>
          <label
            htmlFor={ids.cardSecurityCode}
            className='flex-col flex text-dark-text'
          >
            Card Security Code
            <input
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              required
              type='password'
              id={ids.cardSecurityCode}
            />
          </label>
          <label
            htmlFor={ids.expirationDate}
            className='flex-col flex text-dark-text'
          >
            Expiration Date
            <input
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              placeholder='MM/YY'
              required
              type='text'
              id={ids.expirationDate}
            />
          </label>
        </form>
        <button className='bg-dark-gray text-white py-3 px-20 font-semibold cursor-pointer rounded-sm mt-3 xl:self-center'>
          Save as default card
        </button>
      </section>
      <section className='mt-4 max-w-md flex flex-col md:pl-3 lg:pl-6 xl:pl-12 '>
        <OrderSummary />
        <button className='bg-dark-gray text-white p-3 font-semibold cursor-pointer rounded-sm mt-3'>
          Place order
        </button>
      </section>
    </main>
  );
}

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
];
