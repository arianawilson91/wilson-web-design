import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              Wilson <span className="text-gold">Web Design</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed">
              Crafting premium websites that elevate your brand and drive results.
              Custom web design and development for businesses that demand excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="mailto:hello@wilsonwebdesignfl.com" className="hover:text-gold transition-colors">
                  hello@wilsonwebdesignfl.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Wilson Web Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
