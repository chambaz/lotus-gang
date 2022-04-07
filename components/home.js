import { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import Section from './section'
import Parallax from './parallax'

const Home = () => {
  const [showImage, setShowImage] = useState(false)
  const [parallaxImage, setParallaxImage] = useState('')
  const [clientWidth, setClientWidth] = useState(0)

  useEffect(() => {
    const onResize = () => {
      setClientWidth(window.innerWidth)
    }

    onResize()
    window.addEventListener('resize', debounce(onResize, 100))

    setTimeout(() => {
      setShowImage(true)
    }, 1500)

    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    setParallaxImage(
      <Parallax offset={200}>
        <img
          src="/img/lotus-lady.jpg"
          className="absolute transition duration-1000 translate-y-10 -translate-x-28 lg:fixed rounded-3xl md:-translate-x-0 md:-translate-y-60 lg:-translate-y-80 xl:-translate-y-96"
          style={{
            width: clientWidth <= 768 ? '25vw' : '23vw',
            bottom: '8vh',
            right: '27vw',
            opacity: showImage ? 1 : 0,
          }}
        />
      </Parallax>
    )
  }, [clientWidth, showImage])

  return (
    <>
      <Section
        title="Lotus Gang"
        id="home"
        className="!items-start md:!items-center -translate-y-4 md:-translate-y-24 pt-32">
        <p className="relative z-10 max-w-lg mt-12 mb-6 leading-relaxed md:text-lg">
          The Lotus is a native Indian pond flower. It is described as a burst
          of purity in muddy waters and is a symbol of wisdom.
        </p>

        <div className="flex flex-col md:flex-row">
          <a
            href="https://magiceden.io/marketplace/lotus_gang_nft"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 pt-2 pb-3 mr-auto text-sm text-white uppercase transition border-2 rounded-full border-lotus-red font-lotus-pixelmix bg-lotus-red hover:bg-transparent hover:text-lotus-red md:mr-0">
            Buy now on
            <div
              className="flex items-center ml-3"
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

          <a
            href="https://opensea.io/collection/lotusgang"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 pt-2 pb-3 mt-2 ml-0 mr-auto text-sm text-white uppercase transition border-2 rounded-full md:mt-0 md:ml-4 border-lotus-red font-lotus-pixelmix bg-lotus-red hover:bg-transparent hover:text-lotus-red md:mr-0">
            Buy now on
            <div
              className="flex items-center ml-3"
              style={{ transform: 'translateY(1px)' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16.46 16.46"
                width="23px"
                height="23px">
                <path
                  fill="currentColor"
                  d="M8.23,0C3.68,0,0,3.68,0,8.23s3.68,8.23,8.23,8.23,8.23-3.68,8.23-8.23S12.77,0,8.23,0ZM4.06,8.5l.03-.06,2.14-3.35s.11-.04,.13,0c.36,.8,.67,1.8,.52,2.42-.06,.26-.23,.6-.42,.92-.02,.05-.05,.09-.08,.14-.01,.02-.04,.03-.06,.03h-2.2c-.06,0-.09-.06-.06-.11Zm9.54,1.15s-.02,.06-.04,.07c-.17,.07-.73,.33-.97,.66-.6,.84-1.06,2.04-2.09,2.04H6.21c-1.52,0-2.75-1.24-2.75-2.76v-.05s.03-.07,.07-.07h2.39s.08,.04,.08,.09c-.02,.15,.01,.31,.09,.46,.14,.29,.44,.47,.75,.47h1.18v-.92h-1.17c-.06,0-.1-.07-.06-.12,.01-.02,.03-.04,.04-.06,.11-.16,.27-.4,.43-.68,.11-.19,.21-.39,.29-.59,.02-.04,.03-.07,.04-.11,.02-.06,.05-.13,.06-.18,.02-.05,.03-.1,.04-.15,.04-.17,.06-.35,.06-.54,0-.07,0-.15,0-.22,0-.08-.01-.16-.02-.24,0-.07-.02-.14-.03-.21-.02-.11-.04-.21-.07-.32v-.04c-.03-.07-.05-.14-.07-.22-.07-.23-.14-.46-.23-.67-.03-.08-.06-.16-.1-.24-.05-.12-.1-.23-.15-.34-.02-.05-.04-.09-.06-.13-.02-.05-.05-.1-.07-.15-.02-.04-.04-.07-.05-.1l-.14-.27s.01-.08,.05-.07l.91,.25h0l.12,.03,.13,.04h.05v-.52c0-.26,.21-.47,.47-.47,.13,0,.25,.05,.33,.14,.08,.09,.14,.2,.14,.33v.8l.1,.03s.01,0,.02,.01c.02,.02,.06,.04,.1,.08,.03,.03,.07,.06,.11,.09,.09,.07,.19,.16,.31,.26,.03,.03,.06,.05,.09,.08,.15,.14,.31,.3,.47,.47,.04,.05,.09,.1,.13,.15,.04,.05,.09,.11,.13,.16,.05,.07,.11,.14,.16,.22,.02,.04,.05,.07,.07,.11,.07,.1,.12,.2,.18,.3,.02,.05,.05,.1,.07,.15,.06,.13,.11,.27,.14,.41,0,.03,.02,.06,.02,.09h0s.01,.09,.02,.13c.01,.14,0,.28-.02,.42-.01,.06-.03,.12-.05,.18-.02,.06-.04,.12-.07,.17-.05,.12-.11,.24-.18,.34-.02,.04-.05,.08-.08,.13-.03,.04-.06,.08-.09,.12-.04,.05-.08,.1-.12,.15-.04,.05-.07,.1-.11,.14-.06,.07-.11,.13-.17,.19-.03,.04-.07,.08-.11,.12-.04,.04-.07,.08-.11,.11-.06,.06-.1,.1-.14,.14l-.09,.08s-.03,.02-.05,.02h-.72v.92h.91c.2,0,.39-.07,.55-.2,.05-.05,.28-.25,.56-.55,0-.01,.02-.02,.03-.02l2.5-.72s.09,.02,.09,.07v.53h0Z"
                />
              </svg>
            </div>
          </a>
        </div>
      </Section>
      {parallaxImage}
    </>
  )
}

export default Home
