import Head from 'next/head'
import Nav from '../components/nav'
import Home from '../components/home'
import About from '../components/about'
import Roadmap from '../components/roadmap'
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Lotus Gang</title>
        <meta
          name="description"
          content="2,000 Lotus Lads and 2,000 Lotus Ladies on the Solana Blockchain"
        />
        <meta property="og:title" content="Lotus Gang" />
        <meta
          name="og:description"
          content="2,000 Lotus Lads and 2,000 Lotus Ladies on the Solana Blockchain"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.lotusgang.com/" />
        <meta
          property="og:image"
          content="https://www.lotusgang.com/img/share-og.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nytimes" />
        <meta name="twitter:creator" content="@SarahMaslinNir" />
        <meta name="twitter:title" content="Lotus Gang" />
        <meta
          name="twitter:description"
          content="2,000 Lotus Lads and 2,000 Lotus Ladies on the Solana Blockchain"
        />
        <meta
          name="twitter:image"
          content="https://www.lotusgang.com/img/share-twitter.jpg"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#b9523e" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <div className="w-screen min-h-full overflow-x-hidden bg-lotus-beige">
        <Nav />
        <Home />
        <About />
        <Roadmap />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
