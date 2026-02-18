'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import CustomCursor from '@/components/CustomCursor';
import MagneticButton from '@/components/MagneticButton';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';
import StatCounter from '@/components/StatCounter';

const stackGroups = [
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Programming',
    items: ['Python', 'C', 'Basic DSA']
  },
  {
    title: 'Tools',
    items: ['Git', 'VS Code', 'GitHub']
  }
];

const projects = [
  {
    title: 'Club Website',
    description: 'Designed and developed a responsive website for my tech club.',
    tech: 'HTML • CSS • JavaScript',
    githubLink: 'https://github.com/falah-tech'
  },
  {
    title: 'Python Micro Projects',
    description: 'Collection of beginner Python tools and logic-based mini applications.',
    tech: 'Python',
    githubLink: 'https://github.com/falah-tech'
  },
  {
    title: 'Personal Portfolio',
    description: 'A futuristic student portfolio focused on clean interactions and polished UI.',
    tech: 'Next.js • Tailwind • Framer Motion',
    githubLink: 'https://github.com/falah-tech'
  }
];

export default function HomePage() {
  return (
    <main className="relative">
      <CustomCursor />

      <nav className="sticky top-0 z-40 border-b border-borderSubtle/60 bg-[#0b0f1aa8] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <p className="text-sm font-medium tracking-[0.24em] text-accentBlue">FF</p>
          <div className="flex items-center gap-5 text-xs uppercase tracking-[0.18em] text-textMuted md:text-sm">
            <Link href="#about" className="transition hover:text-textPrimary">
              About
            </Link>
            <Link href="#projects" className="transition hover:text-textPrimary">
              Projects
            </Link>
            <Link href="#contact" className="transition hover:text-textPrimary">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="absolute h-[500px] w-[500px] rounded-full bg-accentBlue/20 blur-[160px]"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.16 } }
          }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          {["FALAH FAZAL", 'Aspiring Software Developer'].map((line) => (
            <motion.h1
              key={line}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`text-balance ${line === 'FALAH FAZAL' ? 'text-5xl font-semibold tracking-[0.18em] md:text-7xl' : 'mt-2 text-2xl font-medium text-textMuted md:text-3xl'}`}
            >
              {line}
            </motion.h1>
          ))}

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-textMuted md:text-lg"
          >
            First-year CS student building clean web and Python projects.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton href="#projects">View Projects</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      <Section id="about">
        <p className="text-xs uppercase tracking-[0.24em] text-accentBlue">About</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Curious mind. Clean execution.</h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-textMuted md:text-lg">
          I&apos;m a first-year Computer Science student exploring web development and Python with serious intent.
          Right now, I&apos;m focused on building strong fundamentals, improving my problem-solving skills, and creating
          interactive interfaces that feel clean, modern, and smooth.
        </p>
      </Section>

      <Section id="stack">
        <p className="text-xs uppercase tracking-[0.24em] text-accentBlue">Tech Stack</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Tools I&apos;m building with</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {stackGroups.map((group) => (
            <article
              key={group.title}
              className="glass-card glow-hover rounded-2xl p-6 transition duration-300 ease-premium hover:scale-[1.03] hover:-translate-y-1.5"
            >
              <h3 className="text-xl font-medium">{group.title}</h3>
              <ul className="mt-4 space-y-2 text-textMuted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects">
        <p className="text-xs uppercase tracking-[0.24em] text-accentBlue">Projects</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Building small projects with serious intent.</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Section>

      <Section id="activity">
        <p className="text-xs uppercase tracking-[0.24em] text-accentBlue">GitHub Activity</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Learning fast. Shipping consistently.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <StatCounter label="Projects built" value={12} />
          <StatCounter label="Technologies explored" value={8} />
          <StatCounter label="Current focus" value={3} suffix="" />
        </div>
      </Section>

      <Section id="contact" className="pb-28">
        <p className="text-xs uppercase tracking-[0.24em] text-accentBlue">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Let&apos;s build something.</h2>
        <p className="mt-5 max-w-xl text-textMuted">
          If you&apos;re building something interesting, I&apos;d love to connect and keep learning through real projects.
        </p>
        <div className="mt-8 flex flex-wrap gap-6 text-sm text-textPrimary">
          {[
            { label: 'Email', href: 'mailto:falahfazal.dev@gmail.com' },
            { label: 'GitHub', href: 'https://github.com/falah-tech' },
            { label: 'LinkedIn', href: 'https://linkedin.com' }
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group inline-flex items-center border-b border-transparent pb-1 transition hover:text-accentBlue"
            >
              {link.label}
              <span className="ml-1 h-px w-0 bg-accentBlue transition-all duration-300 group-hover:w-8" />
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
