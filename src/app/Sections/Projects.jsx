import React from 'react'

const Projects = () => {
  const projects = [
    {
      name: 'Only Used Tesla',
      description: '',
      link: 'https://onlyusedtesla.com/',
      image: 'OnlyUsedTesla.png',
    },
    {
      name: 'Only Used Tesla Price Tracker',
      description: '',
      link: 'https://tracker.onlyusedtesla.com/',
      image: 'Tesla-Price-Tracker.png',
    },
    {
      name: 'Streetfleet Transportation Limited',
      description: '',
      link: 'https://www.streetfleetgh.net/',
      image: 'StreetFleet.png',
    },
    {
      name: 'Power2Know Financial Coaching',
      description: '',
      link: 'https://www.power2know.co.uk/',
      image: 'P2k.jpg',
    },
    {
      name: 'IPicturize Real Estate Photography',
      description: '',
      link: 'https://ipicturize.net/',
      image: 'geodesign.jpg',
    },
    {
      name: 'Hostaff Healthcare Services LTD',
      description: '',
      link: 'https://geobiltengineeringconsult.com/',
      image: 'Hostaff.jpg',
    },
  ]

  return (
    <section className="min-h-[80dvh] border-y py-16">
      <section className="container flex flex-col items-center justify-center">
        <div className="w-full">
          <h2 className="font-epilogue text-[50px] font-bold leading-[50px] md:text-[65px] md:leading-[65px]">
            My Projects
          </h2>
          {/* <p className='font-poppins'>Projects That Define My Growth as a Developer</p> */}
        </div>
        <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a key={index} target='_blank' href={project.link}>
              <article
                className={`relative grid h-[300px] w-full place-items-end overflow-hidden rounded-xl border border-gray-700 bg-[url('/${project.image}')] bg-cover`}
              >
                <div className="z-10 mx-auto mb-3 w-[90%] rounded-md border border-gray-200/60 bg-black/30 p-2 font-poppins backdrop-blur-md">
                  <h3 className="text-xl">{project.name}</h3>
                </div>
                <img
                  className="absolute h-full w-full object-cover"
                  src={project.image}
                  alt=""
                />
              </article>
            </a>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Projects
