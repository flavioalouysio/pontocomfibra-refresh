import { useState } from "react";
import { Menu, Phone } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5 text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3" />
              {CONTACT.phone}
            </span>
            <span>{CONTACT.email}</span>
          </div>
          <a
            href={CENTRAL_ASSINANTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            Central do Assinante →
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt=".COM Fibra" className="h-9 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href={CENTRAL_ASSINANTE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
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
            <SheetContent side="right" className="bg-background w-72">
              <nav className="flex flex-col gap-5 mt-8">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <hr className="border-border" />
                <a href={CENTRAL_ASSINANTE_URL} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-primary text-primary-foreground font-semibold">
                    Central do Assinante
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Phone className="w-4 h-4" /> {CONTACT.phone}
                </p>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
