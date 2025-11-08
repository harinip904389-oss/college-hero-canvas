import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Admissions", href: "#admissions" },
  { name: "Campus Life", href: "#campus" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-2xl font-bold text-white">MC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Madras College</h1>
              <p className="text-xs text-muted-foreground">Excellence in Education</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button size="sm">Apply Now</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button size="sm" className="w-full">Apply Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
