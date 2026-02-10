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
    <section id="diferenciais" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3 text-foreground">
            Por que escolher a <span className="text-primary">.COM Fibra</span>?
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Muito mais do que internet. Uma experiência completa de conectividade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {differentials.map((d) => (
            <div
              key={d.title}
              className="bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <d.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
