import logoPath from "@assets/E53F014E-6D40-43E2-8964-2AD8E7880657-removebg-preview_1784675003054.png";
import { Mail } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#111827] pt-20 pb-10 relative z-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="relative w-fit mb-6">
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40 blur-2xl opacity-70 scale-150"></div>
              <img src={logoPath} alt="Within Fitness" className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Bio-tech performance coaching. Your metabolism is an operating system.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollTo("philosophy")} className="text-white/60 hover:text-white transition-colors text-sm">Philosophy</button></li>
              <li><button onClick={() => scrollTo("assessment-room")} className="text-white/60 hover:text-white transition-colors text-sm">The Audits</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-4">
              <li><button onClick={() => scrollTo("pricing")} className="text-white/60 hover:text-white transition-colors text-sm">The Lobby</button></li>
              <li><button onClick={() => scrollTo("pricing")} className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">The Inner Circle <span className="text-[9px] uppercase tracking-wider bg-primary/20 text-primary px-1.5 py-0.5 rounded">Pro</span></button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:explore@within.fitness" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Mail className="w-4 h-4" /> explore@within.fitness
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Within Fitness. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            <span className="text-white/40 text-sm italic tracking-wide">Change starts from within.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
