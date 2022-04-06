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
            of purity in muddy waters and is a symbol of wisdom.
          </p>

          <button className="flex items-center px-6 pt-2 pb-3 text-sm text-white uppercase transition rounded-full font-lotus-pixelmix bg-lotus-red">
            Buy now on
            <div
              className="flex items-center ml-4"
              style={{ transform: 'translateY(1px)' }}>
              <Image src="/img/magic-eden-white.svg" width={23} height={23} />
            </div>
          </button>
        </Section>
        <Section title="About" underline="right">
          <div className="flex items-start mt-12">
            <Image src="/img/lotus-lady-fpo.jpg" width={212} height={212} />
            <div className="max-w-2xl ml-6 space-y-4 text-lg leading-relaxed">
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
                Farmer&apos;s Protest.
              </p>
            </div>
          </div>
        </Section>
        <Section title="Roadmap">
          <div className="max-w-4xl mt-12 mb-6 text-lg leading-relaxed">
            <p>
              Our “roadmap” has continuosly evolved since our humble beginnings.
              We continue to create value by expanding our scope and deep dive
              into our strengths.
            </p>
            <ul className="my-8">
              <li className="flex items-center my-4">
                <span className="w-20 px-4 py-2 mr-3 text-xs text-center text-white uppercase rounded-full font-lotus-pixelmix bg-lotus-green">
                  Done
                </span>
                Launch the first project with equal male and females
              </li>
              <li className="flex items-center my-4">
                <span className="w-20 px-4 py-2 mr-3 text-xs text-center text-white uppercase rounded-full font-lotus-pixelmix bg-lotus-green">
                  Done
                </span>
                Donate 10% of Mint to Charity
              </li>
              <li className="flex items-center my-4">
                <span className="w-20 px-4 py-2 mr-3 text-xs text-center text-white uppercase rounded-full font-lotus-pixelmix bg-lotus-green">
                  Done
                </span>
                Onboard a charity to the blockchain to demonstrate the
                capabilities and raise awareness
              </li>
              <li className="flex items-center my-4">
                <span className="w-20 px-4 py-2 mr-3 text-xs text-center text-white uppercase rounded-full font-lotus-pixelmix bg-lotus-green">
                  Done
                </span>
                Build a HUB WORLD of information and useful tools and
                opportunities for holders
              </li>
              <li className="flex items-center my-4">
                <span className="w-20 px-4 py-2 mr-3 text-xs text-center text-white uppercase rounded-full font-lotus-pixelmix bg-lotus-orange">
                  wip
                </span>
                Explore metaverse integration in the second and third dimension
              </li>
              <li className="flex items-center my-4">
                <span className="w-20 px-4 py-2 mr-3 text-xs text-center text-white uppercase rounded-full font-lotus-pixelmix bg-lotus-orange">
                  wip
                </span>
                Explore gaming and play-to-earn opportunities
              </li>
              <li className="flex items-center my-4">
                <span className="w-20 px-4 py-2 mr-3 text-xs text-center text-white uppercase rounded-full font-lotus-pixelmix bg-lotus-orange">
                  wip
                </span>
                Merchandise
              </li>
              <li className="flex items-center my-4">
                <span className="w-20 px-4 py-2 mr-3 text-xs text-center text-white uppercase rounded-full font-lotus-pixelmix bg-lotus-orange">
                  wip
                </span>
                Anything that creates value for holders and community
              </li>
            </ul>
            <p>
              With the speed at which this space changes, we aim to adapt and
              deliver under any conditions. This means our roadmap is flexible
              with the only constant being the creation of value and a brand you
              can be proud of.
            </p>
          </div>
        </Section>
        <footer className="w-screen py-6 bg-lotus-red">
          <div className="container px-4 mx-auto text-xs text-white font-lotus-pixelmix">
            <div className="flex items-center">
              <div className="mr-3">
                <Image src="/img/lotus-white.svg" width={20} height={20} />
              </div>
              Lotus Gang
              <ul className="flex items-center ml-10">
                <li>
                  <a
                    href="https://discord.gg/vs8VvHb35k"
                    target="_blank"
                    className="flex items-center cursor-pointer">
                    <Image
                      src="/img/discord-white.svg"
                      width={16}
                      height={16}
                    />
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="https://twitter.com/LotusGangNFT"
                    target="_blank"
                    className="flex items-center cursor-pointer">
                    <Image
                      src="/img/twitter-white.svg"
                      width={16}
                      height={16}
                    />
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="https://magiceden.io/marketplace/lotus_gang_nft"
                    target="_blank"
                    className="flex items-center cursor-pointer">
                    <Image
                      src="/img/magic-eden-white.svg"
                      width={16}
                      height={16}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="fixed bottom-0 right-0 z-10 flex">
          <Image src="/img/character-fpo.png" width={548} height={759} />
        </div>
      </div>
    </>
  )
}
