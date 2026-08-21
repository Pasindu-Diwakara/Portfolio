"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectGallery() {

  return (
    <section className="py-32 px-6 bg-[#020202]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="glass-card overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 border border-white/10 rounded-3xl bg-[#0a0a0a]"
        >
          {/* Left Column: Website Preview */}
          <div className="relative aspect-[4/3] lg:aspect-auto w-full h-[500px] lg:h-full bg-black flex flex-col border-r border-white/10 overflow-hidden">
            {/* Browser Chrome */}
            <div className="h-12 bg-[#111] flex items-center px-4 border-b border-white/10 shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="mx-auto flex items-center justify-center bg-black/50 text-white/50 text-xs font-medium px-4 py-1.5 rounded-md w-full max-w-[60%] border border-white/5 truncate">
                https://www.serendrive.com
              </div>
            </div>
            
            {/* Live iframe */}
            <div className="flex-1 w-full bg-white relative">
              <iframe 
                src="https://www.serendrive.com/" 
                title="SerenDrive Live Preview"
                className="absolute inset-0 w-full h-full border-none bg-white"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Project Details */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="text-sm font-medium text-white/40 uppercase tracking-wider mb-4">
              From: January 2026
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-medium text-white mb-6 leading-tight">
              SerenDrive - Premium Tourism & Booking Platform
            </h3>
            
            <p className="text-white/60 leading-relaxed mb-8">
              <strong className="text-white/90">The Client & Objective:</strong> SerenDrive, a premium tourism and transportation agency, required an enterprise-grade web platform to scale international client acquisition. The goal was a standalone, conversion-optimized booking system.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {["Agenzia turistica e di viaggi", "Website Design", "Website Development", "Website Maintenance"].map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a 
              href="https://www.serendrive.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 w-fit mt-2"
            >
              Visit Live Website
              <ExternalLink className="w-4 h-4" />
            </a>


          </div>
        </motion.div>
      </div>
    </section>
  );
}
