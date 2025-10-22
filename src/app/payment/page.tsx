import ProtectedClient from '@/components/ProtectedClient';
import { OrderSummary } from '@/components/OrderSummary';
import { PaymentForm } from '@/components/forms/PaymentForm';

export default function PlaceOrderPage() {
  return (
    <main className='flex-1 min-h-dvh mb-20 px-3 flex flex-col md:flex-row lg:px-15'>
      <ProtectedClient>
        <PaymentForm />
        <section className='mt-4 md:w-sm flex flex-col md:pl-3 lg:pl-6 xl:pl-12 '>
          <OrderSummary />
        </section>
      </ProtectedClient>
    </main>
  );
}
