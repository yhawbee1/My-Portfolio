import CircularText from "@/components/CircularText";
import MouseTracking from "@/components/MouseTracking";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="mx-auto flex flex-col-reverse md:flex-row h-full w-[90%] items-center justify-between xl:w-[80%] min-[1537px]:w-[75%]">
      <TransitionEffect />
      <MouseTracking />
      {/* Text */}
      <section className="lg:w-[45%]">
        <h1 className="font-epilogue uppercase text-[39px] md:text-[110px] leading-4 md:leading-none font-bold text-white ">
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
      <section className=" w-[50%] flex justify-center ">
        <div className="relative h-[250px] w-[250px] md:w-[600px] md:h-[600px] ">
          <Image src="/portrait.jpg" fill className="rounded-full object-cover" alt="" />
          <div className="absolute right-0 md:right-10 bottom-0 ">
            <CircularText />
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
