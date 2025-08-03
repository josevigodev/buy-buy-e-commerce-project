'use client';
import { auth, signIn, signUp } from '@/firebase/client';
import { updateProfile } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function SignInUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSignIn, setShowSignIn] = useState(true);
  const [text, setText] = useState('');
  const router = useRouter();
  const user = auth.currentUser;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    signIn(cleanEmail, password)
      .then(() => router.push('/'))
      .catch(() => setText('Wrong'));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    signUp(cleanEmail, password)
      .then(() => router.push('/'))
      .catch((e) => {
        if (e) {
          setText('Account already exists');
        }
      });
  };

  const handleChandeMode = () => {
    setShowSignIn((prev) => !prev);
    setEmail('');
    setPassword('');
    setText('');
  };

  useEffect(() => {
    if (user) {
      updateProfile(user, { displayName: name });
    }
  }, [user, name]);

  return (
    <>
      <form onSubmit={handleSignIn}>
        <h2 className='text-center text-2xl font-semibold mb-10 text-dark-text'>
          {showSignIn ? 'Sign in' : 'Register'}
        </h2>
        <div className='flex flex-col gap-5'>
          {showSignIn || (
            <label htmlFor='name' className='flex-col flex text-gray-500'>
              Full name
              <input
                autoFocus
                id='name'
                type='text'
                className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          )}
          <label htmlFor='email' className='flex-col flex text-gray-500'>
            Email
            <input
              autoFocus
              id='email'
              type='email'
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor='password' className='text-placeholder flex flex-col'>
            Password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id='password'
              type='password'
              className='border-1 border-gray-400 text-dark-text p-2 px-3 focus-visible:outline-dark-gray focus-visible:outline-1 rounded-sm'
            />
          </label>
          <span className='text-red-500'>{text}</span>
          <button
            onClick={showSignIn ? handleSignIn : handleSignUp}
            type='submit'
            className='bg-dark-gray text-white p-3 font-semibold cursor-pointer rounded-sm'
          >
            {showSignIn ? 'Log in' : 'Register'}
          </button>
        </div>
      </form>
      <button
        onClick={handleChandeMode}
        className='text-blue-600 block text-pretty text-center text-sm mt-10 mx-auto cursor-pointer'
      >
        {showSignIn ? "You're new? - Register" : 'Already have an account'}
      </button>
    </>
  );
}
