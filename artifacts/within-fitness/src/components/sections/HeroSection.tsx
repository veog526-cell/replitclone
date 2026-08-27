import { motion } from "framer-motion";
import { Monitor, AlertTriangle, ScanLine, ArrowDown, ArrowUpRight } from "lucide-react";

const BOOKING_URL = "https://www.within.fitness/c/1-on-1-assessments-c319f3";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 15 } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-[#111827]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[150px]"></div>
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center flex-grow justify-center">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-white/80 uppercase">System Diagnostics Online</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Stop Fighting Your Body. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Start Listening.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Smarter health & fitness means understanding where your body is, why it's struggling, and what it actually needs. This is where change starts — <span className="text-white font-medium">from Within.</span>
          </motion.p>

          <motion.div variants={itemVariants} className="flex justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-xy"></div>
              <span className="relative z-10 flex items-center gap-2">
                Begin Your Assessment
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Pillars */}
        <motion.div 
          id="philosophy"
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-auto pb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all hover:border-primary/50 hover:bg-white/[0.07]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary border border-primary/20 group-hover:scale-110 transition-transform">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Food is Software</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Food isn't just calories; it's information your system uses to build tissue, regulate hormones, and sustain energy.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all hover:border-red-500/50 hover:bg-white/[0.07]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center mb-6 text-red-400 border border-red-500/20 group-hover:scale-110 transition-transform">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fad Diets are Viruses</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Fad diets rewrite core metabolic code, creating system instability and leading to system crashes... leaving you depleted, not strong.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden transition-all hover:border-secondary/50 hover:bg-white/[0.07]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:bg-secondary/20 transition-colors"></div>
            <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 text-secondary border border-secondary/20 group-hover:scale-110 transition-transform">
              <ScanLine className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Biofeedback is the Error Log</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Your body communicates through sleep, energy, and appetite signals. These are your OS error logs... resolve them before a system crash.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
