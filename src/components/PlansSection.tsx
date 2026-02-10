import { useState } from "react";
import { Check, Tv, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { REGIONS, PLANS, RegionGroup, WHATSAPP_BASE_URL } from "@/data/siteData";

export function PlansSection() {
  const [region, setRegion] = useState<RegionGroup>("campinas");
  const plans = PLANS[region];

  return (
    <section id="planos" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-serif text-4xl md:text-5xl mb-3">
            Nossos <span className="italic text-primary">planos</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Escolha o plano ideal. Todos com fibra óptica de ponta a ponta.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
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
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.speed}
              className={`bg-card rounded-2xl p-8 border transition-shadow hover:shadow-lg ${
                plan.popular ? "border-primary shadow-md" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="flex items-center gap-1.5 text-primary text-xs font-medium uppercase tracking-wider mb-4">
                  <Star className="w-3.5 h-3.5" fill="currentColor" />
                  Mais Vendido
                </div>
              )}

              <h3 className="font-serif text-3xl mb-1">{plan.speed}</h3>
              <p className="text-xs text-muted-foreground mb-6">Download + Upload</p>

              <div className="flex items-baseline gap-0.5 mb-8">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-5xl font-semibold tracking-tight">{plan.price.split(",")[0]}</span>
                <span className="text-xl">,{plan.price.split(",")[1]}</span>
                <span className="text-sm text-muted-foreground ml-1">/mês</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
                {plan.tvChannels && (
                  <li className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Tv className="w-4 h-4 text-primary flex-shrink-0" />
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
                  className={`w-full h-12 text-base rounded-xl ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  Assine Já
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
