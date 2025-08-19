export interface FakeStoreAPIResponse {
  status: string;
  message: string;
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  brand: string;
  model: string;
  color?: string;
  category: string;
  discount?: number;
  popular?: boolean;
  onSale?: boolean;
  item: Product;
  qty?: number;
}
