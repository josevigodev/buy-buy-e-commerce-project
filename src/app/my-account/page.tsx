import ProtectedClient from '@/components/ProtectedClient';
import { SignOutButton } from '@/components/SignOutButton';

export default function MyAccountPage() {
  return (
    <main className='flex-1 min-h-screen mb-20 px-3 lg:px-5 bg-white pt-3'>
      <ProtectedClient>
        <SignOutButton />
      </ProtectedClient>
    </main>
  );
}
