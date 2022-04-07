import Section from './section'

const About = () => {
  return (
    <Section
      title="About"
      id="about"
      underline="right"
      className="pb-40 md:pb-0">
      <div className="flex flex-col items-start justify-start mt-12 md:max-w-5xl md:flex-row">
        <div className="flex">
          <img src="/img/gang.gif" style={{ maxWidth: 266 }} />
        </div>
        <div className="w-full mt-6 space-y-4 text-lg leading-relaxed md:mt-0 md:ml-6">
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
