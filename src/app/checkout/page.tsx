import { ShippingForm } from '@/components/ShippingForm';
import { OrderSummary } from '../../components/OrderSummary';

export default function CheckoutPage() {
  return (
    <main className='flex-1 mb-20 px-3 flex flex-col md:flex-row lg:px-15'>
      <ShippingForm />
      <section className='mt-4 max-w-md flex flex-col md:pl-3 lg:pl-6 xl:pl-12 '>
        <OrderSummary />
      </section>
    </main>
  );
}
