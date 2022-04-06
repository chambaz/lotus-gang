import Image from 'next/image'
import Section from './section'

const About = () => {
  return (
    <Section title="About" underline="right">
      <div className="flex items-start mt-12">
        <Image src="/img/lotus-lady-fpo.jpg" width={212} height={212} />
        <div className="max-w-2xl ml-6 space-y-4 text-lg leading-relaxed">
          <p>
            Lotus Gang is a brand built around art, education and empowerment.
          </p>
          <p>
            Our GEN 0 collection contains 2,000 lads and 2,000 ladies that give
            you vaccess to our ongoing projects and closed community.
          </p>

          <p>
            Receive exclusive insights from our research team and opportunities
            for exposure to other exciting communities in our across
            Blockchains.
          </p>

          <p>Lotus Gang launched on Solana during October 2021.</p>

          <p>
            We donated $52,000 USD to United Sikhs to assist with the
            Farmer&apos;s Protest.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default About
