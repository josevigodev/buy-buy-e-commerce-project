import { Filters } from '@/components/Filters';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/mocks/products.json';

export default async function Marcket() {
  // const response = await fetch('https://fakestoreapi.in/api/products?limit=23');
  // const data = (await response.json()) as FakeStoreAPIResponse;
  // const products = data.products;

  const mappedItems = [...products]?.map((item) => ({
    id: item.id,
    title: item.title,
    image: item.image,
    price: item.price,
    description: item.description,
    brand: item.brand,
    model: item.model,
    color: item.color,
    category: item.category,
    discount: item.discount,
    popular: item.popular,
    onSale: item.onSale,
  }));

  return (
    <main className='flex-1 mb-20 min-h-dvh px-3 lg:flex'>
      <Filters />
      <section className='grid gap-2 lg:grid-cols-4 flex-1 mt-5 lg:pl-3'>
        {mappedItems.map((item) => (
          <div key={item.id} className='border-1 border-product-frame flex'>
            <ProductCard {...item} item={item} />
          </div>
        ))}
      </section>
    </main>
  );
}
