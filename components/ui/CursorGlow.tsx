"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });
  const smoothXTwo = useSpring(x, { stiffness: 20, damping: 10 });
  const smoothYTwo = useSpring(y, { stiffness: 20, damping: 10 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
        <motion.div
        style={{
            left: smoothX,
            top: smoothY,
            x: "-50%",
            y: "-50%",
        }}
        className="pointer-events-none fixed w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center z-50"
        />
        <motion.div 
        style={{
            left: smoothXTwo,
            top: smoothYTwo,
            x: "-50%",
            y: "-50%",
        }}
        className="pointer-events-none fixed w-2 h-2 rounded-full bg-blue-500 z-50"/>
    </>
  );
}