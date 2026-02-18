'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { stiffness: 380, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 380, damping: 30 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor pointer-events-none fixed left-0 top-0 z-50 h-5 w-5 rounded-full border border-accentBlue/80 bg-accentBlue/20 shadow-[0_0_22px_rgba(96,165,250,0.75)]"
      style={{ x, y }}
    />
  );
}
