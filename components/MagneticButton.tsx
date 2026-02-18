'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
};

export default function MagneticButton({ href, children, variant = 'primary' }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 14 });
  const springY = useSpring(y, { stiffness: 220, damping: 14 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (bounds.left + bounds.width / 2);
    const offsetY = e.clientY - (bounds.top + bounds.height / 2);
    x.set(offsetX * 0.16);
    y.set(offsetY * 0.16);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes =
    variant === 'primary'
      ? 'border-transparent bg-accentBlue text-white shadow-[0_0_20px_rgba(59,130,246,0.45)] hover:shadow-[0_0_30px_rgba(59,130,246,0.55)]'
      : 'border-borderSubtle bg-transparent text-textPrimary hover:border-accentBlue hover:text-white';

  return (
    <motion.div style={{ x: springX, y: springY }}>
      <Link
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={`inline-flex items-center rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 ease-premium ${classes}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
