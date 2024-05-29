import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="mx-auto flex h-full w-[90%] items-center justify-center xl:w-[80%] min-[1537px]:w-[75%]">
      <span className="space-y-2">
        <h3 className=" font-poppins text-brianGreen max-[320px]:text-[14px] md:text-xl ">
          👋 Hello,{" "}
          <span className="font-poppins text-white">I&apos;m Brian</span>!
        </h3>

        <h1 className="font-epilogue text-[39px] font-bold uppercase leading-[50px] max-[360px]:text-[32px] max-[360px]:leading-[40px] max-[320px]:text-[25px] max-[320px]:leading-[30px] md:text-[80px] md:leading-[80px] 2xl:text-[96px]  2xl:leading-[103px] min-[1537px]:text-[120px]">
          Crafting captivating, intuitive{" "}
          <span className="text-brianGreen">interfaces</span> for delightful
          user experiences<span className="text-brianGreen">.</span>
        </h1>

        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between md:gap-10">
          <Button className="h-[50px] rounded-full border border-brianGreen bg-transparent font-poppins text-brianGreen hover:bg-brianGreen hover:text-black max-[320px]:h-fit md:h-[70px] md:w-[250px]">
            Contact Me
          </Button>
          <p className=" mb-2 w-full font-poppins text-base max-[320px]:mb-1 max-[320px]:text-[14px] md:w-[65%] xl:w-[45%] min-[1537px]:w-[45%]">
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
