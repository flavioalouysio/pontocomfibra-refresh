import { Smartphone, Monitor, Tablet, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_BASE_URL, TV_CATEGORIES } from "@/data/siteData";

const channels = ["CNN", "HBO", "SporTV", "ESPN", "GNT", "Nick Jr.", "Discovery", "TNT", "Globo News", "Band Sports"];

export function TVSection() {
  return (
    <section id="tv" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-bold text-primary uppercase tracking-wider">.COM TV</span>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4 text-foreground">
              TV Online com <span className="text-primary">+190 canais</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 max-w-md">
              Assista em qualquer dispositivo: Smart TV, celular, tablet ou computador.
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-sm text-muted-foreground">A partir de</span>
              <span className="text-4xl font-extrabold text-foreground">R$29,90</span>
              <span className="text-muted-foreground">/mês</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {TV_CATEGORIES.map(cat => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-primary/10 text-primary"
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
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base font-bold shadow-lg shadow-primary/25">
                <Play className="w-4 h-4 mr-2" />
                Contratar TV Online
              </Button>
            </a>
          </div>

          <div className="bg-card border-2 border-border rounded-2xl p-8 shadow-lg">
            <div className="flex justify-center gap-12 mb-8">
              {[
                { icon: Monitor, label: "Smart TV" },
                { icon: Smartphone, label: "Celular" },
                { icon: Tablet, label: "Tablet" },
              ].map(d => (
                <div key={d.label} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <d.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground">{d.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {channels.map(ch => (
                <div
                  key={ch}
                  className="bg-muted rounded-xl px-3 py-3 text-center text-sm font-bold text-foreground"
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
