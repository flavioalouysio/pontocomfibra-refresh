import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { CONTACT, REGIONS, CENTRAL_ASSINANTE_URL } from "@/data/siteData";

const allCities = Object.values(REGIONS).flatMap(r => r.cities);

export function Footer() {
  return (
    <footer id="contato" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt=".COM Fibra" className="h-8 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-background/60 leading-relaxed">
              Internet 100% Fibra Óptica com a melhor experiência de conexão.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-background/80">Contato</h4>
            <ul className="space-y-2.5 text-sm text-background/60">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> {CONTACT.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> {CONTACT.email}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-background/80">Cidades Atendidas</h4>
            <ul className="space-y-1.5 text-sm text-background/60">
              {allCities.map(c => (
                <li key={c} className="flex items-center gap-2">
                  <MapPin className="w-3 h-3" /> {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-background/80">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#planos" className="text-background/60 hover:text-background transition-colors">Planos</a></li>
              <li><a href="#tv" className="text-background/60 hover:text-background transition-colors">TV Online</a></li>
              <li>
                <a href={CENTRAL_ASSINANTE_URL} target="_blank" rel="noopener noreferrer" className="text-background/60 hover:text-background transition-colors">
                  Central do Assinante
                </a>
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-4 h-4 text-background/70" />
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-4 h-4 text-background/70" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 text-center text-xs text-background/40">
          © {new Date().getFullYear()} .COM Fibra. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
