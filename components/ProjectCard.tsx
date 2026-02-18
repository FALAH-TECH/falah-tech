'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string;
  githubLink: string;
};

export default function ProjectCard({ title, description, tech, githubLink }: ProjectCardProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const x = e.clientX - rect.left;
    const rotateXValue = -((y / rect.height - 0.5) * 10);
    const rotateYValue = (x / rect.width - 0.5) * 10;

    rotateX.set(Math.max(-5, Math.min(5, rotateXValue)));
    rotateY.set(Math.max(-5, Math.min(5, rotateYValue)));
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 1000 }}
      className="glass-card glow-hover rounded-2xl p-6 transition-transform duration-300 ease-premium hover:scale-[1.02]"
    >
      <div className="mb-4 h-36 rounded-xl border border-borderSubtle bg-gradient-to-br from-accentBlue/15 to-transparent" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-textMuted">{description}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-accentBlue/90">{tech}</p>
      <Link
        href={githubLink}
        className="mt-5 inline-flex items-center border-b border-transparent pb-0.5 text-sm text-accentBlue transition-all hover:border-accentBlue"
      >
        View on GitHub ↗
      </Link>
    </motion.div>
  );
}
