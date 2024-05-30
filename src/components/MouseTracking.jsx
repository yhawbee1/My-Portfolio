"use client";
// components/MouseFollower.js
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { throttle } from "lodash";

const MouseTracking = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  const handleMouseMove = throttle((event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    setIsMouseInside(true);
  }, 100);

  const handleMouseLeave = () => {
    setIsMouseInside(false);
  };

  useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    isMouseInside && (
      <motion.div
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[1000] grid size-12 place-content-center rounded-full border border-brianGreen bg-transparent mix-blend-difference"
      >
        <motion.div
          className="relative size-3 rounded-full bg-brianGreen mix-blend-difference"
        ></motion.div>
      </motion.div>
    )
  );
};

export default MouseTracking;
