'use client';

import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type StatCounterProps = {
  label: string;
  value: number;
  suffix?: string;
};

export default function StatCounter({ label, value, suffix = '+' }: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.2, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [count, inView, value]);

  return (
    <div ref={ref} className="glass-card glow-hover rounded-2xl p-6 text-center">
      <motion.p className="text-3xl font-semibold text-accentBlue">
        {rounded}
        {suffix}
      </motion.p>
      <p className="mt-2 text-sm text-textMuted">{label}</p>
    </div>
  );
}
