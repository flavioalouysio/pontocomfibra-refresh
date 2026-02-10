import { useState } from "react";
import { Wifi, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGIONS, RegionGroup, WHATSAPP_BASE_URL } from "@/data/siteData";

export function HeroSection() {
  const [region, setRegion] = useState<RegionGroup>("campinas");

  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden pt-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(hsl(190 95% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(190 95% 50%) 1px, transparent 1px)", backgroundSize: "60px 60px" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 text-sm text-primary animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <Wifi className="w-4 h-4" />
          <span>Internet 100% Fibra Óptica</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Internet de <span className="text-gradient">Ultra Velocidade</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl text-muted-foreground">+ TV Online com +190 Canais</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Planos a partir de <span className="text-primary font-bold text-2xl">R$99,90</span>/mês.
          Sem franquia de dados. Instalação facilitada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <a href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Olá! Gostaria de contratar um plano de internet.")}`} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-xl animate-pulse-glow font-semibold">
              Assine Já
            </Button>
          </a>
          <Button size="lg" variant="outline" className="glow-border text-foreground hover:bg-secondary px-8 py-6 rounded-xl text-lg" onClick={scrollToPlans}>
            Ver Planos
          </Button>
        </div>

        {/* Region selector */}
        <div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <p className="text-sm text-muted-foreground mb-3">Selecione sua região:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {(Object.keys(REGIONS) as RegionGroup[]).map(key => (
              <button
                key={key}
                onClick={() => setRegion(key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  region === key
                    ? "bg-primary text-primary-foreground glow-cyan"
                    : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {REGIONS[key].label}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            {REGIONS[region].cities.join(" • ")}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
