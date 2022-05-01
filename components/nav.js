import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiMenuAlt1 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const Nav = () => {
  const [showNav, setShowNav] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef()

  const navigateTo = (id) => {
    const target = document.getElementById(id)

    if (!target) {
      return
    }

    const bounds = target.getBoundingClientRect()
    const offset = window.outerWidth < 768 ? 140 : 180

    setMobileMenuOpen(false)
    enableBodyScroll(mobileMenuRef.current)

    window.scrollTo({
      top: document.documentElement.scrollTop + bounds.top - offset,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    setTimeout(() => {
      setShowNav(true)
    }, 2000)
  }, [])

  return (
    <>
      <div
        className="fixed top-0 z-50 w-screen transition duration-1000 shadow-lg bg-lotus-beige shadow-lotus-beige"
        style={{ transform: showNav ? 'translateY(0)' : 'translateY(-100px)' }}>
        <div className="flex items-center px-8 py-4 2xl:container 2xl:mx-auto">
          <a onClick={() => navigateTo('home')} className="cursor-pointer">
            <Image src="/img/lotus.svg" width={50} height={50} />
          </a>

          <nav className="hidden ml-auto lg:!block">
            <ul className="flex items-center text-xl font-normal font-lotus-theboldfont text-lotus-red">
              <li>
                <a
                  onClick={() => navigateTo('about')}
                  className="block transition border-b-4 border-transparent cursor-pointer text-lotus-red hover:border-lotus-red"
                  style={{ transform: 'translateY(4px)' }}>
                  About
                </a>
              </li>
              <li className="ml-12">
                <a
                  onClick={() => navigateTo('roadmap')}
                  className="block transition border-b-4 border-transparent cursor-pointer text-lotus-red hover:border-lotus-red"
                  style={{ transform: 'translateY(4px)' }}>
                  Roadmap
                </a>
              </li>
              <li className="ml-12">
                <a
                  href="https://lotusgang.notion.site/Lotus-Library-cbd560cc5301430b99ac2b5b4df9d226"
                  target="_blank"
                  rel="noreferrer"
                  className="block transition border-b-4 border-transparent cursor-pointer text-lotus-red hover:border-lotus-red"
                  style={{ transform: 'translateY(4px)' }}>
                  Library
                </a>
              </li>
              <li className="ml-12">
                <a
                  href="https://lotusgang.myshopify.com/collections/all"
                  className="block transition border-b-4 border-transparent cursor-pointer text-lotus-red hover:border-lotus-red"
                  style={{ transform: 'translateY(4px)' }}>
                  Shop
                </a>
              </li>
              <li className="ml-20">
                <a
                  href="https://discord.gg/vs8VvHb35k"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center transition cursor-pointer text-lotus-red hover:text-lotus-red-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 23.28 17.74"
                    width="23px"
                    height="23px">
                    <path
                      fill="currentColor"
                      d="M19.71,1.47C18.22,.79,16.63,.29,14.97,0c-.03,0-.06,0-.08,.04-.2,.36-.43,.84-.59,1.21-1.79-.27-3.57-.27-5.32,0-.16-.38-.39-.85-.6-1.21-.02-.03-.05-.04-.08-.04-1.66,.29-3.25,.79-4.74,1.47-.01,0-.02,.01-.03,.03C.52,6.01-.31,10.4,.1,14.75c0,.02,.01,.04,.03,.05,1.99,1.46,3.92,2.35,5.81,2.94,.03,0,.06,0,.08-.03,.45-.61,.85-1.26,1.19-1.93,.02-.04,0-.09-.04-.1-.63-.24-1.24-.53-1.82-.87-.05-.03-.05-.09,0-.12,.12-.09,.24-.19,.36-.28,.02-.02,.05-.02,.08-.01,3.81,1.74,7.93,1.74,11.7,0,.02-.01,.05,0,.08,0,.12,.1,.24,.19,.36,.28,.04,.03,.04,.1,0,.12-.58,.34-1.18,.63-1.82,.86-.04,.02-.06,.06-.04,.1,.35,.68,.75,1.32,1.19,1.93,.02,.03,.05,.04,.08,.03,1.9-.59,3.83-1.48,5.82-2.94,.02-.01,.03-.03,.03-.05,.49-5.02-.81-9.38-3.44-13.25,0-.01-.02-.02-.03-.03ZM7.78,12.1c-1.15,0-2.09-1.05-2.09-2.35s.93-2.35,2.09-2.35,2.11,1.06,2.09,2.35c0,1.29-.93,2.35-2.09,2.35Zm7.74,0c-1.15,0-2.09-1.05-2.09-2.35s.93-2.35,2.09-2.35,2.11,1.06,2.09,2.35c0,1.29-.92,2.35-2.09,2.35Z"
                    />
                  </svg>
                </a>
              </li>
              <li className="ml-6">
                <a
                  href="https://twitter.com/LotusGangNFT"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center transition cursor-pointer text-lotus-red hover:text-lotus-red-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22.27 18.23"
                    width="23px"
                    height="23px">
                    <path
                      fill="currentColor"
                      d="M21.76,2.1c-.35,.16-.71,.29-1.08,.39,.44-.49,.77-1.07,.97-1.7,.05-.14,0-.3-.12-.39-.12-.09-.28-.1-.41-.03-.78,.46-1.62,.8-2.51,.99-.89-.87-2.1-1.36-3.35-1.36-2.64,0-4.78,2.14-4.78,4.78,0,.21,.01,.41,.04,.62-3.27-.29-6.31-1.89-8.4-4.46-.07-.09-.19-.14-.31-.13-.12,0-.22,.08-.28,.18-.42,.73-.65,1.56-.65,2.4,0,1.15,.41,2.24,1.14,3.1-.22-.08-.44-.17-.64-.29-.11-.06-.24-.06-.35,0-.11,.06-.18,.18-.18,.3,0,.02,0,.04,0,.06,0,1.72,.93,3.27,2.34,4.11-.12-.01-.24-.03-.36-.05-.12-.02-.25,.02-.34,.11-.08,.09-.11,.23-.07,.35,.52,1.63,1.87,2.84,3.5,3.2-1.35,.85-2.9,1.29-4.52,1.29-.34,0-.68-.02-1.01-.06-.17-.02-.32,.08-.38,.24-.06,.16,0,.33,.14,.42,2.08,1.34,4.5,2.04,6.97,2.04,4.87,0,7.91-2.29,9.61-4.22,2.12-2.4,3.33-5.58,3.33-8.72,0-.13,0-.26,0-.4,.83-.63,1.55-1.39,2.14-2.27,.09-.13,.08-.31-.02-.43-.1-.12-.27-.16-.42-.1Z"
                    />
                  </svg>
                </a>
              </li>
              <li className="ml-6">
                <a
                  href="https://magiceden.io/marketplace/lotus_gang_nft"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center transition cursor-pointer text-lotus-red hover:text-lotus-red-light">
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
                </a>
              </li>
              <li className="ml-6">
                <a
                  href="https://opensea.io/collection/lotusgang"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center transition cursor-pointer text-lotus-red hover:text-lotus-red-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16.46 16.46"
                    width="20px"
                    height="20px">
                    <path
                      fill="currentColor"
                      d="M8.23,0C3.68,0,0,3.68,0,8.23s3.68,8.23,8.23,8.23,8.23-3.68,8.23-8.23S12.77,0,8.23,0ZM4.06,8.5l.03-.06,2.14-3.35s.11-.04,.13,0c.36,.8,.67,1.8,.52,2.42-.06,.26-.23,.6-.42,.92-.02,.05-.05,.09-.08,.14-.01,.02-.04,.03-.06,.03h-2.2c-.06,0-.09-.06-.06-.11Zm9.54,1.15s-.02,.06-.04,.07c-.17,.07-.73,.33-.97,.66-.6,.84-1.06,2.04-2.09,2.04H6.21c-1.52,0-2.75-1.24-2.75-2.76v-.05s.03-.07,.07-.07h2.39s.08,.04,.08,.09c-.02,.15,.01,.31,.09,.46,.14,.29,.44,.47,.75,.47h1.18v-.92h-1.17c-.06,0-.1-.07-.06-.12,.01-.02,.03-.04,.04-.06,.11-.16,.27-.4,.43-.68,.11-.19,.21-.39,.29-.59,.02-.04,.03-.07,.04-.11,.02-.06,.05-.13,.06-.18,.02-.05,.03-.1,.04-.15,.04-.17,.06-.35,.06-.54,0-.07,0-.15,0-.22,0-.08-.01-.16-.02-.24,0-.07-.02-.14-.03-.21-.02-.11-.04-.21-.07-.32v-.04c-.03-.07-.05-.14-.07-.22-.07-.23-.14-.46-.23-.67-.03-.08-.06-.16-.1-.24-.05-.12-.1-.23-.15-.34-.02-.05-.04-.09-.06-.13-.02-.05-.05-.1-.07-.15-.02-.04-.04-.07-.05-.1l-.14-.27s.01-.08,.05-.07l.91,.25h0l.12,.03,.13,.04h.05v-.52c0-.26,.21-.47,.47-.47,.13,0,.25,.05,.33,.14,.08,.09,.14,.2,.14,.33v.8l.1,.03s.01,0,.02,.01c.02,.02,.06,.04,.1,.08,.03,.03,.07,.06,.11,.09,.09,.07,.19,.16,.31,.26,.03,.03,.06,.05,.09,.08,.15,.14,.31,.3,.47,.47,.04,.05,.09,.1,.13,.15,.04,.05,.09,.11,.13,.16,.05,.07,.11,.14,.16,.22,.02,.04,.05,.07,.07,.11,.07,.1,.12,.2,.18,.3,.02,.05,.05,.1,.07,.15,.06,.13,.11,.27,.14,.41,0,.03,.02,.06,.02,.09h0s.01,.09,.02,.13c.01,.14,0,.28-.02,.42-.01,.06-.03,.12-.05,.18-.02,.06-.04,.12-.07,.17-.05,.12-.11,.24-.18,.34-.02,.04-.05,.08-.08,.13-.03,.04-.06,.08-.09,.12-.04,.05-.08,.1-.12,.15-.04,.05-.07,.1-.11,.14-.06,.07-.11,.13-.17,.19-.03,.04-.07,.08-.11,.12-.04,.04-.07,.08-.11,.11-.06,.06-.1,.1-.14,.14l-.09,.08s-.03,.02-.05,.02h-.72v.92h.91c.2,0,.39-.07,.55-.2,.05-.05,.28-.25,.56-.55,0-.01,.02-.02,.03-.02l2.5-.72s.09,.02,.09,.07v.53h0Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          {mobileMenuOpen && (
            <IoClose
              onClick={() => {
                enableBodyScroll(mobileMenuRef.current)
                setMobileMenuOpen(false)
              }}
              className="ml-auto text-4xl cursor-pointer lg:!hidden text-lotus-red"
              style={{ transform: 'translateY(2px)' }}
            />
          )}

          {!mobileMenuOpen && (
            <HiMenuAlt1
              onClick={() => {
                disableBodyScroll(mobileMenuRef.current)
                setMobileMenuOpen(true)
              }}
              className="ml-auto text-4xl cursor-pointer lg:!hidden text-lotus-red"
              style={{ transform: 'translateY(2px)' }}
            />
          )}
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className="fixed z-40 w-screen h-full top-24 bg-lotus-beige"
        style={{ display: mobileMenuOpen ? 'block' : 'none' }}>
        <nav className="flex flex-col items-center justify-center w-full h-full -translate-y-20">
          <ul className="flex flex-col items-center justify-center font-normal font-lotus-theboldfont text-lotus-red">
            <li className="my-4 text-2xl">
              <a
                onClick={() => navigateTo('about')}
                className="block transition border-b-2 border-transparent cursor-pointer text-lotus-red hover:border-lotus-red"
                style={{ transform: 'translateY(4px)' }}>
                About
              </a>
            </li>
            <li className="my-4 text-2xl">
              <a
                onClick={() => navigateTo('roadmap')}
                className="block transition border-b-2 border-transparent cursor-pointer text-lotus-red hover:border-lotus-red"
                style={{ transform: 'translateY(4px)' }}>
                Roadmap
              </a>
            </li>
            <li className="my-4 text-2xl">
              <a
                href="https://lotusgang.notion.site/Lotus-Library-cbd560cc5301430b99ac2b5b4df9d226"
                target="_blank"
                rel="noreferrer"
                className="block transition border-b-2 border-transparent cursor-pointer text-lotus-red hover:border-lotus-red"
                style={{ transform: 'translateY(4px)' }}>
                Library
              </a>
            </li>
            <li className="my-4 text-2xl">
              <a
                href="https://lotusgang.myshopify.com/collections/all?preview_theme_id=122419544112"
                className="block transition border-b-2 border-transparent cursor-pointer text-lotus-red hover:border-lotus-red"
                style={{ transform: 'translateY(4px)' }}>
                Shop
              </a>
            </li>
          </ul>
          <ul className="flex flex-row items-center justify-center mt-12 font-normal font-lotus-theboldfont text-lotus-red">
            <li className="mx-2">
              <a
                href="https://discord.gg/vs8VvHb35k"
                target="_blank"
                rel="noreferrer"
                className="flex items-center transition cursor-pointer text-lotus-red hover:text-lotus-red-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 23.28 17.74"
                  width="23px"
                  height="23px">
                  <path
                    fill="currentColor"
                    d="M19.71,1.47C18.22,.79,16.63,.29,14.97,0c-.03,0-.06,0-.08,.04-.2,.36-.43,.84-.59,1.21-1.79-.27-3.57-.27-5.32,0-.16-.38-.39-.85-.6-1.21-.02-.03-.05-.04-.08-.04-1.66,.29-3.25,.79-4.74,1.47-.01,0-.02,.01-.03,.03C.52,6.01-.31,10.4,.1,14.75c0,.02,.01,.04,.03,.05,1.99,1.46,3.92,2.35,5.81,2.94,.03,0,.06,0,.08-.03,.45-.61,.85-1.26,1.19-1.93,.02-.04,0-.09-.04-.1-.63-.24-1.24-.53-1.82-.87-.05-.03-.05-.09,0-.12,.12-.09,.24-.19,.36-.28,.02-.02,.05-.02,.08-.01,3.81,1.74,7.93,1.74,11.7,0,.02-.01,.05,0,.08,0,.12,.1,.24,.19,.36,.28,.04,.03,.04,.1,0,.12-.58,.34-1.18,.63-1.82,.86-.04,.02-.06,.06-.04,.1,.35,.68,.75,1.32,1.19,1.93,.02,.03,.05,.04,.08,.03,1.9-.59,3.83-1.48,5.82-2.94,.02-.01,.03-.03,.03-.05,.49-5.02-.81-9.38-3.44-13.25,0-.01-.02-.02-.03-.03ZM7.78,12.1c-1.15,0-2.09-1.05-2.09-2.35s.93-2.35,2.09-2.35,2.11,1.06,2.09,2.35c0,1.29-.93,2.35-2.09,2.35Zm7.74,0c-1.15,0-2.09-1.05-2.09-2.35s.93-2.35,2.09-2.35,2.11,1.06,2.09,2.35c0,1.29-.92,2.35-2.09,2.35Z"
                  />
                </svg>
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://twitter.com/LotusGangNFT"
                target="_blank"
                rel="noreferrer"
                className="flex items-center transition cursor-pointer text-lotus-red hover:text-lotus-red-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 22.27 18.23"
                  width="23px"
                  height="23px">
                  <path
                    fill="currentColor"
                    d="M21.76,2.1c-.35,.16-.71,.29-1.08,.39,.44-.49,.77-1.07,.97-1.7,.05-.14,0-.3-.12-.39-.12-.09-.28-.1-.41-.03-.78,.46-1.62,.8-2.51,.99-.89-.87-2.1-1.36-3.35-1.36-2.64,0-4.78,2.14-4.78,4.78,0,.21,.01,.41,.04,.62-3.27-.29-6.31-1.89-8.4-4.46-.07-.09-.19-.14-.31-.13-.12,0-.22,.08-.28,.18-.42,.73-.65,1.56-.65,2.4,0,1.15,.41,2.24,1.14,3.1-.22-.08-.44-.17-.64-.29-.11-.06-.24-.06-.35,0-.11,.06-.18,.18-.18,.3,0,.02,0,.04,0,.06,0,1.72,.93,3.27,2.34,4.11-.12-.01-.24-.03-.36-.05-.12-.02-.25,.02-.34,.11-.08,.09-.11,.23-.07,.35,.52,1.63,1.87,2.84,3.5,3.2-1.35,.85-2.9,1.29-4.52,1.29-.34,0-.68-.02-1.01-.06-.17-.02-.32,.08-.38,.24-.06,.16,0,.33,.14,.42,2.08,1.34,4.5,2.04,6.97,2.04,4.87,0,7.91-2.29,9.61-4.22,2.12-2.4,3.33-5.58,3.33-8.72,0-.13,0-.26,0-.4,.83-.63,1.55-1.39,2.14-2.27,.09-.13,.08-.31-.02-.43-.1-.12-.27-.16-.42-.1Z"
                  />
                </svg>
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://magiceden.io/marketplace/lotus_gang_nft"
                target="_blank"
                rel="noreferrer"
                className="flex items-center transition cursor-pointer text-lotus-red hover:text-lotus-red-light">
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
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://opensea.io/collection/lotusgang"
                target="_blank"
                rel="noreferrer"
                className="flex items-center transition cursor-pointer text-lotus-red hover:text-lotus-red-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16.46 16.46"
                  width="20px"
                  height="20px">
                  <path
                    fill="currentColor"
                    d="M8.23,0C3.68,0,0,3.68,0,8.23s3.68,8.23,8.23,8.23,8.23-3.68,8.23-8.23S12.77,0,8.23,0ZM4.06,8.5l.03-.06,2.14-3.35s.11-.04,.13,0c.36,.8,.67,1.8,.52,2.42-.06,.26-.23,.6-.42,.92-.02,.05-.05,.09-.08,.14-.01,.02-.04,.03-.06,.03h-2.2c-.06,0-.09-.06-.06-.11Zm9.54,1.15s-.02,.06-.04,.07c-.17,.07-.73,.33-.97,.66-.6,.84-1.06,2.04-2.09,2.04H6.21c-1.52,0-2.75-1.24-2.75-2.76v-.05s.03-.07,.07-.07h2.39s.08,.04,.08,.09c-.02,.15,.01,.31,.09,.46,.14,.29,.44,.47,.75,.47h1.18v-.92h-1.17c-.06,0-.1-.07-.06-.12,.01-.02,.03-.04,.04-.06,.11-.16,.27-.4,.43-.68,.11-.19,.21-.39,.29-.59,.02-.04,.03-.07,.04-.11,.02-.06,.05-.13,.06-.18,.02-.05,.03-.1,.04-.15,.04-.17,.06-.35,.06-.54,0-.07,0-.15,0-.22,0-.08-.01-.16-.02-.24,0-.07-.02-.14-.03-.21-.02-.11-.04-.21-.07-.32v-.04c-.03-.07-.05-.14-.07-.22-.07-.23-.14-.46-.23-.67-.03-.08-.06-.16-.1-.24-.05-.12-.1-.23-.15-.34-.02-.05-.04-.09-.06-.13-.02-.05-.05-.1-.07-.15-.02-.04-.04-.07-.05-.1l-.14-.27s.01-.08,.05-.07l.91,.25h0l.12,.03,.13,.04h.05v-.52c0-.26,.21-.47,.47-.47,.13,0,.25,.05,.33,.14,.08,.09,.14,.2,.14,.33v.8l.1,.03s.01,0,.02,.01c.02,.02,.06,.04,.1,.08,.03,.03,.07,.06,.11,.09,.09,.07,.19,.16,.31,.26,.03,.03,.06,.05,.09,.08,.15,.14,.31,.3,.47,.47,.04,.05,.09,.1,.13,.15,.04,.05,.09,.11,.13,.16,.05,.07,.11,.14,.16,.22,.02,.04,.05,.07,.07,.11,.07,.1,.12,.2,.18,.3,.02,.05,.05,.1,.07,.15,.06,.13,.11,.27,.14,.41,0,.03,.02,.06,.02,.09h0s.01,.09,.02,.13c.01,.14,0,.28-.02,.42-.01,.06-.03,.12-.05,.18-.02,.06-.04,.12-.07,.17-.05,.12-.11,.24-.18,.34-.02,.04-.05,.08-.08,.13-.03,.04-.06,.08-.09,.12-.04,.05-.08,.1-.12,.15-.04,.05-.07,.1-.11,.14-.06,.07-.11,.13-.17,.19-.03,.04-.07,.08-.11,.12-.04,.04-.07,.08-.11,.11-.06,.06-.1,.1-.14,.14l-.09,.08s-.03,.02-.05,.02h-.72v.92h.91c.2,0,.39-.07,.55-.2,.05-.05,.28-.25,.56-.55,0-.01,.02-.02,.03-.02l2.5-.72s.09,.02,.09,.07v.53h0Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav
