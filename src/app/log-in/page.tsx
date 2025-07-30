export default function LogIn() {
  return (
    // <main className='flex-1 min-h-dvh mx-auto max-w-lg p-6'>
    //   <form>
    //     <h2 className='text-center text-2xl font-semibold mb-10 text-dark-text'>
    //       Sign in/Register
    //     </h2>
    //     <div className='flex flex-col gap-5'>
    //       <label htmlFor='email' className='flex-col flex text-gray-500'>
    //         Email
    //         <input
    //           autoFocus
    //           id='email'
    //           type='email'
    //           className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
    //         />
    //       </label>

    //       <button
    //         type='submit'
    //         className='bg-dark-gray text-white p-3 font-semibold cursor-pointer rounded-sm'
    //       >
    //         Continue
    //       </button>
    //     </div>
    //     <small className='text-placeholder block text-pretty text-center mt-10'>
    //       By continuing, you agree to our{' '}
    //       <a href='' className='text-blue-600'>
    //         Privacy & Cookie Policy
    //       </a>{' '}
    //       and{' '}
    //       <a href='' className='text-blue-600'>
    //         Terms & Conditions
    //       </a>
    //       .
    //     </small>
    //   </form>
    // </main>
    <main className='flex-1 min-h-dvh mx-auto max-w-lg p-6'>
      <div className='mb-4'>
        <h2 className='font-semibold text-2xl text-dark-text'>So, your New!</h2>
        <small className='text-placeholder text-sm'>
          Set your password to create an account.
        </small>
      </div>
      <div className='mb-4'>
        <h3 className='text-placeholder text-md'>Email Address</h3>
        <button className='bg-gray-200 text-placeholder font-semibold p-2 px-3 w-full text-start'>
          josevigodev@gmail.com
        </button>
      </div>
      <form className='flex flex-col gap-5'>
        <label htmlFor='password' className='text-placeholder flex flex-col'>
          Password
          <input
            id='password'
            type='password'
            className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
          />
        </label>
        <button
          type='submit'
          className='bg-dark-gray text-white p-3 font-semibold cursor-pointer rounded-sm'
        >
          Register
        </button>
        <small className='text-placeholder block text-pretty text-center mt-10 text-sm'>
          By continuing, you agree to our{' '}
          <a href='' className='text-blue-600'>
            Privacy & Cookie Policy
          </a>{' '}
          and{' '}
          <a href='' className='text-blue-600'>
            Terms & Conditions
          </a>
          .
        </small>
      </form>
    </main>
  );
}
