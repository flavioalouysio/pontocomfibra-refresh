import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CONTACT, CENTRAL_ASSINANTE_URL } from "@/data/siteData";
import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { label: "Planos", href: "#planos" },
  { label: "TV Online", href: "#tv" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 bg-secondary/50 text-xs text-muted-foreground">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> {CONTACT.phone}</span>
          <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {CONTACT.email}</span>
        </div>
        <a href={CENTRAL_ASSINANTE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          Central do Assinante →
        </a>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt=".COM Fibra" className="h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a href={CENTRAL_ASSINANTE_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="glow-border text-primary border-primary/30 hover:bg-primary/10">
              Central do Assinante
            </Button>
          </a>
        </nav>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-border w-72">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Tema:</span>
                <ThemeToggle />
              </div>
              <a href={CENTRAL_ASSINANTE_URL} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-primary text-primary-foreground">Central do Assinante</Button>
              </a>
              <div className="text-sm text-muted-foreground space-y-1">
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> {CONTACT.phone}</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> {CONTACT.email}</p>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
