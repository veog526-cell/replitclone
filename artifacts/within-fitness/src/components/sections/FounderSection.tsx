import { motion } from "framer-motion";
import coachPath from "@assets/Gemini_Generated_Image_obihosobihosobih_1784669000605.png";
import { Mail } from "lucide-react";

const tags = [
  "Innervation Training Specialist",
  "Metabolic Approach to Health",
  "100+ Peer-Reviewed Paper Library",
];

const bullets = [
  "Experience-driven coaching, built on decades of real-world application",
  "Founder of the fromWithin Method™",
  "Specialist in Biofeedback & Signal Tracking",
  'Creator of the "Metabolism as an OS" Framework',
];

export function FounderSection() {
  return (
    <section className="py-24 relative z-10 bg-[#18243a]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            The Shift: From{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
              Fighting
            </span>{" "}
            to Listening
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Decades spent decoding human operating systems.<br />
            Now we bring your body back online…stronger, steadier, built to last.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-[#121826] border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col md:flex-row">
            {/* Photo */}
            <div className="md:w-2/5 relative h-80 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#121826] to-transparent z-10"></div>
              <img
                src={coachPath}
                alt="Coach / Founder"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Content */}
            <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative z-20 gap-6">

              {/* Quote */}
              <blockquote className="text-white/90 text-sm md:text-base leading-relaxed italic border-l-2 border-primary pl-4">
                "Through our own physique transformations and decades of involvement in the bodybuilding community, we followed the industry's 'grind model!'…push harder, ignore the pain, keep going.{" "}
                <span className="not-italic font-normal text-white/70">
                  But real change didn't come from more force. It came when we stopped fighting our bodies…and started understanding them. We built this community to ensure you don't have to learn the hard way.
                </span>"
              </blockquote>

              {/* Philosophy */}
              <p className="text-white/65 text-sm leading-relaxed">
                Our coaching philosophy centers on{" "}
                <span className="text-white font-semibold">Nervous System Regulation</span> and{" "}
                <span className="text-white font-semibold">Metabolic Optimization &amp; Efficiency</span>. We move away from the noise of forced results and toward a system built on cooperation, data, and sustainable strength.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium text-white/70 border border-white/15 bg-white/5 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bullets */}
              <ul className="space-y-2">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Email — unchanged */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
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
