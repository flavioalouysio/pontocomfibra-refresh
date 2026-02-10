import { useState } from "react";
import { Button } from "@/components/ui/button";
import { REGIONS, RegionGroup, WHATSAPP_BASE_URL } from "@/data/siteData";

export function HeroSection() {
  const [region, setRegion] = useState<RegionGroup>("campinas");

  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <p className="text-sm tracking-widest uppercase text-primary mb-6">
          Internet 100% Fibra Óptica
        </p>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.1] mb-6">
          Internet de{" "}
          <span className="italic text-primary">ultra velocidade</span>
          <br />
          + TV Online
        </h1>

        <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-10">
          Planos a partir de{" "}
          <span className="text-foreground font-semibold">R$99,90</span>/mês.
          Sem franquia de dados. Instalação facilitada.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <a
            href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Olá! Gostaria de contratar um plano de internet.")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base">
              Assine Já
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            className="px-8 h-12 text-base"
            onClick={scrollToPlans}
          >
            Ver Planos
          </Button>
        </div>

        {/* Region selector */}
        <div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Sua região
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {(Object.keys(REGIONS) as RegionGroup[]).map(key => (
              <button
                key={key}
                onClick={() => setRegion(key)}
                className={`px-4 py-2 rounded-full text-sm transition-all border ${
                  region === key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"
                }`}
              >
                {REGIONS[key].label}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            {REGIONS[region].cities.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
