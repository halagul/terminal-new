// // app/page.js
// import Link from 'next/link'

// export default function Home() {
//   return (
//     <main>
//       <h1>Welcome to My Static Website</h1>
//       <Link href="/products">View Products</Link>
//     </main>
//   );
// }
import Link from 'next/link'

export default function Home() {
  return (
    <section className="hero">
      <h1>Welcome to KFC</h1>
      <p>Finger Lickin' Good Deals Await!</p>
      <Link href="/menu" className="btn">View Menu</Link>
    </section>
  )
}
