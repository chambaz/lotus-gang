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
          <p className="max-w-lg mt-12 mb-6 text-lg leading-relaxed">
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
        <Section title="About" underline="right">
          <div className="flex items-start mt-12">
            <Image src="/img/lotus-lady-fpo.jpg" width={212} height={212} />
            <div className="max-w-lg ml-6 space-y-4 text-lg leading-relaxed">
              <p>
                Lotus Gang is a brand built around art, education and
                empowerment.
              </p>
              <p>
                Our GEN 0 collection contains 2,000 lads and 2,000 ladies that
                give you vaccess to our ongoing projects and closed community.
              </p>

              <p>
                Receive exclusive insights from our research team and
                opportunities for exposure to other exciting communities in our
                across Blockchains.
              </p>

              <p>Lotus Gang launched on Solana during October 2021.</p>

              <p>
                We donated $52,000 USD to United Sikhs to assist with the
                Farmer&pos;s Protest.
              </p>
            </div>
          </div>
        </Section>
        <Section title="Roadmap">
          <p className="max-w-lg my-8 text-lg leading-relaxed">
            The Lotus is a native Indian pond flower. It is described as a burst
            of purity in muddy waters and is a symbol of wisdom.{' '}
          </p>
        </Section>
        <div className="fixed bottom-0 right-0 z-10 flex">
          <Image src="/img/character-fpo.png" width={548} height={759} />
        </div>
      </div>
    </>
  )
}
