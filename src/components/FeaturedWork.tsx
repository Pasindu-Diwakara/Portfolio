"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projects";

const categories = ["All", "AI Engineering", "Web Development", "UI/UX Design", "Brand Design"];

export default function FeaturedWork() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = projectsData.filter((project) => 
    activeTab === "All" ? true : project.mainCategory === activeTab
  );

  return (
    <section id="work" className="py-20 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 relative z-10 flex flex-col items-center text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 font-medium tracking-wide uppercase mb-6">
            Work
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">
            Featured Case Studies
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            A curated selection of my proudest work, demonstrating technical mastery and design excellence.
          </p>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === category 
                    ? "bg-white text-black" 
                    : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/projects/${project.id}`} className="block group h-full">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-5 border border-white/10 bg-white/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Hover icon */}
                    <div className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-white/80 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
