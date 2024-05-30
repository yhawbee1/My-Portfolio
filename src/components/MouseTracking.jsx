'use client'
// components/MouseFollower.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { throttle } from 'lodash';

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
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    isMouseInside && (
          <motion.div
              className='fixed top-0 left-0 size-12 grid place-content-center pointer-events-none rounded-full bg-transparent z-[1000] border border-brianGreen mix-blend-difference'
        
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
          >
              <div className="relative size-3 bg-brianGreen rounded-full mix-blend-difference" />
          </motion.div>
    )
  );
};

export default MouseTracking;
