import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="mx-auto flex h-full w-[90%] items-center justify-center">
      <span className="space-y-2">
        <h3 className=" font-poppins text-brianGreen max-[320px]:text-[14px] md:text-xl ">
          👋 Hello,{" "}
          <span className="font-poppins text-white">I&apos;m Brian</span>!
        </h3>

        <h1 className="font-epilogue text-[39px] font-bold uppercase leading-[50px] max-[360px]:text-[25px] max-[320px]:leading-[30px]">
          Crafting captivating, intuitive{" "}
          <span className="text-brianGreen">interfaces</span> for delightful
          user experiences<span className="text-brianGreen">.</span>
        </h1>

        <div className="flex flex-col-reverse md:flex-row">
          <Button className="max-[320px]:h-fit h-[50px] rounded-full border border-brianGreen bg-transparent font-poppins text-brianGreen hover:bg-brianGreen hover:text-black">
            Contact Me
          </Button>
          <p className=" w-full font-poppins max-[320px]:text-[14px] max-[320px]:mb-1 mb-2 text-base">
            Passionate junior Frontend developer dedicated to crafting immersive
            digital experiences. With two years of hands-on expertise, I
            specialize in delivering innovative solutions. Let&apos;s
            collaborate on something extraordinary!
          </p>
        </div>
      </span>
    </section>
  );
}
