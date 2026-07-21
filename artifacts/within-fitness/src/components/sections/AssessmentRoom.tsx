import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Activity, Search, X, ArrowRight, Terminal } from "lucide-react";
import { ToolRealityCheck } from "../tools/ToolRealityCheck";
import { ToolStressMap } from "../tools/ToolStressMap";
import { ToolBodyCalc } from "../tools/ToolBodyCalc";

type ToolKey = "reality" | "stress" | "body" | null;

const tools = [
  {
    key: "reality" as ToolKey,
    icon: CheckCircle2,
    iconBg: "bg-primary/15 border-primary/30",
    iconColor: "text-primary",
    glowColor: "from-primary/20 via-transparent to-transparent",
    borderHover: "hover:border-primary/40",
    tag: "Biological Audit",
    title: "The Reality Check Audit",
    desc: "A biological audit designed to reveal if you are currently fighting your body or listening to it. Discover your baseline before you change your behavior.",
    cta: "Begin Audit",
  },
  {
    key: "stress" as ToolKey,
    icon: Activity,
    iconBg: "bg-secondary/15 border-secondary/30",
    iconColor: "text-secondary",
    glowColor: "from-secondary/20 via-transparent to-transparent",
    borderHover: "hover:border-secondary/40",
    tag: "Stress Mapping",
    title: "The Metabolic Stress Map",
    desc: "Identify the hidden stressors — from sleep debt to life load — that are currently hijacking your recovery and slowing your metabolic progress.",
    cta: "Map Your Stress",
  },
  {
    key: "body" as ToolKey,
    icon: Search,
    iconBg: "bg-blue-500/15 border-blue-500/30",
    iconColor: "text-blue-400",
    glowColor: "from-blue-500/20 via-transparent to-transparent",
    borderHover: "hover:border-blue-500/40",
    tag: "Body Intelligence",
    title: "Body Intelligence Calculator",
    desc: "Calculate your true health markers. We move beyond BMI to look at Waist-to-Height ratio and Fitness Readiness — the real indicators of system health.",
    cta: "Calculate System Health",
  },
];

const modalTitles: Record<string, string> = {
  reality: "Reality Check Audit",
  stress: "Metabolic Stress Map",
  body: "Body Intelligence Calculator",
};

export function AssessmentRoom() {
  const [active, setActive] = useState<ToolKey>(null);

  return (
    <section id="assessment-room" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono tracking-wider text-white/80 uppercase">System Diagnostics</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Stop Guessing.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
              Start Assessing.
            </span>
          </h2>
          <p className="text-lg text-white/55 leading-relaxed">
            How many times will you blame willpower before questioning the strategy itself?
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative bg-[#121826] border border-white/10 ${tool.borderHover} rounded-2xl p-7 flex flex-col gap-5 overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer`}
                onClick={() => setActive(tool.key)}
              >
                {/* Corner glow */}
                <div className={`absolute top-0 left-0 w-48 h-48 bg-gradient-to-br ${tool.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Tag */}
                <span className="text-[10px] uppercase tracking-widest font-semibold text-white/35 font-mono">
                  {tool.tag}
                </span>

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${tool.iconBg}`}>
                  <Icon className={`w-5 h-5 ${tool.iconColor}`} />
                </div>

                {/* Title + desc */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug">{tool.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{tool.desc}</p>
                </div>

                {/* CTA */}
                <button
                  onClick={(e) => { e.stopPropagation(); setActive(tool.key); }}
                  className={`mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/10 ${tool.borderHover} text-white group-hover:gap-3`}
                >
                  {tool.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] bg-[#0B0F17]/85 backdrop-blur-xl flex items-start justify-center p-4 md:p-8 overflow-y-auto"
            onClick={() => setActive(null)}
          >
            <motion.div
              key="panel"
              initial={{ scale: 0.96, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 24 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full max-w-3xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header bar */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-white/40 uppercase tracking-widest">
                  {modalTitles[active]}
                </span>
                <button
                  onClick={() => setActive(null)}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Tool content */}
              {active === "reality" && <ToolRealityCheck />}
              {active === "stress" && <ToolStressMap />}
              {active === "body" && <ToolBodyCalc />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
