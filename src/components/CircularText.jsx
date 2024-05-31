import Image from "next/image";
import React from "react";
import { PiStarFourFill } from "react-icons/pi";

const CircularText = () => {
  return (
    <div className="relative flex size-32 items-center justify-center">
      <Image
        src="circletext.svg"
        fill
        alt="Circle text animate-spin"
        className="animate-[spin_8s_infinite_linear]"
      />
      <PiStarFourFill className="absolute text-4xl text-brianGreen " />
    </div>
  );
};

export default CircularText;
