import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { throttle } from 'lodash'

const Footer = () => {
  const [showPinnedCharacter, setShowPinnedCharacter] = useState(true)

  useEffect(() => {
    document.addEventListener(
      'scroll',
      throttle(() => {
        if (window.scrollY > 80) {
          setShowPinnedCharacter(false)
        } else {
          setShowPinnedCharacter(true)
        }
      }, 100)
    )
  }, [])
  return (
    <>
      <footer className="w-screen py-6 mt-16 bg-lotus-red">
        <div className="container px-8 mx-auto text-xs text-white font-lotus-pixelmix">
          <div className="flex items-center">
            <Link href="/" passHref>
              <a className="flex items-center">
                <div className="mr-3">
                  <Image src="/img/lotus-white.svg" width={20} height={20} />
                </div>
                Lotus Gang
              </a>
            </Link>
            <ul className="flex items-center ml-auto md:ml-10">
              <li>
                <a
                  href="https://discord.gg/vs8VvHb35k"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-white cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 23.28 17.74"
                    width="16px"
                    height="16px">
                    <path
                      fill="currentColor"
                      d="M19.71,1.47C18.22,.79,16.63,.29,14.97,0c-.03,0-.06,0-.08,.04-.2,.36-.43,.84-.59,1.21-1.79-.27-3.57-.27-5.32,0-.16-.38-.39-.85-.6-1.21-.02-.03-.05-.04-.08-.04-1.66,.29-3.25,.79-4.74,1.47-.01,0-.02,.01-.03,.03C.52,6.01-.31,10.4,.1,14.75c0,.02,.01,.04,.03,.05,1.99,1.46,3.92,2.35,5.81,2.94,.03,0,.06,0,.08-.03,.45-.61,.85-1.26,1.19-1.93,.02-.04,0-.09-.04-.1-.63-.24-1.24-.53-1.82-.87-.05-.03-.05-.09,0-.12,.12-.09,.24-.19,.36-.28,.02-.02,.05-.02,.08-.01,3.81,1.74,7.93,1.74,11.7,0,.02-.01,.05,0,.08,0,.12,.1,.24,.19,.36,.28,.04,.03,.04,.1,0,.12-.58,.34-1.18,.63-1.82,.86-.04,.02-.06,.06-.04,.1,.35,.68,.75,1.32,1.19,1.93,.02,.03,.05,.04,.08,.03,1.9-.59,3.83-1.48,5.82-2.94,.02-.01,.03-.03,.03-.05,.49-5.02-.81-9.38-3.44-13.25,0-.01-.02-.02-.03-.03ZM7.78,12.1c-1.15,0-2.09-1.05-2.09-2.35s.93-2.35,2.09-2.35,2.11,1.06,2.09,2.35c0,1.29-.93,2.35-2.09,2.35Zm7.74,0c-1.15,0-2.09-1.05-2.09-2.35s.93-2.35,2.09-2.35,2.11,1.06,2.09,2.35c0,1.29-.92,2.35-2.09,2.35Z"
                    />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="https://twitter.com/LotusGangNFT"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-white cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22.27 18.23"
                    width="16px"
                    height="16px">
                    <path
                      fill="currentColor"
                      d="M21.76,2.1c-.35,.16-.71,.29-1.08,.39,.44-.49,.77-1.07,.97-1.7,.05-.14,0-.3-.12-.39-.12-.09-.28-.1-.41-.03-.78,.46-1.62,.8-2.51,.99-.89-.87-2.1-1.36-3.35-1.36-2.64,0-4.78,2.14-4.78,4.78,0,.21,.01,.41,.04,.62-3.27-.29-6.31-1.89-8.4-4.46-.07-.09-.19-.14-.31-.13-.12,0-.22,.08-.28,.18-.42,.73-.65,1.56-.65,2.4,0,1.15,.41,2.24,1.14,3.1-.22-.08-.44-.17-.64-.29-.11-.06-.24-.06-.35,0-.11,.06-.18,.18-.18,.3,0,.02,0,.04,0,.06,0,1.72,.93,3.27,2.34,4.11-.12-.01-.24-.03-.36-.05-.12-.02-.25,.02-.34,.11-.08,.09-.11,.23-.07,.35,.52,1.63,1.87,2.84,3.5,3.2-1.35,.85-2.9,1.29-4.52,1.29-.34,0-.68-.02-1.01-.06-.17-.02-.32,.08-.38,.24-.06,.16,0,.33,.14,.42,2.08,1.34,4.5,2.04,6.97,2.04,4.87,0,7.91-2.29,9.61-4.22,2.12-2.4,3.33-5.58,3.33-8.72,0-.13,0-.26,0-.4,.83-.63,1.55-1.39,2.14-2.27,.09-.13,.08-.31-.02-.43-.1-.12-.27-.16-.42-.1Z"
                    />
                  </svg>
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="https://magiceden.io/marketplace/lotus_gang_nft"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-white cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 29.81 18.14"
                    width="16px"
                    height="16px">
                    <path
                      fill="currentColor"
                      d="M14.91,14.81c0,1.84,1.36,3.33,3.04,3.33h10.12c.96,0,1.74-.85,1.74-1.91s-.78-1.91-1.74-1.91h-7.38s-.08-.04-.08-.09c0-.03,.01-.05,.03-.07l3.35-3.08c.54-.5,.86-1.24,.86-2.01s-.31-1.5-.85-2l-3.31-3.08s-.03-.04-.03-.07c0-.05,.04-.09,.08-.09h7.33c.96,0,1.74-.85,1.74-1.91S29.03,0,28.07,0H14.91V4.86l4.29,4.06s.07,.1,.07,.16-.02,.12-.07,.16l-3.24,3.06c-.67,.63-1.05,1.55-1.05,2.52Z"
                    />
                    <path
                      fill="currentColor"
                      d="M2.91,0C1.3,0,0,1.43,0,3.19v12.85c0,1.16,.86,2.1,1.92,2.1s1.92-.94,1.92-2.1V7.02s.04-.09,.08-.09c.03,0,.06,.02,.07,.06l3.45,9.78c.27,.76,.93,1.25,1.67,1.25s1.4-.5,1.67-1.25l3.47-9.78,.66-2.14V0c-.95,0-1.8,.63-2.15,1.59l-3.52,9.55c-.02,.06-.07,.1-.13,.1s-.11-.04-.13-.1L5.61,2c-.44-1.21-1.51-2-2.7-2Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div
        className="fixed bottom-0 right-0 z-10 flex w-56 transition duration-500 pointer-events-none md:w-96 lg:w-auto"
        style={{
          transform: showPinnedCharacter ? 'translateY(0)' : 'translateY(50vh)',
        }}>
        <Image
          src="/img/character-fpo.png"
          width={548}
          height={759}
          className="w-auto"
        />
      </div>
    </>
  )
}

export default Footer
