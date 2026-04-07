import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Distribution", href: "#distribution" },
  { label: "Promotion", href: "#promotion" },
  { label: "Pricing", href: "#pricing" },
  { label: "Tools", href: "#tools" },
  { label: "Support", href: "#support" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top banner */}
      <div className="bg-primary/20 border-b border-primary/20 py-2 text-center text-sm text-foreground">
        For Independent Artists and Labels ✨
      </div>

      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-foreground font-bold text-lg">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center text-background font-bold text-sm">P</div>
            The Promo Boy
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#get-started"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Start Now
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#get-started"
              className="block text-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium"
            >
              Start Now
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
