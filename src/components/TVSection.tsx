import { Tv, Smartphone, Monitor, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_BASE_URL, TV_CATEGORIES } from "@/data/siteData";

const channels = ["CNN", "HBO", "SporTV", "ESPN", "GNT", "Nick Jr.", "Discovery", "TNT", "Globo News", "Band Sports"];

export function TVSection() {
  return (
    <section id="tv" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6 text-sm text-primary">
              <Tv className="w-4 h-4" />
              <span>.COM TV</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              TV Online com<br />
              <span className="text-gradient">+190 Canais</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              Assista em qualquer dispositivo: Smart TV, celular, tablet ou computador.
              Esportes, filmes, séries, notícias e muito mais.
            </p>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-sm text-muted-foreground">A partir de</span>
              <span className="text-4xl font-display font-bold text-primary">R$29,90</span>
              <span className="text-muted-foreground">/mês</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {TV_CATEGORIES.map(cat => (
                <span key={cat} className="px-3 py-1.5 rounded-full bg-secondary text-sm text-foreground/80 border border-border/50">
                  {cat}
                </span>
              ))}
            </div>

            <a href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Olá! Quero saber mais sobre a TV Online.")}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-6 text-lg font-semibold">
                Contratar TV Online
              </Button>
            </a>
          </div>

          <div className="space-y-6">
            {/* Devices illustration */}
            <div className="glass-card p-8 glow-border">
              <div className="flex justify-center gap-8 mb-6">
                <div className="flex flex-col items-center gap-2">
                  <Monitor className="w-10 h-10 text-primary" />
                  <span className="text-xs text-muted-foreground">Smart TV</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Smartphone className="w-10 h-10 text-primary" />
                  <span className="text-xs text-muted-foreground">Celular</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Tablet className="w-10 h-10 text-primary" />
                  <span className="text-xs text-muted-foreground">Tablet</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {channels.map(ch => (
                  <div key={ch} className="bg-secondary/80 rounded-lg px-3 py-2 text-center text-sm font-medium text-foreground/80">
                    {ch}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
