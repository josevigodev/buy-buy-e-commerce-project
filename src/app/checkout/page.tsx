import { ShippingForm } from '@/components/forms/ShippingForm';
import { OrderSummary } from '@/components/OrderSummary';
import ProtectedClient from '@/components/ProtectedClient';

export default function CheckoutPage() {
  return (
    <main className='flex-1 mb-20 min-h-dvh px-3 flex flex-col md:flex-row xl:px-15'>
      <ProtectedClient>
        <ShippingForm />
        <section className='mt-4 md:w-sm flex flex-col md:pl-3 lg:pl-6 xl:pl-12 '>
          <OrderSummary />
        </section>
      </ProtectedClient>
    </main>
  );
}
