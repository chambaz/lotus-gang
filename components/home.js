import { useState, useEffect } from 'react'
import Section from './section'
import Parallax from './parallax'

const Home = () => {
  const [parallaxImage, setParallaxImage] = useState('')

  useEffect(() => {
    setParallaxImage(
      <Parallax offset={200} clampInitial>
        <img
          src="/img/lotus-lady.jpg"
          className="absolute hidden lg:block rounded-3xl"
          style={{ width: 300, top: -175, right: -400 }}
        />
      </Parallax>
    )
  }, [])

  return (
    <Section
      title="Lotus Gang"
      id="home"
      className="!items-start md:!items-center md:-translate-y-24 pt-32">
      <p className="relative z-10 max-w-lg mt-12 mb-6 text-lg leading-relaxed">
        The Lotus is a native Indian pond flower. It is described as a burst of
        purity in muddy waters and is a symbol of wisdom.
        {parallaxImage}
      </p>

      <a
        href="https://magiceden.io/marketplace/lotus_gang_nft"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center px-6 pt-2 pb-3 text-sm text-white uppercase transition border-2 rounded-full border-lotus-red font-lotus-pixelmix bg-lotus-red hover:bg-transparent hover:text-lotus-red">
        Buy now on
        <div
          className="flex items-center ml-4"
          style={{ transform: 'translateY(1px)' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29.81 18.14"
            width="23px"
            height="23px">
            <path
              fill="currentColor"
              d="M14.91,14.81c0,1.84,1.36,3.33,3.04,3.33h10.12c.96,0,1.74-.85,1.74-1.91s-.78-1.91-1.74-1.91h-7.38s-.08-.04-.08-.09c0-.03,.01-.05,.03-.07l3.35-3.08c.54-.5,.86-1.24,.86-2.01s-.31-1.5-.85-2l-3.31-3.08s-.03-.04-.03-.07c0-.05,.04-.09,.08-.09h7.33c.96,0,1.74-.85,1.74-1.91S29.03,0,28.07,0H14.91V4.86l4.29,4.06s.07,.1,.07,.16-.02,.12-.07,.16l-3.24,3.06c-.67,.63-1.05,1.55-1.05,2.52Z"
            />
            <path
              fill="currentColor"
              d="M2.91,0C1.3,0,0,1.43,0,3.19v12.85c0,1.16,.86,2.1,1.92,2.1s1.92-.94,1.92-2.1V7.02s.04-.09,.08-.09c.03,0,.06,.02,.07,.06l3.45,9.78c.27,.76,.93,1.25,1.67,1.25s1.4-.5,1.67-1.25l3.47-9.78,.66-2.14V0c-.95,0-1.8,.63-2.15,1.59l-3.52,9.55c-.02,.06-.07,.1-.13,.1s-.11-.04-.13-.1L5.61,2c-.44-1.21-1.51-2-2.7-2Z"
            />
          </svg>
        </div>
      </a>
    </Section>
  )
}

export default Home
