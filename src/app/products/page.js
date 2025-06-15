// app/products/page.js
import Link from 'next/link'
//import { products } from '@/lib/data'
import { products } from '../../../lib/data';

export default function ProductList() {
  return (
    <main>
      <h1>Product Listing</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
