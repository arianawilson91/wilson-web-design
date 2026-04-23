import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-dark text-cream overflow-hidden grain">
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12 pt-32 pb-12">
        {/* Giant wordmark */}
        <div className="mb-24">
          <h2 className="font-display display-tight text-[18vw] md:text-[14vw] lg:text-[11vw] font-light leading-[0.85] text-cream">
            Wilson
            <br />
            <span className="italic text-gold">Web Design.</span>
          </h2>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-t border-cream/10 pt-12">
          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/40 mb-6">
              Contact
            </p>
            <a
              href="mailto:wilsonwebdesignfl@gmail.com"
              className="font-display text-2xl text-cream hover:text-gold hover:italic transition-all block"
            >
              wilsonwebdesignfl
              <br />
              @gmail.com
            </a>
            <p className="mt-6 text-sm text-cream/60">Southwest Florida</p>
          </div>

          {/* Index */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/40 mb-6">
              Index
            </p>
            <ul className="space-y-3">
              {[
                { href: "/portfolio", label: "Work", n: "01" },
                { href: "/services", label: "Services", n: "02" },
                { href: "/about", label: "About", n: "03" },
                { href: "/blog", label: "Journal", n: "04" },
                { href: "/contact", label: "Contact", n: "05" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-baseline gap-3 text-sm uppercase tracking-[0.15em] text-cream/80 hover:text-gold transition-colors"
                  >
                    <span className="text-cream/30 group-hover:text-gold/60">{link.n}</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-xs uppercase tracking-[0.3em] text-cream/40 mb-6">
              Elsewhere
            </p>
            <ul className="space-y-3">
              {[
                { label: "Instagram", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Facebook", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm uppercase tracking-[0.15em] text-cream/80 hover:text-gold transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-cream/40">
            © {new Date().getFullYear()} Wilson Web Design — All rights reserved
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-cream/40">
            Est. 2025 · Made with care
          </p>
        </div>
      </div>
    </footer>
  );
}
