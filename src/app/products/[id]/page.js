// app/products/[id]/page.js
//import { products } from '@/lib/data'
import { products } from '../../../../lib/data';

export async function generateStaticParams() {
  return products.map(product => ({
    id: product.id
  }));
}

export default function ProductDetail({ params }) {
  const product = products.find(p => p.id === params.id)

  if (!product) return <p>Product not found</p>

  return (
    <main>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="300" />
      <p>{product.description}</p>
    </main>
  )
}
