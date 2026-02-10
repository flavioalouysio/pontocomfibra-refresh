import { useState } from "react";
import { Check, Zap, Tv, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { REGIONS, PLANS, RegionGroup, WHATSAPP_BASE_URL } from "@/data/siteData";

export function PlansSection() {
  const [region, setRegion] = useState<RegionGroup>("campinas");
  const plans = PLANS[region];

  return (
    <section id="planos" className="py-24 bg-section-gradient relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Planos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Escolha o plano ideal para você. Todos incluem fibra óptica de ponta a ponta.
          </p>

          {/* Region tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {(Object.keys(REGIONS) as RegionGroup[]).map(key => (
              <button
                key={key}
                onClick={() => setRegion(key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  region === key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {REGIONS[key].label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={plan.speed}
              className={`glass-card p-8 relative overflow-hidden transition-transform hover:scale-[1.02] ${
                plan.popular ? "glow-border glow-cyan" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  <Star className="w-3 h-3 mr-1" /> Mais Vendido
                </Badge>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{plan.speed}</h3>
                  <p className="text-xs text-muted-foreground">Download + Upload</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-display font-bold text-primary">{plan.price.split(",")[0]}</span>
                  <span className="text-xl text-primary">,{plan.price.split(",")[1]}</span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
                {plan.tvChannels && (
                  <li className="flex items-center gap-3 text-sm text-foreground/80">
                    <Tv className="w-4 h-4 text-primary flex-shrink-0" />
                    TV Online {plan.tvChannels}
                  </li>
                )}
              </ul>

              <a
                href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(`Olá! Quero contratar o plano ${plan.speed} por R$${plan.price}/mês.`)}`}
                target="_blank" rel="noopener noreferrer"
              >
                <Button className={`w-full py-6 text-lg rounded-xl font-semibold ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80 border border-border"
                }`}>
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
