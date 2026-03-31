import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "FAQ", to: "/faq" },
  { label: "Guidelines", to: "/guidelines" },
  { label: "Give Test", to: "/test" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  const isActive = (to: string) =>
    to === "/" ? currentPath === "/" : currentPath.startsWith(to);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            data-ocid="nav.link"
          >
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-bold tracking-widest text-gold uppercase">
                AAT
              </span>
              <span className="text-[10px] font-semibold tracking-wide text-navy-DEFAULT uppercase leading-none">
                Accounting Aptitude Test
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(link.to)
                    ? "text-navy-DEFAULT bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Static Logo (top right) */}
          <div className="hidden md:flex items-center">
            <img
              src="/assets/uploads/mysharedcfocom_cover-removebg-preview-019d39a9-b5c2-70ae-9b65-45492920eb30-1.png"
              alt="MySharedCFO"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-3 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid="nav.link"
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 text-sm font-medium rounded-md ${
                  isActive(link.to)
                    ? "text-navy-DEFAULT bg-muted"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 px-4">
              <Link to="/test" onClick={() => setOpen(false)}>
                <Button className="w-full bg-gold hover:bg-gold-hover text-white font-semibold">
                  Start Test
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
