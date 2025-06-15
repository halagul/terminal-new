// app/page.js
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Welcome to My Static Website</h1>
      <Link href="/products">View Products</Link>
    </main>
  );
}
