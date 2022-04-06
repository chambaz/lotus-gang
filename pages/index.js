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
        <meta name="description" content="Lotus Gang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-full overflow-x-hidden bg-lotus-beige">
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
