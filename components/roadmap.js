import Section from './section'

const Roadmap = () => {
  const items = [
    {
      status: 'done',
      text: 'Launch the first project with equal males and females',
    },
    {
      status: 'done',
      text: 'Donate 10% of mint to charity',
    },
    {
      status: 'done',
      text: 'Onboard a charity to the blockchain to demonstrate the capabilities and raise awareness',
    },
    {
      status: 'done',
      text: 'Build a HUB WORLD of information and useful tools and opportunities for holders',
    },
    {
      status: 'wip',
      text: 'Explore metaverse integration in the 2nd and 3rd dimension',
    },
    {
      status: 'wip',
      text: 'Explore gaming and play-to-earn opportunities',
    },
    {
      status: 'wip',
      text: 'Merchandise',
    },
    {
      status: 'wip',
      text: 'Anything that creates value for holders and community',
    },
  ]

  return (
    <Section title="Roadmap" id="roadmap">
      <div className="max-w-4xl mt-12 mb-6 leading-relaxed">
        <p>
          Our “roadmap” has continuously evolved since our humble beginnings. We
          continue to create value by expanding our scope and deep-diving into
          our strengths.
        </p>
        <ul className="my-8">
          {items.map((item, key) => {
            const classes =
              item.status === 'done' ? 'bg-lotus-green' : 'bg-lotus-orange'
            return (
              <li className="flex items-start my-6 md:items-center" key={key}>
                <span
                  className={`w-20 px-4 py-2 mr-3 text-xs text-center text-white uppercase rounded-full font-lotus-pixelmix ${classes}`}>
                  {item.status}
                </span>
                <p className="w-full ml-auto italic">{item.text}</p>
              </li>
            )
          })}
        </ul>
        <p>
          With the speed at which this space changes, we aim to adapt and
          deliver under any conditions. This means our roadmap is flexible with
          the only constant being the creation of value and a brand you can be
          proud of.
        </p>
      </div>
    </Section>
  )
}

export default Roadmap
