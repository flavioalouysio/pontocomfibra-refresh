import { useState } from "react";
import { Button } from "@/components/ui/button";
import { REGIONS, RegionGroup, WHATSAPP_BASE_URL } from "@/data/siteData";
import { Wifi, ArrowRight } from "lucide-react";

export function HeroSection() {
  const [region, setRegion] = useState<RegionGroup>("campinas");

  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Wifi className="w-4 h-4" />
              100% Fibra Óptica
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-foreground">
              Internet de{" "}
              <span className="text-primary">ultra velocidade</span>
              <br />
              + TV Online
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg mb-8">
              Planos a partir de{" "}
              <span className="text-foreground font-bold">R$99,90</span>/mês.
              Sem franquia de dados. Instalação facilitada.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Olá! Gostaria de contratar um plano de internet.")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-13 text-base font-bold shadow-lg shadow-primary/25">
                  Assine Já
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="px-8 h-13 text-base font-semibold border-2"
                onClick={scrollToPlans}
              >
                Ver Planos
              </Button>
            </div>
          </div>

          {/* Region selector card */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h3 className="text-lg font-bold text-foreground mb-2">Selecione sua região</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Os planos e preços variam conforme a sua localização.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {(Object.keys(REGIONS) as RegionGroup[]).map(key => (
                <button
                  key={key}
                  onClick={() => setRegion(key)}
                  className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all border-2 ${
                    region === key
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-secondary text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {REGIONS[key].label}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {REGIONS[region].cities.map(city => (
                <span key={city} className="bg-muted text-muted-foreground px-3 py-1.5 rounded-lg text-xs font-medium">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
