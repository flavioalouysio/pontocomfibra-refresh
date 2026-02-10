import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { CONTACT, REGIONS, CENTRAL_ASSINANTE_URL } from "@/data/siteData";

const allCities = Object.values(REGIONS).flatMap(r => r.cities);

export function Footer() {
  return (
    <footer id="contato" className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo.png" alt=".COM Fibra" className="h-7 w-auto" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Internet 100% Fibra Óptica com a melhor experiência de conexão.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-foreground">Contato</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> {CONTACT.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> {CONTACT.email}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-foreground">Cidades Atendidas</h4>
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {allCities.map(c => (
                <li key={c} className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-primary" /> {c}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider mb-4 text-foreground">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#planos" className="text-muted-foreground hover:text-foreground transition-colors">Planos</a></li>
              <li><a href="#tv" className="text-muted-foreground hover:text-foreground transition-colors">TV Online</a></li>
              <li>
                <a href={CENTRAL_ASSINANTE_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  Central do Assinante
                </a>
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors">
                <Facebook className="w-3.5 h-3.5 text-muted-foreground" />
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors">
                <Instagram className="w-3.5 h-3.5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} .COM Fibra. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
