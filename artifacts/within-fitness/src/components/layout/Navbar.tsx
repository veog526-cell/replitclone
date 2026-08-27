import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import logoPath from "@assets/E53F014E-6D40-43E2-8964-2AD8E7880657-removebg-preview_1784675003054.png";
import { Menu, X, ArrowUpRight } from "lucide-react";

const BOOKING_URL = "https://www.within.fitness/c/1-on-1-assessments-c319f3";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80; // account for header height
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-[#111827]/85 backdrop-blur-md border-b border-white/10"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 blur-2xl opacity-70 scale-150"></div>
            <img src={logoPath} alt="Within Fitness" className="h-8 w-auto object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("philosophy")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">Philosophy</button>
          <button onClick={() => scrollTo("assessment-room")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">The Audits</button>
          <button onClick={() => scrollTo("pricing")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">The Lobby</button>
          <button onClick={() => scrollTo("pricing")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">The Inner Circle</button>
        </nav>

        <div className="hidden md:block">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group px-6 py-2.5 rounded-full overflow-hidden inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-full transition-all group-hover:bg-white/10"></div>
            <div className="absolute inset-0 rounded-full border border-primary/50 group-hover:border-primary transition-colors animate-pulse-ring"></div>
            <span className="relative text-sm font-semibold tracking-wide text-white flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              Enter Assessment Room
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-[#111827]/95 backdrop-blur-lg border-b border-white/10 py-6 px-4 flex flex-col gap-6"
        >
          <button onClick={() => scrollTo("philosophy")} className="text-lg font-medium text-white/80 text-left">Philosophy</button>
          <button onClick={() => scrollTo("assessment-room")} className="text-lg font-medium text-white/80 text-left">The Audits</button>
          <button onClick={() => scrollTo("pricing")} className="text-lg font-medium text-white/80 text-left">The Lobby</button>
          <button onClick={() => scrollTo("pricing")} className="text-lg font-medium text-white/80 text-left">The Inner Circle</button>
          
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative group px-6 py-3 rounded-full overflow-hidden mt-4 inline-flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-md border border-primary/50 rounded-full"></div>
            <span className="relative text-base font-semibold tracking-wide text-white flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Enter Assessment Room
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </span>
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
