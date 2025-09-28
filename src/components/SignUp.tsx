'use client';
import { signUp } from '@/firebase/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { EyeClosed, EyeOpen, Lock, Mail } from './Icons';

interface Errors {
  email?: string;
  password?: string;
  root?: string;
}

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const router = useRouter();

  const validate = () => {
    const newErrors: Errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~]).{8,}$/;
    if (!password) {
      newErrors.password = 'Password required';
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        'Password must have uppercase, lowercase, number, symbol and be at least 8 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const cleanEmail = email.trim().toLowerCase();
    signUp(cleanEmail, password)
      .then(() => router.push('/'))
      .catch(() =>
        setErrors((prev) => ({ ...prev, root: 'Email already in use' }))
      );
  };

  return (
    <>
      <form onSubmit={handleSignUp} className='form'>
        <h2 className='text-center text-3xl font-semibold text-dark-text mb-2'>
          Register
        </h2>
        <p className='text-center mb-10 text-xl font-semibold text-gray-500'>
          Create a new account
        </p>
        <div className='flex flex-col gap-5'>
          <label
            htmlFor='email'
            className='text-xl font-bold text-gray-500 transition-all duration-300'
          >
            Email
            <div className='mt-2 flex items-center gap-2 bg-gray-100 text-gray-600 border-1 border-gray-300 p-2 px-3 transition-all duration-250 outline-transparent focus-within:border-yellow-500 rounded-sm group text-lg font-normal'>
              <Mail className='group-hover:fill-yellow-500 group-focus-within:fill-yellow-500 transition-all duration-200 text-yellow-600' />
              <input
                data-test='email-input'
                autoFocus
                id='email'
                type='email'
                className=' text-gray-700 focus-visible:outline-0 w-full peer'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && (
              <small className='text-red-500 font-normal form'>
                {errors.email}
              </small>
            )}
          </label>
          <label
            htmlFor='password'
            className='text-xl font-bold text-gray-500 transition-all duration-300'
          >
            Password
            <div className='mt-2 flex items-center gap-2 bg-gray-100 text-gray-700 border-1 border-gray-300 py-1 px-3 transition-all duration-250 outline-transparent focus-within:border-yellow-500 rounded-sm group text-lg font-normal'>
              <Lock className='group-hover:fill-yellow-500 group-focus-within:fill-yellow-500 transition-all duration-200 text-yellow-600' />
              <div className='flex w-full'>
                <input
                  data-test='password-input'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  className='text-gray-700 focus-visible:outline-0 w-full peer'
                />
                <button
                  type='button'
                  title={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className='rounded-full hover:bg-gray-300 transition-colors duration-250 text-gray-600 p-2 cursor-pointer'
                >
                  {showPassword ? (
                    <EyeClosed className='size-6 text-gray-600' />
                  ) : (
                    <EyeOpen className='size-6 text-gray-600' />
                  )}
                </button>
              </div>
            </div>
            {errors.password && (
              <small className='text-red-500 font-normal form'>
                {errors.password}
              </small>
            )}
          </label>
          {errors.root && (
            <span className='text-red-500 font-normal form'>{errors.root}</span>
          )}
          <button
            data-test='confirm-button'
            type='submit'
            className='bg-yellow-500 text-white p-3 font-semibold cursor-pointer rounded-sm text-lg hover:bg-yellow-400 transition-colors duration-250'
          >
            Sign up
          </button>
        </div>
      </form>
      <Link
        href='/log-in'
        data-test='change-mode-button'
        className='text-blue-600 block text-pretty text-center text-md mt-10 mx-auto cursor-pointer w-fit'
      >
        Already have an account? - Log in
      </Link>
    </>
  );
}
