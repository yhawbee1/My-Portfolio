import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

 const data = [
   { name: 'HTML', icon: '/icons/html.svg' },
   { name: 'CSS', icon: '/icons/css.svg' },
   { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
   { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
   { name: 'JavaScript', icon: '/icons/javascript.svg' },
   { name: 'TypeScript', icon: '/icons/typescript.svg' },
   { name: 'React.js', icon: '/icons/react.svg' },
   { name: 'Angular', icon: '/icons/angular.svg' },
   { name: 'Figma', icon: '/icons/figma.svg' },
   { name: 'Next.js', icon: '/icons/next.svg' },
   { name: 'Git', icon: '/icons/git.svg' },
   { name: 'GitHub', icon: '/icons/github.svg' },
 ]


const firstRow = data.slice(0, data.length / 2);
const secondRow = data.slice(data.length / 2);


const Card = ({ name, icon }) => {
  return (
    <div className="flex w-[280px] h-fit flex-col items-center space-y-4 rounded-3xl border bg-white/5 py-14 backdrop-blur-lg transition-all border-brianGreen/40">
      <Image src={icon} className="size-20" width={80} height={80} alt={name} />
      <h3 className="font-poppins text-2xl">{name}</h3>
      {/* <p className="font-poppins text-lg">50%</p> */}
    </div>
  )
}

export default function SkillsSlider() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center space-y-4 overflow-hidden rounded-lg md:shadow-xl">
      <Marquee  className="[--duration:20s]">
        {firstRow.map((data) => (
          <Card name={data.name} key={data.name} icon={data.icon} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((data) => (
          <Card name={data.name} key={data.name} icon={data.icon} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-3/5 bg-gradient-to-l from-black"></div>
    </div>
  )
}
