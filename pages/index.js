import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'
import Section from '../components/section'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lotus Gang</title>
        <meta name="description" content="Lotus Gang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen h-full bg-lotus-beige">
        <Nav />
        <Section title="Lotus Gang">
          <p className="max-w-lg my-8 text-lg leading-relaxed">
            The Lotus is a native Indian pond flower. It is described as a burst
            of purity in muddy waters and is a symbol of wisdom.{' '}
          </p>

          <button className="flex items-center px-6 py-2 text-white uppercase rounded-full bg-lotus-red">
            Buy now on{' '}
            <div className="flex items-center ml-4">
              <Image src="/img/magic-eden-white.svg" width={23} height={23} />
            </div>
          </button>
        </Section>
        <Section title="About">
          <p className="max-w-lg my-8 text-lg leading-relaxed">
            The Lotus is a native Indian pond flower. It is described as a burst
            of purity in muddy waters and is a symbol of wisdom.{' '}
          </p>
        </Section>
        <Section title="Roadmap">
          <p className="max-w-lg my-8 text-lg leading-relaxed">
            The Lotus is a native Indian pond flower. It is described as a burst
            of purity in muddy waters and is a symbol of wisdom.{' '}
          </p>
        </Section>
      </div>
    </>
  )
}
