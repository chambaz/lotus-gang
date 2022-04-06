import Head from 'next/head'
import Nav from '../components/nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lotus Gang</title>
        <meta name="description" content="Lotus Gang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-screen bg-lotus-beige">
        <Nav />
        <div className="container mx-auto">
          <h1 className="text-6xl font-pixelmix-bold">Lotus Gang</h1>
        </div>
      </div>
    </>
  )
}
