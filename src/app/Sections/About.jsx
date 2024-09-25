import CircularText from "@/components/CircularText";
import MouseTracking from "@/components/MouseTracking";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className=" mx-auto flex h-full top-48 w-[95%]  flex-col-reverse items-center justify-between overflow-y-auto md:flex-row xl:w-[80%] min-[1537px]:w-[75%]">
      {/* <TransitionEffect />
      <MouseTracking /> */}
      {/* Text */}
      <section className="lg:w-[45%]">
        <h1 className="font-epilogue text-[39px] font-bold uppercase leading-8 text-white md:text-[110px] md:leading-none ">
          About <span className="text-brianGreen">Me.</span>{" "}
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
      </section>

      {/* Image */}
      <section className="top-28 mb-8 flex justify-center pt-10 md:w-[50%]">
        <div className="relative h-[300px] w-[330px] md:h-[600px] md:w-[600px] ">
          <Image
            src="/brian.jpeg"
            quality={90}
            fill
            className="md:rounded-full object-cover"
            alt=""
          />
          <div className="absolute bottom-0 right-0 md:right-10 ">
            <CircularText />
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
