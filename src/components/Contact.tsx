"use client";

import { motion } from "framer-motion";
import { Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0 .2-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.5 5.5 0 0 0 .2 3.8 5.5 5.5 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    <path d="M9 18c-4.5 1.5-5-2.5-7-3" />
  </svg>
);

export const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function Contact() {
  return (
    <footer id="contact" className="py-20 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-white/[0.03] rounded-[100%] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 font-medium tracking-wide uppercase mb-6">
            Contact
          </span>
          <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-white mb-8">
            Let&apos;s build something <br className="hidden md:block" /> extraordinary.
          </h2>
          
          <a 
            href="https://www.linkedin.com/in/pasindu-diwakara-008260290/"
            target="_blank"
            className="group inline-flex items-center gap-4 text-xl md:text-2xl text-white/70 hover:text-white transition-colors"
          >
            Connect on LinkedIn
            <div className="p-3 bg-white text-black rounded-full group-hover:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </a>
        </div>

        {/* Form or Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Pasindu Diwakara. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <Link href="https://wa.me/94775970306" target="_blank" className="text-white/40 hover:text-white transition-colors flex items-center gap-2">
              <WhatsappIcon className="w-5 h-5" />
              <span className="sr-only">WhatsApp</span>
            </Link>
            <Link href="https://www.linkedin.com/in/pasindu-diwakara-008260290/" target="_blank" className="text-white/40 hover:text-white transition-colors flex items-center gap-2">
              <LinkedinIcon className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://github.com/Pasindu-Diwakara" target="_blank" className="text-white/40 hover:text-white transition-colors flex items-center gap-2">
              <GithubIcon className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.fiverr.com/s/Ay5rvR5" target="_blank" className="text-white/40 hover:text-white transition-colors flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span className="sr-only">Fiverr</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
