import { Link } from "@tanstack/react-router";
import { BookOpen } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-md bg-gold flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-navy-deep" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-bold tracking-widest text-gold uppercase">
                  AAT
                </span>
                <span className="text-[10px] tracking-wide text-white/70 uppercase leading-none">
                  Accounting Aptitude Test
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              The industry-standard assessment for accounting professionals and
              trainees.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "FAQ", to: "/faq" },
                { label: "Guidelines", to: "/guidelines" },
                { label: "Take the Test", to: "/test" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {[
                "Study Materials",
                "Practice Questions",
                "Score Interpretation",
                "Career Pathways",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                "About Us",
                "Contact",
                "Privacy Policy",
                "Terms of Service",
              ].map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/60">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            &copy; {year} Accounting Aptitude Test. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/70 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
