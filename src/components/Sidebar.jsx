'use client'
import {
Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ links }) => {
    const activeLink = usePathname();

  return (
      <section className="w-[80%]" >
      <Sheet className="">
        <SheetTrigger className="text-white relative max-[320px]:size-16 size-20">
          <Image
            src="/menu.svg"
            fill
            className="text-brianGreen"
            alt="Sidebar toggler"
          />
        </SheetTrigger>
        <SheetContent className=" flex items-center justify-start">
          <ul className="flex w-full flex-col items-center justify-start gap-6 md:gap-10">
            {links.map((link, id) => (
              <Link href={link.Link} className="w-full" key={id}>
                <li
                  className={`${activeLink === link.Link ? "text-brianGreen underline underline-offset-4" : ""} text-bold text-balance font-poppins text-3xl md:text-4xl uppercase transition-all hover:text-brianGreen hover:underline font-semibold w-100 text-end`}
                >
                  {link.Title}
                </li>
              </Link>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
      </section>
      
    );
};

export default Sidebar;
