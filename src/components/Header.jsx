'use client'
import Image from 'next/image'
import Link from 'next/link'
import Sidebar from './Sidebar'

const Header = () => {
  const navLinks = [
    { Title: 'Home', Link: '#home' },
    { Title: 'About Me', Link: '#about' },
    { Title: 'My Skills', Link: '#skills' },
    { Title: 'My Projects', Link: '/' },
    { Title: 'Contact Me', Link: '#contact' },
  ]

  return (
    <header className="sticky top-[9px] z-[50] mx-1 flex justify-center">
      <section className="absolute top-2 w-full rounded-full border border-brianGreen/20 bg-black/40 px-5 py-1.5 backdrop-blur-md lg:w-fit lg:p-2.5">
        <nav className="flex w-full items-center justify-between lg:justify-around">
          {/* Logo */}
          <Link href={'/'} className="relative size-10 lg:hidden">
            <Image src="/logo.png" fill alt="Logo" priority />
          </Link>

          {/* Mobile Nav */}
          <span className="block lg:hidden">
            <Sidebar links={navLinks} />
          </span>

          {/* Navigation links */}
          <ul className="hidden items-center justify-center gap-6 lg:flex">
            {navLinks.map((link, index) => (
              <Link href={link.Link} key={index}>
                <li
                  className={`font-poppins transition-colors hover:text-black hover:bg-brianGreen px-3.5 py-1.5 rounded-full duration-500`}
                >
                  {link.Title}
                </li>
              </Link>
            ))}
          </ul>

          {/* Button */}
          {/* <Link
          href="#contact"
          className="hidden rounded-full border border-brianGreen bg-brianGreen px-6 py-2 font-poppins text-black transition-colors hover:bg-transparent hover:text-brianGreen lg:block"
        >
          Contact Me
        </Link> */}
        </nav>
      </section>
    </header>
  )
}

export default Header
