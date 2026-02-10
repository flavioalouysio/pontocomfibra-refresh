import { Tv, Smartphone, Monitor, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_BASE_URL, TV_CATEGORIES } from "@/data/siteData";

const channels = ["CNN", "HBO", "SporTV", "ESPN", "GNT", "Nick Jr.", "Discovery", "TNT", "Globo News", "Band Sports"];

export function TVSection() {
  return (
    <section id="tv" className="py-24 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md mb-4">
              .COM TV
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
              TV Online com +190 Canais
            </h2>

            <p className="text-muted-foreground text-lg mb-6 max-w-md">
              Assista em qualquer dispositivo: Smart TV, celular, tablet ou computador.
              Esportes, filmes, séries, notícias e muito mais.
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-sm text-muted-foreground">A partir de</span>
              <span className="text-3xl font-extrabold text-primary">R$29,90</span>
              <span className="text-muted-foreground">/mês</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {TV_CATEGORIES.map(cat => (
                <span
                  key={cat}
                  className="px-3 py-1.5 rounded-md text-xs font-medium bg-card border border-border text-muted-foreground"
                >
                  {cat}
                </span>
              ))}
            </div>

            <a
              href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent("Olá! Quero saber mais sobre a TV Online.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base font-semibold">
                Contratar TV Online
              </Button>
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
            <div className="flex justify-center gap-10 mb-8 pb-6 border-b border-border">
              {[
                { icon: Monitor, label: "Smart TV" },
                { icon: Smartphone, label: "Celular" },
                { icon: Tablet, label: "Tablet" },
              ].map(d => (
                <div key={d.label} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <d.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{d.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {channels.map(ch => (
                <div
                  key={ch}
                  className="bg-secondary rounded-md px-3 py-2.5 text-center text-sm font-semibold text-foreground/80"
                >
                  {ch}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
