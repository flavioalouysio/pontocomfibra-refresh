import { Tv, Smartphone, Monitor, Tablet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_BASE_URL, TV_CATEGORIES } from "@/data/siteData";

const channels = ["CNN", "HBO", "SporTV", "ESPN", "GNT", "Nick Jr.", "Discovery", "TNT", "Globo News", "Band Sports"];

export function TVSection() {
  return (
    <section id="tv" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-widest uppercase text-primary mb-4">.COM TV</p>

            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              TV Online com{" "}
              <span className="italic text-primary">+190 canais</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 max-w-md">
              Assista em qualquer dispositivo: Smart TV, celular, tablet ou computador.
            </p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-sm text-muted-foreground">A partir de</span>
              <span className="text-3xl font-semibold">R$29,90</span>
              <span className="text-muted-foreground">/mês</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {TV_CATEGORIES.map(cat => (
                <span
                  key={cat}
                  className="px-3 py-1.5 rounded-full text-xs border border-border text-muted-foreground"
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
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base">
                Contratar TV Online
              </Button>
            </a>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex justify-center gap-10 mb-8">
              {[
                { icon: Monitor, label: "Smart TV" },
                { icon: Smartphone, label: "Celular" },
                { icon: Tablet, label: "Tablet" },
              ].map(d => (
                <div key={d.label} className="flex flex-col items-center gap-2">
                  <d.icon className="w-8 h-8 text-primary" />
                  <span className="text-xs text-muted-foreground">{d.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {channels.map(ch => (
                <div
                  key={ch}
                  className="bg-secondary rounded-lg px-3 py-2.5 text-center text-sm font-medium text-foreground/80"
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
