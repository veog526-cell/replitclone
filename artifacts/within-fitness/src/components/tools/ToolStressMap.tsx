import { useState } from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { AssessmentEmailButton } from "./AssessmentEmailButton";

const categories = [
  "Sleep & Recovery",
  "Hunger & Cravings",
  "Energy & Focus",
  "Digestion & Bloating",
  "Training & Soreness",
  "Mood & Stress Load",
  "Daily Movement",
  "Food Quality & Meal Rhythm"
];

export function ToolStressMap() {
  // Initialize scores with 1 for each category
  const [scores, setScores] = useState<number[]>(Array(8).fill(1));

  const updateScore = (index: number, val: number) => {
    const newScores = [...scores];
    newScores[index] = val;
    setScores(newScores);
  };

  const totalScore = scores.reduce((a, b) => a + b, 0);

  let badgeColor = "from-blue-500/20 to-blue-600/20 text-blue-400 border-blue-500/30";
  let badgeText = "Baseline Signal — Your system is relatively calm.";
  let badgeTitle = "Baseline Signal";
  let badgeDesc = "Your system is relatively calm.";

  if (totalScore >= 17 && totalScore <= 28) {
    badgeColor = "from-amber-500/20 to-amber-600/20 text-amber-400 border-amber-500/30";
    badgeTitle = "Elevated Pressure";
    badgeDesc = "Some areas need attention.";
  } else if (totalScore >= 29) {
    badgeColor = "from-red-500/20 to-red-600/20 text-red-400 border-red-500/30";
    badgeTitle = "High Load Signal";
    badgeDesc = "Your body is asking for support.";
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto w-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center border border-secondary/30">
          <Activity className="w-5 h-5 text-secondary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Metabolic Stress Map</h3>
          <p className="text-white/50 text-sm">Quantify your system load</p>
        </div>
      </div>

      <div className="bg-[#121826] border border-white/10 rounded-3xl p-6 md:p-10 relative shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-white/80">{cat}</span>
                <span className="text-white/40">{scores[idx]}/5</span>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(val => {
                  const isSelected = scores[idx] === val;
                  const isPast = scores[idx] >= val;
                  
                  return (
                    <button
                      key={val}
                      onClick={() => updateScore(idx, val)}
                      className={`flex-1 h-10 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                        isSelected 
                          ? "bg-secondary/30 border-secondary text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]"
                          : isPast 
                            ? "bg-secondary/10 border-secondary/30 text-white/80" 
                            : "bg-white/5 border-white/5 text-white/30 hover:bg-white/10"
                      }`}
                    >
                      {val}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Live Calculation Result */}
        <div className="border-t border-white/10 pt-8 mt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-sm text-white/40 mb-1 uppercase tracking-wider font-medium">Total System Load</div>
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                {totalScore}<span className="text-2xl text-white/20">/40</span>
              </div>
            </div>

            <motion.div 
              key={badgeTitle}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-6 rounded-2xl bg-gradient-to-br border flex-1 ${badgeColor}`}
            >
              <div className="font-bold text-lg mb-1 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-current animate-pulse`} />
                {badgeTitle}
              </div>
              <p className="text-sm opacity-80">{badgeDesc}</p>
            </motion.div>
          </div>
        </div>

        {/* Visualizer bars */}
        <div className="mt-12 flex gap-1 h-3 rounded-full overflow-hidden bg-white/5">
          {scores.map((s, i) => (
            <motion.div 
              key={i}
              className="h-full bg-secondary/80 border-r border-[#121826]"
              initial={{ width: 0 }}
              animate={{ width: `${(s / 40) * 100}%` }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            />
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col items-center gap-3">
          <AssessmentEmailButton
            subject="Within Fitness — Metabolic Stress Map Results"
            body={`Metabolic Stress Map Results\n\nTotal System Load: ${totalScore}/40\nSignal: ${badgeTitle}\n${badgeDesc}\n\nCategory scores:\n${categories.map((category, index) => `${category}: ${scores[index]}/5`).join("\n")}`}
          />
          <p className="text-xs text-white/35 text-center">
            Opens your email app with this report ready to send.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
