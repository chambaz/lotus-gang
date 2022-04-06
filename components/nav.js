import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="fixed top-0 z-10 w-screen shadow-lg bg-lotus-beige shadow-lotus-beige">
      <div className="container flex items-center mx-auto">
        <Link href="/" passHref>
          <a className="cursor-pointer">
            <Image src="/img/lotus.svg" width={40} height={40} />
          </a>
        </Link>

        <nav className="py-8 ml-auto">
          <ul className="flex items-center text-lg font-bold text-lotus-red">
            <li>
              <Link href="/" passHref>
                <a className="cursor-pointer">Home</a>
              </Link>
            </li>
            <li className="ml-10">
              <Link href="#roadmap" passHref>
                <a className="cursor-pointer">Roadmap</a>
              </Link>
            </li>
            <li className="ml-10">
              <a
                href="https://lotusgang.notion.site/Lotus-Library-cbd560cc5301430b99ac2b5b4df9d226"
                target="_blank"
                className="cursor-pointer">
                Library
              </a>
            </li>
            <li className="ml-20">
              <a
                href="https://discord.gg/vs8VvHb35k"
                target="_blank"
                className="flex items-center cursor-pointer">
                <Image src="/img/discord.svg" width={23} height={23} />
              </a>
            </li>
            <li className="ml-6">
              <a
                href="https://twitter.com/LotusGangNFT"
                target="_blank"
                className="flex items-center cursor-pointer">
                <Image src="/img/twitter.svg" width={23} height={23} />
              </a>
            </li>
            <li className="ml-6">
              <a
                href="https://magiceden.io/marketplace/lotus_gang_nft"
                target="_blank"
                className="flex items-center cursor-pointer">
                <Image src="/img/magic-eden.svg" width={23} height={23} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav
