// app/products/[id]/page.js
//import { products } from '@/lib/data'


// export async function generateStaticParams() {
//   return products.map(product => ({
//     id: product.id
//   }));
// }

// export default function ProductDetail({ params }) {
//   const product = products.find(p => p.id === params.id)

//   if (!product) return <p>Product not found</p>

//   return (
//     <main>
//       <h1>{product.title}</h1>
//       <img src={product.image} alt={product.title} width="300" />
//       <p>{product.description}</p>
//     </main>
//   )

import { menuItems } from '../../../../lib/menu';

export async function generateStaticParams() {
  return menuItems.map(item => ({ id: item.id }))
}

export default function MenuDetail({ params }) {
  const item = menuItems.find(p => p.id === params.id)

  if (!item) return <p>Item not found</p>

  return (
    <section className="detail">
      <img src={item.image} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <strong>{item.price}</strong>
      </div>
    </section>
  )
}

