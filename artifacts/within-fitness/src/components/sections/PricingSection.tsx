import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function PricingSection() {
  const [innerCircleTab, setInnerCircleTab] = useState<"4mo" | "12mo">("4mo");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 15 } }
  };

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Choose Your Level of Support
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Commit to a new operating system for your health.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* The Lobby */}
          <motion.div variants={itemVariants} className="bg-[#121826]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col relative group overflow-hidden transition-colors hover:border-white/20">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">The Lobby</h3>
              <p className="text-white/60 text-sm h-10">Explore our philosophy and baseline community access.</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold text-white">$10</span>
                <span className="text-white/40 font-medium">/ month</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {["Daily Community Support (Everyday Stories feed)", "The Weekly Rhythm (Monday Trends, Wednesday Philosophy, Friday Cooking Show)", "A Calm Environment"].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                    <Check className="w-3 h-3 text-white/60" />
                  </div>
                  <span className="text-sm text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors">
              Enter The Lobby
            </button>
          </motion.div>

          {/* The Inner Circle */}
          <motion.div variants={itemVariants} className="bg-[#121826] backdrop-blur-md border border-primary/50 rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden group shadow-[0_0_40px_rgba(59,130,246,0.1)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 group-hover:bg-primary/30 transition-colors"></div>
            
            <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
              <div className="px-4 py-1 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg">
                Best Value
              </div>
            </div>

            <div className="mb-8 mt-2">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300 mb-2">The Inner Circle</h3>
              <p className="text-white/60 text-sm h-10">Long-term results through biofeedback check-ins, innervation training, and metabolic design.</p>
            </div>
            
            <div className="bg-white/5 p-1 rounded-xl flex mb-6 w-full">
              <button 
                onClick={() => setInnerCircleTab("4mo")}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${innerCircleTab === "4mo" ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white/80"}`}
              >
                4-Month Plan
              </button>
              <button 
                onClick={() => setInnerCircleTab("12mo")}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${innerCircleTab === "12mo" ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white/80"}`}
              >
                12-Month Plan
                <span className="text-[10px] bg-secondary/20 text-secondary px-1.5 py-0.5 rounded">Save 25%</span>
              </button>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-extrabold text-white">
                  ${innerCircleTab === "4mo" ? "112" : "83"}
                </span>
                <span className="text-white/40 font-medium">/ mo</span>
              </div>
              <p className="text-sm text-primary">
                {innerCircleTab === "4mo" ? "Billed upfront at $448.00" : "Billed upfront at $999.00 — Save 25%"}
              </p>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {["Weekly Biofeedback Check-ins (Sleep, Energy, Appetite)", "Master Metabolism as an Operating System", "Full Access to 100+ PDF Research Library", "Protected by Results Guarantee"].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-white/90 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(59,130,246,0.4)] relative overflow-hidden group/btn">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
              <span className="relative z-10">Join The Inner Circle</span>
            </button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
