import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

export function ToolBodyCalc() {
  const [unit, setUnit] = useState<"in" | "cm">("in");
  const [height, setHeight] = useState<string>("");
  const [waist, setWaist] = useState<string>("");

  const h = parseFloat(height);
  const w = parseFloat(waist);
  const ratio = (h > 0 && w > 0) ? w / h : null;

  let resultBadge = null;

  if (ratio !== null) {
    if (ratio < 0.50) {
      resultBadge = {
        title: "Optimal Baseline",
        desc: "You're within the commonly used lower-risk range. Keep building habits that support energy, recovery, and strength.",
        colors: "from-green-500/20 to-green-600/20 text-green-400 border-green-500/30",
        pulse: "bg-green-400"
      };
    } else if (ratio >= 0.50 && ratio < 0.60) {
      resultBadge = {
        title: "Curiosity Signal",
        desc: "This may be a signal to become more curious about your health patterns. Look beyond the number — sleep, energy, hunger, stress, recovery.",
        colors: "from-amber-500/20 to-amber-600/20 text-amber-400 border-amber-500/30",
        pulse: "bg-amber-400"
      };
    } else {
      resultBadge = {
        title: "Elevated Signal",
        desc: "This may signal higher cardiometabolic risk related to abdominal fat distribution. Consider speaking with a qualified healthcare professional.",
        colors: "from-red-500/20 to-red-600/20 text-red-400 border-red-500/30",
        pulse: "bg-red-400"
      };
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto w-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
          <Search className="w-5 h-5 text-blue-400" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Body Intelligence Calculator</h3>
          <p className="text-white/50 text-sm">Waist-to-Height Check-In</p>
        </div>
      </div>

      <div className="bg-[#121826] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle background glow based on result */}
        {resultBadge && (
          <div className={`absolute top-0 right-0 w-64 h-64 blur-3xl opacity-10 rounded-full bg-current ${resultBadge.colors.split(" ")[1]}`} />
        )}

        <div className="flex flex-col md:flex-row gap-8 relative z-10">
          
          <div className="flex-1 space-y-6">
            <div className="flex bg-white/5 p-1 rounded-xl w-fit">
              <button 
                onClick={() => setUnit("in")}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${unit === "in" ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white/80"}`}
              >
                Inches
              </button>
              <button 
                onClick={() => setUnit("cm")}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${unit === "cm" ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white/80"}`}
              >
                Centimeters
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Height ({unit})</label>
                <input 
                  type="number" 
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white font-mono text-lg focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-white/20"
                  placeholder="0.0"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Waist Measurement ({unit})</label>
                <input 
                  type="number" 
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white font-mono text-lg focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder-white/20"
                  placeholder="0.0"
                />
              </div>
            </div>
            
            <p className="text-xs text-white/30 italic">
              * Measure your waist halfway between your lowest rib and the top of your hip bone, roughly in line with your belly button.
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-8">
            <div className="mb-4">
              <div className="text-sm text-white/40 uppercase tracking-wider font-medium mb-2">Your Ratio</div>
              <div className="text-5xl font-black text-white font-mono">
                {ratio !== null ? ratio.toFixed(2) : "0.00"}
              </div>
            </div>

            {resultBadge ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-5 rounded-2xl bg-gradient-to-br border ${resultBadge.colors}`}
              >
                <div className="font-bold text-lg mb-2 flex items-center gap-2 text-white">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${resultBadge.pulse}`} />
                  {resultBadge.title}
                </div>
                <p className="text-sm opacity-90 leading-relaxed text-white/80">{resultBadge.desc}</p>
              </motion.div>
            ) : (
              <div className="p-5 rounded-2xl bg-white/5 border border-white/5 border-dashed">
                <p className="text-sm text-white/40 leading-relaxed">
                  Enter your height and waist measurement to calculate your baseline ratio.
                </p>
              </div>
            )}

            <div className="mt-6">
              <p className="text-xs text-white/30">
                This is a screening tool, not a diagnosis. Your body is more than one measurement.
              </p>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
