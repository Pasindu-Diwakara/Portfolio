"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, Layers, Sparkles, Server } from "lucide-react";

export default function TechStack() {
  return (
    <section id="tech" className="py-20 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 font-medium tracking-wide uppercase mb-6">
            Tech
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            A comprehensive suite of modern tools and frameworks used to architect high-end digital products.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[300px]">
          {/* Card 1: AI & Machine Learning - spans 2 columns on md */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 glass-card p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
              <BrainCircuit className="w-32 h-32 text-white" />
            </div>
            
            <div className="p-3 bg-white/5 w-fit rounded-2xl border border-white/5 mb-4 relative z-10">
              <Sparkles className="w-6 h-6 text-white/70" />
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-2">AI & Machine Learning</h3>
              <p className="text-white/50 text-sm md:text-base max-w-md mb-6">
                Architecting intelligent systems using LLMs, LangChain, and custom machine learning pipelines to solve complex product challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "PyTorch", "LangChain", "OpenAI", "Hugging Face", "Vector DBs"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Full-Stack Development */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="p-3 bg-white/5 w-fit rounded-2xl border border-white/5 mb-4 relative z-10">
              <Code2 className="w-6 h-6 text-white/70" />
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-2">Full-Stack Development</h3>
              <p className="text-white/50 text-sm md:text-base mb-6">
                Building scalable web & mobile apps with robust architectures.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Cloud & Edge Ops */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="p-3 bg-white/5 w-fit rounded-2xl border border-white/5 mb-4 relative z-10">
              <Server className="w-6 h-6 text-white/70" />
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-2">Cloud & Edge Ops</h3>
              <p className="text-white/50 text-sm md:text-base mb-6">
                Deploying high-availability architectures for zero-downtime performance.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Vercel", "Firebase", "Docker", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Product Engineering & UI/UX - spans 2 columns on md */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 glass-card p-8 flex flex-col justify-between group relative overflow-hidden bg-gradient-to-br from-[#0f0f11] to-[#18181b]"
          >
             <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-700 translate-x-4 translate-y-4">
              <Layers className="w-40 h-40 text-white" />
            </div>

            <div className="p-3 bg-white/5 w-fit rounded-2xl border border-white/5 mb-4 relative z-10">
              <Layers className="w-6 h-6 text-white/70" />
            </div>
            
            <div className="relative z-10 mt-auto">
              <h3 className="text-xl md:text-2xl font-medium text-white mb-2">Product Engineering & UI/UX</h3>
              <p className="text-white/50 text-sm md:text-base max-w-md mb-6">
                Bridging the gap between AI capabilities and user needs. Designing intuitive, premium interfaces that simplify complex data interactions.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Framer Motion", "GSAP", "Design Systems", "Prototyping"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
