import { motion } from "framer-motion";
import { ToolRealityCheck } from "../tools/ToolRealityCheck";
import { ToolStressMap } from "../tools/ToolStressMap";
import { ToolBodyCalc } from "../tools/ToolBodyCalc";
import { Terminal } from "lucide-react";

export function AssessmentRoom() {
  return (
    <section id="assessment-room" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono tracking-wider text-white/80 uppercase">System Diagnostics</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            The Assessment Room
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60"
          >
            Run your diagnostics. Understand your baseline.
          </motion.p>
        </div>

        <div className="flex flex-col gap-24">
          <ToolRealityCheck />
          <ToolStressMap />
          <ToolBodyCalc />
        </div>

      </div>
    </section>
  );
}
