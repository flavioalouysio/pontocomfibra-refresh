import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGIONS, RegionGroup, WHATSAPP_BASE_URL } from "@/data/siteData";

const highlights = ["100% Fibra Óptica", "Sem franquia de dados", "Instalação facilitada", "+190 canais de TV"];

export function HeroSection() {
  const [region, setRegion] = useState<RegionGroup>("campinas");

  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-36 pb-20 md:pt-48 md:pb-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md mb-6">
            Internet de Fibra Óptica
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5 text-foreground">
            Internet de ultra velocidade + TV Online
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Planos a partir de{" "}
            <span className="text-foreground font-bold">R$99,90</span>/mês com
            fibra óptica de ponta a ponta.
          </p>

          <div className="grid grid-cols-2 gap-2 mb-8 max-w-md">
            {highlights.map(h => (
              <div key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                {h}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Olá! Gostaria de contratar um plano de internet.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base font-semibold gap-2">
                Assine Já <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base font-semibold"
              onClick={scrollToPlans}
            >
              Ver Planos
            </Button>
          </div>

          {/* Region selector */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Selecione sua região
            </p>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(REGIONS) as RegionGroup[]).map(key => (
                <button
                  key={key}
                  onClick={() => setRegion(key)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    region === key
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground border border-border hover:border-primary/40"
                  }`}
                >
                  {REGIONS[key].label}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              {REGIONS[region].cities.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
