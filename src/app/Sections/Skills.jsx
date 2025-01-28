import SkillsSlider from '@/components/SkillsSlider'

const Skills = () => {
  return (
    <section id='skills' className="flex min-h-screen flex-col border-y items-center justify-center space-y-6 py-16">
      <div className="container mx-auto space-y-3">
        <h2 className="font-epilogue text-[50px] font-bold leading-[50px] md:text-[65px] md:leading-[65px]">
          <span className=" text-brianGreen">My</span> Skills.
        </h2>
        <p className="w-[60%] font-poppins  text-lg">
          As a frontend developer with a passion for crafting seamless user
          experiences, I combine creativity with technical proficiency. Below
          are the tools and technologies I use to turn ideas into impactful web
          solutions.
        </p>
      </div>
      <SkillsSlider />
    </section>
  )
}

export default Skills
