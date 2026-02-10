import { CONTACT, CENTRAL_ASSINANTE_URL, REGIONS, RegionGroup } from "@/data/siteData";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const allCities = (Object.keys(REGIONS) as RegionGroup[]).flatMap(k => REGIONS[k].cities);

export function Footer() {
  return (
    <footer id="contato" className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="/logo.png" alt=".COM Fibra" className="h-10 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Internet 100% fibra óptica com a qualidade e velocidade que você merece.
            </p>
            <div className="flex gap-3 mt-4">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" />{CONTACT.phone}</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" />{CONTACT.email}</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />{CONTACT.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Cidades Atendidas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {allCities.map(city => <li key={city}>{city}</li>)}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#planos" className="text-muted-foreground hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#tv" className="text-muted-foreground hover:text-primary transition-colors">TV Online</a></li>
              <li><a href="#diferenciais" className="text-muted-foreground hover:text-primary transition-colors">Diferenciais</a></li>
              <li><a href={CENTRAL_ASSINANTE_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Central do Assinante</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} .COM Fibra. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
