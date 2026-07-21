import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle2, X } from "lucide-react";

type Answers = Record<string, string | string[]>;

export function ToolRealityCheck() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [showSummary, setShowSummary] = useState(false);

  const totalSteps = 8;

  const handleSelect = (key: string, value: string, isMulti = false) => {
    setAnswers(prev => {
      if (!isMulti) return { ...prev, [key]: value };
      
      const current = (prev[key] as string[]) || [];
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter(v => v !== value) };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  const handleText = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(s => s + 1);
    else setShowSummary(true);
  };

  const prevStep = () => {
    if (step > 1) setStep(s => s - 1);
  };

  const steps = [
    {
      id: 1,
      title: "Welcome & Arrival",
      q1: { key: "arrival", label: "How are you arriving today?", type: "single", options: ["Curious but unsure", "Hopeful but tired of trying", "Frustrated with my body", "Ready to listen differently", "Just exploring"] },
      q2: { key: "arrival_text", label: "In one sentence, what brought you here?", type: "text" }
    },
    {
      id: 2,
      title: "Energy & Capacity",
      q1: { key: "energy", label: "My daily energy feels:", type: "single", options: ["Steady", "Up and down", "Mostly low", "Hard to predict"] },
      q2: { key: "energized_time", label: "I usually feel most energized:", type: "single", options: ["Morning", "Midday", "Evening", "Rarely"] },
      q3: { key: "energy_drain", label: "What drains you fastest right now?", type: "text" }
    },
    {
      id: 3,
      title: "Sleep & Recovery",
      q1: { key: "sleep", label: "Select all that apply:", type: "multi", options: ["I fall asleep easily", "I stay asleep", "I wake feeling rested", "My mind races at night", "Sleep feels inconsistent"] },
      q2: { key: "sleep_text", label: "If sleep could improve one way, what would matter most?", type: "text" }
    },
    {
      id: 4,
      title: "Eating Experience",
      q1: { key: "meals", label: "After most meals, I feel:", type: "single", options: ["Satisfied", "Still hungry", "Too full", "Tired or foggy", "Energized"] },
      q2: { key: "appetite", label: "My appetite feels:", type: "single", options: ["Clear", "Blunted", "Constant", "Unpredictable"] },
      q3: { key: "eating_text", label: "What's your relationship with food been like lately?", type: "text" }
    },
    {
      id: 5,
      title: "Movement & Training",
      q1: { key: "movement", label: "Right now, movement feels:", type: "single", options: ["Energizing", "Neutral", "Draining", "Inconsistent", "Stressful"] },
      q2: { key: "movement_text", label: "What kind of movement feels safest for your body right now?", type: "text" }
    },
    {
      id: 6,
      title: "Stress & Life Load",
      q1: { key: "stress", label: "My current life load feels:", type: "single", options: ["Manageable", "Heavy but stable", "Overwhelming", "Constantly changing"] },
      q2: { key: "stress_text", label: "What's one thing your body has been asking for lately?", type: "text" }
    },
    {
      id: 7,
      title: "Body Feedback",
      q1: { key: "feedback", label: "Select all you experience regularly:", type: "multi", options: ["Energy crashes", "Sleep disruptions", "Digestive discomfort", "Cravings or loss of appetite", "Mood swings", "Training feels harder than it should", "Recovery feels slow"] },
      q2: { key: "feedback_text", label: "Which one do you want to understand better?", type: "text" }
    },
    {
      id: 8,
      title: "Your Intention",
      q1: { key: "intention_text", label: "What would feeling better look like for you — beyond the scale?", type: "textarea" }
    }
  ];

  const currentStepData = steps.find(s => s.id === step)!;

  const renderQuestion = (q: any) => {
    if (!q) return null;

    if (q.type === "single" || q.type === "multi") {
      const isMulti = q.type === "multi";
      const selected = answers[q.key] || (isMulti ? [] : "");
      
      return (
        <div className="mb-8">
          <label className="block text-white/80 font-medium mb-4">{q.label}</label>
          <div className="flex flex-wrap gap-3">
            {q.options.map((opt: string) => {
              const isSelected = isMulti ? (selected as string[]).includes(opt) : selected === opt;
              return (
                <button
                  key={opt}
                  onClick={() => handleSelect(q.key, opt, isMulti)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                    isSelected 
                      ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
                      : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/30"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      );
    }

    if (q.type === "text" || q.type === "textarea") {
      return (
        <div className="mb-8">
          <label className="block text-white/80 font-medium mb-4">{q.label}</label>
          {q.type === "textarea" ? (
            <textarea
              value={(answers[q.key] as string) || ""}
              onChange={(e) => handleText(q.key, e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none h-32"
              placeholder="Type your answer here..."
            />
          ) : (
            <input
              type="text"
              value={(answers[q.key] as string) || ""}
              onChange={(e) => handleText(q.key, e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Type your answer here..."
            />
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto w-full"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
          <CheckCircle2 className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">Reality Check Audit</h3>
          <p className="text-white/50 text-sm">Diagnostic Sequence {step}/{totalSteps}</p>
        </div>
      </div>

      <div className="bg-[#121826] border border-white/10 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary to-secondary"
            initial={{ width: 0 }}
            animate={{ width: `${(step / totalSteps) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="min-h-[400px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex-grow"
            >
              <h4 className="text-xl font-bold text-primary mb-8">{currentStepData.title}</h4>
              
              {renderQuestion(currentStepData.q1)}
              {renderQuestion(currentStepData.q2)}
              {renderQuestion(currentStepData.q3)}
              
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                step === 1 ? "text-white/20 cursor-not-allowed" : "text-white/60 hover:text-white"
              }`}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-colors border border-white/10 hover:border-white/30"
            >
              {step === totalSteps ? "Generate Report" : "Continue"} <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Summary Modal */}
      <AnimatePresence>
        {showSummary && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0B0F17]/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#121826] border border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="sticky top-0 bg-[#121826]/95 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-between z-10">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    Metabolic Profile Summary
                  </h3>
                </div>
                <button 
                  onClick={() => setShowSummary(false)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 space-y-8">
                {steps.map(s => {
                  const hasAnswer = (s.q1 && answers[s.q1.key]) || (s.q2 && answers[s.q2.key]) || (s.q3 && answers[s.q3.key]);
                  if (!hasAnswer) return null;

                  return (
                    <div key={s.id} className="border-b border-white/5 pb-8 last:border-0 last:pb-0">
                      <h4 className="text-lg font-semibold text-secondary mb-4">{s.title}</h4>
                      <div className="space-y-4">
                        {[s.q1, s.q2, s.q3].filter(Boolean).map((q: any) => {
                          const ans = answers[q.key];
                          if (!ans || (Array.isArray(ans) && ans.length === 0)) return null;
                          return (
                            <div key={q.key}>
                              <div className="text-sm text-white/40 mb-1">{q.label}</div>
                              <div className="text-white font-medium">
                                {Array.isArray(ans) ? ans.join(", ") : ans}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10">
                  <p className="text-lg font-medium text-white text-center leading-relaxed">
                    You're in the right place. We'll take this from within — together.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
