import { useState } from "react";
import { Menu } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        <a href="#" className="flex items-center gap-2">
          <img src="/logo.png" alt=".COM Fibra" className="h-8 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{CONTACT.phone}</span>
          <ThemeToggle />
          <a href={CENTRAL_ASSINANTE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Central do Assinante
            </Button>
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-72">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a href={CENTRAL_ASSINANTE_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary text-primary-foreground">
                    Central do Assinante
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground">{CONTACT.phone}</p>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
