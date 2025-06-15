// app/products/page.js
// import Link from 'next/link'
// //import { products } from '@/lib/data'
// import { products } from '../../../lib/menu';

// export default function ProductList() {
//   return (
//     <main>
//       <h1>Product Listing</h1>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <Link href={`/products/${product.id}`}>{product.title}</Link>
//           </li>
//         ))}
//       </ul>
//       <Link href="/">Back to Home</Link>
//     </main>
//   );
// }
import Link from 'next/link'
//import { menuItems } from '@/lib/menu'
import { menuItems } from '../../../lib/menu'
export default function MenuPage() {
  return (
    <section>
      <h1>Our Menu</h1>
      <div className="card-grid">
        {menuItems.map(item => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.price}</p>
            <Link href={`/menu/${item.id}`} className="btn">View Item</Link>
          </div>
        ))}
      </div>
    </section>
  )
}
