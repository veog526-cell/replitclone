import { motion } from "framer-motion";
import coachPath from "@assets/Gemini_Generated_Image_obihosobihosobih_1784669000605.png";
import { Mail } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-[#121826] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 relative h-80 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#121826] to-transparent z-10"></div>
              <img 
                src={coachPath} 
                alt="Coach / Founder" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="md:w-3/5 p-8 md:p-16 flex flex-col justify-center relative z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md w-fit">
                <span className="text-xs font-semibold tracking-wider text-white/60 uppercase">The Architecture</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Designed from <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Within</span>
              </h2>
              
              <p className="text-lg text-white/70 leading-relaxed mb-8">
                "The From Within approach is built on nervous system regulation, metabolic signal tracking, and biofeedback intelligence — not willpower, not punishment. Your metabolism is an operating system. We learn to read it, cooperate with it, and optimize it from within."
              </p>

              <div className="flex items-center gap-4 border-t border-white/10 pt-8 mt-auto">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <div className="text-sm text-white/40 mb-1 font-medium uppercase tracking-wider">Direct Access</div>
                  <a href="mailto:explore@within.fitness" className="text-white hover:text-primary transition-colors font-medium">
                    explore@within.fitness
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
