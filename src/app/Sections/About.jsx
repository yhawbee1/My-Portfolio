import CircularText from '@/components/CircularText'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section id='about' className="container mx-auto flex min-h-[100vh] flex-col-reverse items-center justify-between overflow-y-auto py-16 md:flex-row ">
      <section className="lg:w-[45%]">
        <h1 className="font-epilogue text-[50px] font-bold leading-[50px] md:text-[65px] lg:text-[96px] lg:leading-[85px]">
          About <span className="text-brianGreen">Me.</span>{' '}
        </h1>
        <p className="font-poppins">
          I&apos;m a passionate front-end developer with 2 years of experience
          at TechOne IT Services and Digital Solutions. I enjoy crafting
          user-friendly interfaces that are both visually appealing and
          performant. My expertise spans HTML, CSS, JavaScript, React.js,
          Next.js, Bootstrap, Tailwind CSS, and Angular, enabling me to turn
          innovative ideas into captivating digital experiences. Proficient in
          Figma, I collaborate seamlessly with design teams to ensure smooth
          transitions from concept to implementation.
        </p>
        {/* <div className="flex">
          <div className="bg-brianGreen rounded-2xl p-3">
            <p className="font-poppins text-[90px]">
              20<sup className="text-black">+</sup>
            </p>
          </div>
        </div> */}
      </section>

      {/* Image */}
      <section className="top-28 mb-8 flex justify-center pt-10 md:w-[50%]">
        <div className="relative h-[300px] w-[330px] md:h-[600px] md:w-[600px] ">
          <Image
            src="/brian.jpeg"
            quality={90}
            fill
            className="object-cover md:rounded-full"
            alt=""
          />
          <div className="absolute bottom-0 right-0 md:right-10 ">
            <CircularText />
          </div>
        </div>
      </section>
    </section>
  )
}

export default About
