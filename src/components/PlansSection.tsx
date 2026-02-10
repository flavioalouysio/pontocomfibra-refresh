import { useState } from "react";
import { Check, Tv, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { REGIONS, PLANS, RegionGroup, WHATSAPP_BASE_URL } from "@/data/siteData";

export function PlansSection() {
  const [region, setRegion] = useState<RegionGroup>("campinas");
  const plans = PLANS[region];

  return (
    <section id="planos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-foreground">
            Nossos Planos
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Escolha o plano ideal para você. Todos incluem fibra óptica de ponta a ponta.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
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
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.speed}
              className={`bg-card rounded-xl p-8 border-2 transition-shadow hover:shadow-lg relative ${
                plan.popular ? "border-primary shadow-md" : "border-border"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-semibold">
                  <Star className="w-3 h-3 mr-1" fill="currentColor" />
                  Mais Vendido
                </Badge>
              )}

              <h3 className="text-2xl font-extrabold text-foreground mb-1">{plan.speed}</h3>
              <p className="text-xs text-muted-foreground mb-6 uppercase tracking-wider">Download + Upload</p>

              <div className="flex items-baseline gap-0.5 mb-8">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-5xl font-extrabold text-primary">{plan.price.split(",")[0]}</span>
                <span className="text-xl font-bold text-primary">,{plan.price.split(",")[1]}</span>
                <span className="text-sm text-muted-foreground ml-1">/mês</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
                {plan.tvChannels && (
                  <li className="flex items-center gap-2.5 text-sm text-muted-foreground">
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
                  className={`w-full h-12 text-base font-semibold ${
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
