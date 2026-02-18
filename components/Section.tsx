'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, children, className = '' }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto w-full max-w-6xl px-6 py-20 md:px-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}
