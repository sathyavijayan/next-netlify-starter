import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Watch this space !" />
        <p className="description">
           In the meantime, just send me a good ol' <a href="mailto:sathyavijayan@sthaa.com">email</a>.
        </p>
      </main>

      <!-- Footer / -->
    </div>
  )
}
