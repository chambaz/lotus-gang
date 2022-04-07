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
          <img
            src="/img/gang.gif"
            className="rounded-3xl"
            style={{ maxWidth: 258 }}
          />
        </div>
        <div className="w-full mt-6 space-y-4 leading-relaxed md:mt-0 md:ml-6">
          <p>
            <strong>Lotus Gang</strong> is a brand built around{' '}
            <strong>art</strong>, <strong>education</strong> and{' '}
            <strong>empowerment</strong>.
          </p>
          <p>
            Our GEN 0 collection contains 2,000 lads and 2,000 ladies that give
            you access to our ongoing projects and closed community.
          </p>

          <p>
            By owning a Lad or Lady, you will receive exclusive insights from
            our research team and opportunities for exposure to other exciting
            communities in across Blockchains.
          </p>

          <p>
            <strong>Lotus Gang</strong> launched on Solana during October 2021.
            We donated $52,000 USD to United Sikhs to assist with the
            Farmer&apos;s Protest.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default About
