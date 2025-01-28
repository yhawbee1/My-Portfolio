import CircularText from '@/components/CircularText'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern'

export default function HeroSection() {
  return (
    <>
      <section className=" relative h-[90vh] 2xl:h-[100dvh] w-full overflow-x-hidden">
        <section className="mx-auto flex h-[90vh] 2xl:h-[100dvh] w-[90%] items-center justify-center xl:w-[80%] min-[1537px]:w-[75%]">
          <span className="space-y-2 2xl:space-y-3 min-[1537px]:space-y-7">
            <div className="absolute -right-10 lg:hidden">
              <CircularText />
            </div>
            <h3 className=" cursor-default font-poppins text-brianGreen max-[320px]:text-[14px] md:text-xl">
              👋 Hello,{' '}
              <span className="font-poppins text-white">I&apos;m Brian</span>!
            </h3>

            <h1 className="cursor-default font-epilogue text-[40px] font-bold uppercase leading-[50px] max-[360px]:text-[32px] max-[360px]:leading-[40px] max-[320px]:text-[25px] max-[320px]:leading-[30px] md:text-[80px] md:leading-[80px] 2xl:text-[96px]  2xl:leading-[100px] min-[1537px]:text-[120px] min-[1537px]:leading-[110px] ">
              Crafting captivating, intuitive{' '}
              <span className="text-brianGreen">interfaces</span> for delightful
              user experiences<span className="text-brianGreen">.</span>
            </h1>

            <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between md:gap-10">
              <Link className="" download href="/files/Brianantwi.pdf">
                <Button className="h-[50px] w-full rounded-full border border-brianGreen bg-transparent font-poppins text-brianGreen hover:bg-brianGreen hover:text-black max-[320px]:h-fit md:h-[70px] md:w-[250px] 2xl:text-xl">
                  Download Résumé
                </Button>
              </Link>

              <div className="hidden lg:block">
                <CircularText />
              </div>

              <p className="mb-2 w-full cursor-default font-poppins text-base md:w-[65%] xl:w-[45%] 2xl:w-[50%] min-[1537px]:w-[45%]">
                Passionate Frontend developer dedicated to crafting
                immersive digital experiences. With two years of hands-on
                expertise, I specialize in delivering innovative solutions.
                Let&apos;s collaborate on something extraordinary!
              </p>
            </div>
          </span>
        </section>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.2}
          duration={3}
          repeatDelay={1}
          className={cn(
            '[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] md:[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]',
            'inset-x-0 -z-10',
          )}
        />
      </section>
    </>
  )
}
