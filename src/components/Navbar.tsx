"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "Work", path: "#work" },
  { name: "Tech", path: "#tech" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // Trigger when the section crosses the middle of the screen
    );

    const sections = document.querySelectorAll("section, footer, main > div");
    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section.id) observer.unobserve(section);
      });
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setActiveSection(path);
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6"
    >
      <nav className="flex items-center gap-6 px-6 py-3 rounded-full bg-black/20 backdrop-blur-2xl border border-white/10 shadow-[0_4px_24px_-8px_rgba(255,255,255,0.1)]">
        {navItems.map((item) => {
          const isActive = activeSection === item.path;
          
          return (
            <Link
              key={item.name}
              href={item.path}
              onClick={(e) => handleClick(e, item.path)}
              className={cn(
                "relative text-sm font-medium transition-colors duration-300",
                isActive ? "text-white" : "text-white/50 hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -inset-x-3 -inset-y-2 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.name}
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}
