import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  const projects = [
    {
      name: 'Only Used Tesla',
      description: '',
      link: 'https://onlyusedtesla.com/',
      image: '/OnlyUsedTesla.png',
    },
    {
      name: 'Only Used Tesla Price Tracker',
      description: '',
      link: 'https://tracker.onlyusedtesla.com/',
      image: '/Tesla-Price-Tracker.png',
    },
    {
      name: 'Streetfleet Transportation Limited',
      description: '',
      link: 'https://www.streetfleetgh.net/',
      image: '/StreetFleet.png',
    },
    {
      name: 'Power2Know Financial Coaching',
      description: '',
      link: 'https://www.power2know.co.uk/',
      image: '/P2k.jpg',
    },
    {
      name: 'IPicturize Real Estate Photography',
      description: '',
      link: 'https://ipicturize.net/',
      image: '/geodesign.jpg',
    },
    {
      name: 'Hostaff Healthcare Services LTD',
      description: '',
      link: 'https://geobiltengineeringconsult.com/',
      image: '/Hostaff.jpg',
    },
  ]

  return (
    <section className="min-h-[80dvh] border-y py-16">
      <section className="container flex flex-col items-center justify-center">
        <div className="w-full">
          <h2 className="font-epilogue text-[50px] font-bold leading-[50px] md:text-[65px] md:leading-[65px]">
            Selected <span className="text-brianGreen">Projects.</span>
          </h2>
          {/* <p className='font-poppins'>Projects That Define My Growth as a Developer</p> */}
        </div>
        <div className="mt-4 grid w-full grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-4 lg:gap-7">
          {projects.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </section>
    </section>
  )
}

export default Projects

const Card = ({ project }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={project.link}>
      <article
        className={`relative grid h-[250px] w-full overflow-hidden rounded-md items-end border border-gray-700 bg-cover lg:h-[400px]`}
      >
        <Image
          className="absolute h-full w-full object-cover"
          src={project.image}
          alt={`${project.name} project`}
          fill
          priority
          quality={90}
        />
        <div className="flex justify-between items-start z-10 mb-3 mx-3 space-y-1.5 rounded-md p-3 font-poppins bg-black/50 backdrop-blur-sm h-fit">
          <h3 className="text-lg 2xl:text-[20px]">{project.name}</h3>
          <ExternalLink className=' text-brianGreen' />
        </div>
      </article>
    </a>
  )
}
