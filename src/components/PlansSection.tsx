import { useState } from "react";
import { Check, Tv, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGIONS, PLANS, RegionGroup, WHATSAPP_BASE_URL } from "@/data/siteData";

export function PlansSection() {
  const [region, setRegion] = useState<RegionGroup>("campinas");
  const plans = PLANS[region];

  return (
    <section id="planos" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Planos</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3 text-foreground">
            Escolha o plano ideal para você
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Todos com fibra óptica de ponta a ponta e sem franquia de dados.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {(Object.keys(REGIONS) as RegionGroup[]).map(key => (
              <button
                key={key}
                onClick={() => setRegion(key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border-2 ${
                  region === key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted-foreground border-border hover:border-primary/50"
                }`}
              >
                {REGIONS[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.speed}
              className={`bg-card rounded-2xl p-8 border-2 transition-all hover:shadow-xl relative ${
                plan.popular ? "border-primary shadow-lg shadow-primary/10" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                    <Star className="w-3.5 h-3.5" fill="currentColor" />
                    Mais Vendido
                  </div>
                </div>
              )}

              <h3 className="text-2xl font-extrabold text-foreground mb-1 mt-2">{plan.speed}</h3>
              <p className="text-xs text-muted-foreground mb-6">Download + Upload</p>

              <div className="flex items-baseline gap-0.5 mb-8">
                <span className="text-sm text-muted-foreground font-medium">R$</span>
                <span className="text-5xl font-extrabold text-foreground tracking-tight">{plan.price.split(",")[0]}</span>
                <span className="text-xl font-bold text-foreground">,{plan.price.split(",")[1]}</span>
                <span className="text-sm text-muted-foreground ml-1">/mês</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {f}
                  </li>
                ))}
                {plan.tvChannels && (
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Tv className="w-3 h-3 text-primary" />
                    </div>
                    TV Online {plan.tvChannels}
                  </li>
                )}
              </ul>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(`Olá! Quero contratar o plano ${plan.speed} por R$${plan.price}/mês.`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className={`w-full h-12 text-base font-bold rounded-xl ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  Assine Já
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
