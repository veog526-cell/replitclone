import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

const LOBBY_CHECKOUT_URL = "https://www.within.fitness/checkout/withinfitness-16-weeks-membership";
const INNER_CIRCLE_CHECKOUT_URL = "https://www.within.fitness/checkout/withinfitness-annual-membership";

type PlanTab = "monthly" | "4mo" | "12mo";

const PLAN_DATA: Record<PlanTab, { price: string; billed: string; saveBadge?: string }> = {
  monthly: { price: "149.00", billed: "Billed monthly — month-to-month" },
  "4mo":  { price: "112", billed: "Billed upfront at $448.00" },
  "12mo": { price: "83",  billed: "Billed upfront at $999.00 — Save 25%", saveBadge: "Save 25%" },
};

const PLAN_LABELS: Record<PlanTab, string> = {
  monthly: "Month-to-Month",
  "4mo": "4-Month Plan",
  "12mo": "12-Month Plan",
};

function PlanToggle({
  tab,
  setTab,
  options,
}: {
  tab: PlanTab;
  setTab: (t: PlanTab) => void;
  options: PlanTab[];
}) {
  return (
    <div className="bg-white/5 p-1 rounded-xl flex mb-6 w-full gap-0.5">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => setTab(option)}
          className={`flex-1 min-w-0 px-1 py-2 text-[11px] sm:text-sm font-medium rounded-lg transition-all flex items-center justify-center gap-1 ${tab === option ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white/80"}`}
        >
          {PLAN_LABELS[option]}
          {option === "12mo" && (
            <span className="hidden sm:inline text-[10px] bg-secondary/20 text-secondary px-1.5 py-0.5 rounded">Save 25%</span>
          )}
        </button>
      ))}
    </div>
  );
}

export function PricingSection() {
  const [lobbyTab, setLobbyTab]   = useState<PlanTab>("4mo");
  const [circleTab, setCircleTab] = useState<PlanTab>("12mo");

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 50, damping: 15 } }
  };

  return (
    <section id="pricing" className="py-24 relative z-10 bg-[#111827]">
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

        {/* items-stretch forces equal heights; pt-6 on the grid row gives the Inner Circle badge room */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch"
        >
          {/* ── The Lobby ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col bg-[#121826]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 relative group transition-colors hover:border-white/20"
          >
            {/* inner wrapper: flex-col + justify-between pins CTA to bottom */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">The Lobby</h3>
                  <p className="text-white/60 text-sm">Explore our philosophy and baseline community access.</p>
                </div>

                {/* Plan toggle — mirrors Inner Circle */}
                <PlanToggle tab={lobbyTab} setTab={setLobbyTab} options={["monthly", "4mo"]} />

                <div className="mb-8">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-extrabold text-white">${PLAN_DATA[lobbyTab].price}</span>
                    <span className="text-white/40 font-medium">/ mo</span>
                  </div>
                  <p className="text-sm text-white/50">{PLAN_DATA[lobbyTab].billed}</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    "Daily Community Support (Everyday Stories feed)",
                    "The Weekly Rhythm (Monday Trends, Wednesday Philosophy, Friday Cooking Show)",
                    "A Calm Environment",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                        <Check className="w-3 h-3 text-white/60" />
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={LOBBY_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors inline-flex items-center justify-center gap-2 group"
              >
                Enter The Lobby
                <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* ── The Inner Circle ── */}
          {/* overflow-visible so the badge is not clipped; pt-8 creates clearance below the badge */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col bg-[#121826] backdrop-blur-md border border-primary/50 rounded-3xl pt-8 px-8 pb-8 md:pt-10 md:px-10 md:pb-10 relative group shadow-[0_0_40px_rgba(59,130,246,0.1)]"
          >
            {/* Glow blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 group-hover:bg-primary/30 transition-colors pointer-events-none"></div>

            {/* BEST VALUE badge — sits inside the card top, not clipped */}
            <div className="flex justify-center mb-6">
              <div className="px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg">
                Best Value
              </div>
            </div>

            {/* inner wrapper: flex-col + justify-between pins CTA to bottom */}
            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300 mb-2">The Inner Circle</h3>
                  <p className="text-white/60 text-sm">Long-term results through biofeedback check-ins, innervation training, and metabolic design.</p>
                </div>

                <PlanToggle tab={circleTab} setTab={setCircleTab} options={["monthly", "12mo"]} />

                <div className="mb-8">
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-extrabold text-white">${PLAN_DATA[circleTab].price}</span>
                    <span className="text-white/40 font-medium">/ mo</span>
                  </div>
                  <p className="text-sm text-primary">{PLAN_DATA[circleTab].billed}</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {[
                    "Weekly Biofeedback Check-ins (Sleep, Energy, Appetite)",
                    "Master Metabolism as an Operating System",
                    "Full Access to 100+ PDF Research Library",
                    "Protected by Results Guarantee",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-white/90 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={INNER_CIRCLE_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(59,130,246,0.4)] relative overflow-hidden group/btn inline-flex items-center justify-center gap-2"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">Join The Inner Circle</span>
                <ArrowUpRight className="relative z-10 w-4 h-4 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
