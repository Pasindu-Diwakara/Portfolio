"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Code, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "@/components/Contact";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col px-6 overflow-hidden">
      <div className="z-10 max-w-7xl mx-auto w-full my-auto py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Column: Text */}
        <motion.div
          className="order-2 lg:order-1 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 flex flex-wrap justify-center lg:justify-start gap-3">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 font-medium tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for work
            </div>
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 font-medium tracking-wide uppercase">
              Founder @ Webix
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-4">
            <h2 className="text-xl md:text-3xl font-light text-white/80">
              Hi, I&apos;m <strong className="font-semibold text-white">Pasindu Diwakara</strong>
            </h2>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter text-white mb-8 leading-[1.1]"
          >
            Crafting Elite <br className="hidden md:block" /> Digital Experiences
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            I am an undergraduate pursuing a BICT (Hons) degree at Rajarata University of Sri Lanka, with a focus on human-computer interaction and AI-driven product engineering. I am building skills in premium frontend design, generative AI tools, and creative technology orchestration, aiming to create high-fidelity, intelligent digital products. I am also the Founder of Webix, a digital agency helping businesses grow through high-converting websites.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-6"
          >
            <a href="#work" className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium transition-all hover:scale-105 hover:bg-white/90 active:scale-95">
              View My Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="flex items-center gap-3">
              <Link href="https://wa.me/94775970306" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all group">
                <WhatsappIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="https://www.linkedin.com/in/pasindu-diwakara-008260290/" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all group">
                <LinkedinIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.fiverr.com/s/Ay5rvR5" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all group">
                <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Fiverr</span>
              </Link>
              <Link href="https://github.com/Pasindu-Diwakara" target="_blank" className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all group">
                <GithubIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div
            className="relative w-full max-w-[420px] lg:max-w-[560px] aspect-square"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
            }}
          >
            <Image
              src="/profile.png"
              alt="Pasindu Diwakara"
              fill
              className="object-contain object-center scale-[1.15]"
              priority
              quality={100}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}


