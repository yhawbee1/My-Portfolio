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
    { Title: "Contact Me", Link: "/contact" },
  ];

  return (
    <header className="md:px-3">
      <nav className="flex items-center justify-between lg:justify-around just">
        {/* Logo */}
        <Link href={"/"}>
          <Image src="/logo.png" width={70} height={70} alt="Logo" priority/>
        </Link>

        {/* Mobile Nav */}
        <span className="block lg:hidden">
          <Sidebar links={navLinks}  />
        </span>
        
        {/* Navlinks */}
        <ul className="lg:flex items-center justify-center gap-10 hidden ">
          {navLinks.map((link, index) => (
            <Link href={link.Link} key={index}>
              <li
                className={`${activePage === link.Link ? "text-brianGreen line-through" : ""} font-poppins transition-colors hover:text-brianGreen `}
              >
                {link.Title}
              </li>
            </Link>
          ))}
        </ul>

        {/* Button */}
        <Button className="rounded-full bg-brianGreen px-6 py-2 font-poppins text-black transition-colors hover:bg-brianGreen/90 hidden lg:block">
          Contact Me
        </Button>
      </nav>
    </header>
  );
}

export default Header