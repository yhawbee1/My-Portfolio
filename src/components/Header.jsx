'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Sidebar from './Sidebar'

const Header = () => {
  const activePage = usePathname()
  const navLinks = [
    { Title: 'Home', Link: '/' },
    { Title: 'About Me', Link: '/' },
    { Title: 'My Skills', Link: '/' },
    { Title: 'My Projects', Link: '/' },
    { Title: 'Contact Me', Link: '/' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-black/40 py-2 backdrop-blur-md">
      <nav className="just flex w-full items-center justify-between lg:justify-around">
        {/* Logo */}
        <Link href={'/'} className="relative size-20 max-[320px]:size-14">
          <Image src="/logo.png" fill alt="Logo" priority />
        </Link>

        {/* Mobile Nav */}
        <span className="block lg:hidden">
          <Sidebar links={navLinks} />
        </span>

        {/* Navigation links */}
        <ul className="hidden items-center justify-center gap-10 lg:flex ">
          {navLinks.map((link, index) => (
            <Link href={link.Link} key={index}>
              <li
                className={`font-poppins transition-colors hover:text-brianGreen hover:line-through`}
              >
                {link.Title}
              </li>
            </Link>
          ))}
        </ul>

        {/* Button */}
        <Link
          href="/"
          className="hidden rounded-full border border-brianGreen bg-brianGreen px-6 py-2 font-poppins text-black transition-colors hover:bg-transparent hover:text-brianGreen lg:block"
        >
          Contact Me
        </Link>
      </nav>
    </header>
  )
}

export default Header
