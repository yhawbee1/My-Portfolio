import CircularText from "@/components/CircularText";
import MouseTracking from "@/components/MouseTracking";
import TransitionEffect from "@/components/TransitionEffect";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="flex justify-center items-center h-full">
      <TransitionEffect />
      <MouseTracking />
      <h1 className="font-epilogue uppercase text-4xl">About Page</h1>
    </section>
  );
};

export default page;
