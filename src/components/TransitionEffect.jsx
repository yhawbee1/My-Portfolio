"use client"
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed grid place-content-center bottom-0 top-0 right-full z-30 h-screen w-screen bg-black"
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
        }}
      >
        <motion.div id="shapes" className=""
          initial={{
            opacity: 1
          }}
          animate={{
            opacity: 0
          }}
          transition={{
            delay: 0.5,
            ease: "easeInOut"
          }}
        >
          
        </motion.div>
      </motion.div>
      <motion.div
        className="fixed bottom-0 top-0 right-full z-20 h-screen w-screen bg-brianGreen"
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-0 top-0 right-full z-10 h-screen w-screen bg-black"
        initial={{
          x: "100%",
          width: "100%",
        }}
        animate={{
          x: "0%",
          width: "0%",
        }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default TransitionEffect;
