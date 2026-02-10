import { Wifi, Zap, Headphones, Signal, Tv, Clock } from "lucide-react";

const differentials = [
  { icon: Signal, title: "Sem Franquia de Dados", description: "Navegue o quanto quiser, sem limitações de consumo." },
  { icon: Zap, title: "Mais Velocidade", description: "Fibra óptica de ponta a ponta com velocidade real." },
  { icon: Headphones, title: "Suporte Técnico", description: "Equipe especializada pronta para te ajudar." },
  { icon: Wifi, title: "Wi-Fi Grátis", description: "Roteador WiFi-TOP incluso em todos os planos." },
  { icon: Tv, title: "Super Grade de Canais", description: "+190 canais de TV Online com o melhor conteúdo." },
  { icon: Clock, title: "Instalação Facilitada", description: "Instalação facilitada e sem burocracia." },
];

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Por que escolher a <span className="text-gradient">.COM Fibra</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Muito mais do que internet. Uma experiência completa de conectividade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {differentials.map((d, i) => (
            <div
              key={d.title}
              className="glass-card p-6 hover:glow-border transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <d.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
