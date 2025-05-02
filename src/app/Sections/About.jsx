'use client'
import CircularText from '@/components/CircularText'
import Image from 'next/image'
import React from 'react'
import CountUp from 'react-countup'

// Function to calculate years of experience
const calculateExperience = (startYear, startMonth) => {
  const currentDate = new Date()
  const startDate = new Date(startYear, startMonth - 1) // Months are 0-indexed
  const diffInMilliseconds = currentDate - startDate
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
  return Math.floor(diffInYears)
}

const About = () => {
  const yearsOfExperience = calculateExperience(2023, 1)
  const numberOfProjects = 10
  const numberOfClients = 20
  const numberOfHours = 15

  return (
    <section
      id="about"
      className="container mx-auto flex min-h-[85vh] flex-col items-center justify-evenly overflow-y-auto py-10 xl:py-16"
    >
      <section className="flex flex-col-reverse items-center justify-between md:flex-row">
        <section className="w-full lg:w-[50%]">
          <h1 className="font-epilogue text-[50px] font-bold leading-[50px] md:text-[65px] md:leading-[65px] lg:text-[80px] lg:leading-[80px]">
            About <span className="text-brianGreen">Me.</span>{' '}
          </h1>
          <p className="font-poppins">
            I&apos;m a passionate front-end developer with {yearsOfExperience}{' '}
            years of experience at TechOne IT Services and Digital Solutions. I
            enjoy crafting user-friendly interfaces that are both visually
            appealing and performant. My expertise spans HTML, CSS, JavaScript,
            React.js, Next.js, Bootstrap, Tailwind CSS, and Angular, enabling me
            to turn innovative ideas into captivating digital experiences.
            Proficient in Figma, I collaborate seamlessly with design teams to
            ensure smooth transitions from concept to implementation.
          </p>
          <button className="mt-3 rounded-full border border-brianGreen bg-transparent px-7 py-2 font-poppins text-brianGreen hover:bg-brianGreen hover:text-black">
            Contact Me
          </button>
        </section>

        <section className="relative w-full lg:w-[50%]">
          <img src="/developer.svg" alt="A gif of developer working" />
        </section>
      </section>

      <section className="mt-10 grid w-full grid-cols-1 gap-4 divide-x border-x md:grid-cols-2 lg:grid-cols-4">
        <div className="py-3.5 text-center">
          <h5 className="font-epilogue text-6xl font-bold">
            {}
            <CountUp end={numberOfProjects} />+
          </h5>
          <p className="font-poppins text-gray-300">Projects</p>
        </div>
        <div className="py-3.5 text-center">
          <h5 className="font-epilogue text-6xl font-bold">
            <CountUp end={yearsOfExperience} />+
            {/* {yearsOfExperience} */}
          </h5>
          <p className="font-poppins text-gray-300">Years Of Experience</p>
        </div>
        <div className="py-3.5 text-center">
          <h5 className="font-epilogue text-6xl font-bold">
            <CountUp end={numberOfClients} />+
          </h5>
          <p className="font-poppins text-gray-300">Clients</p>
        </div>
        <div className="py-3.5 text-center">
          <h5 className="font-epilogue text-6xl font-bold">
            <CountUp end={numberOfHours} />
            k+
          </h5>
          <p className="font-poppins text-gray-300">Working Hours</p>
        </div>
      </section>
    </section>
  )
}

export default About
