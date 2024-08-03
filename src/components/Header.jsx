'use client'
import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button'
import Sidebar from './Sidebar';

const Header = () => {
  const activePage = usePathname();
  const navLinks = [
    { Title: "Home", Link: "/" },
    { Title: "About Me", Link: "/about" },
    { Title: "My Skills", Link: "/skills" },
    { Title: "My Projects", Link: "/projects" },
    { Title: "Contact Me", Link: "/contact-me" },
  ];

  return (
    <header className="w-screen  md:px-3  ">
      <nav className="just flex items-center justify-between lg:justify-around">
        {/* Logo */}
        <Link href={"/"} className="relative size-20 max-[320px]:size-14">
          <Image src="/logo.png" fill alt="Logo" priority />
        </Link>

        {/* Mobile Nav */}
        <span className="block lg:hidden">
          <Sidebar links={navLinks} />
        </span>

        {/* Navlinks */}
        <ul className="hidden items-center justify-center gap-10 lg:flex ">
          {navLinks.map((link, index) => (
            <Link href={link.Link} key={index}>
              <li
                className={`${activePage === link.Link ? "text-brianGreen line-through" : ""} font-poppins transition-colors hover:text-brianGreen hover:line-through`}
              >
                {link.Title}
              </li>
            </Link>
          ))}
        </ul>

        {/* Button */}
        <Button className="hidden rounded-full bg-brianGreen px-6 py-2 font-poppins text-black transition-colors hover:bg-transparent hover:text-brianGreen border border-brianGreen lg:block">
          Contact Me
        </Button>
      </nav>
    </header>
  );
}

export default Header