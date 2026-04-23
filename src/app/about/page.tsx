import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Wilson Web Design",
  description:
    "A small studio from Southwest Florida building considered websites for people who care about the details.",
};

const principles = [
  {
    n: "01",
    title: "Quality over quantity",
    desc: "We take on a limited number of projects each quarter so every client gets our full attention.",
  },
  {
    n: "02",
    title: "Honest communication",
    desc: "No jargon, no hidden fees. We keep you informed at every step and make sure you know what you're getting.",
  },
  {
    n: "03",
    title: "Design with purpose",
    desc: "A great-looking website is just the start. We design with your goals in mind — more leads, more sales, more growth.",
  },
  {
    n: "04",
    title: "Long-term partnership",
    desc: "We're not just here for launch day. We build relationships and provide support as your business grows.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-48 pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-dark/50 mb-12">
            § About / The Studio
          </p>
          <h1 className="font-display display-tight text-6xl md:text-8xl lg:text-[10rem] font-light text-dark leading-[0.95]">
            A small studio
            <br />
            <span className="italic text-gold-dark">from Florida.</span>
          </h1>
        </div>
      </section>

      {/* Story — two columns */}
      <section className="bg-cream pb-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="border-t border-dark/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] text-dark/50">
                — Story
              </p>
            </div>
            <div className="md:col-span-7 space-y-8 text-lg md:text-xl text-dark/80 leading-relaxed">
              <p>
                Wilson Web Design started with a simple belief: every business
                deserves a website that truly represents who they are. Too many
                settle for generic templates that fail to capture what makes
                them different.
              </p>
              <p>
                We&apos;re here to change that. By combining thoughtful design
                with modern development, we build websites that don&apos;t just
                look good — they perform, convert, and grow with your business.
              </p>
              <blockquote className="pt-8 border-t border-dark/10">
                <p className="font-display italic text-3xl md:text-4xl font-light text-gold-dark leading-snug">
                  We care about the details so you don&apos;t have to.
                </p>
                <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-dark/60">
                  — Ariana W., Founder
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Principles — editorial list */}
      <section className="bg-dark text-cream py-32 lg:py-48 relative overflow-hidden grain">
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-12">
            § Principles
          </p>
          <h2 className="font-display display-tight text-5xl md:text-7xl lg:text-[8rem] font-light leading-[0.95] mb-24">
            How we
            <br />
            <span className="italic text-gold">work.</span>
          </h2>

          <div className="border-t border-cream/10">
            {principles.map((p) => (
              <div
                key={p.n}
                className="border-b border-cream/10 py-10 md:py-14 grid grid-cols-12 gap-4 md:gap-8"
              >
                <div className="col-span-2 md:col-span-1 font-display italic text-2xl md:text-3xl text-gold">
                  {p.n}
                </div>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="font-display text-2xl md:text-4xl font-light text-cream">
                    {p.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <p className="text-cream/60 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-32 lg:py-48">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <h2 className="font-display display-tight text-5xl md:text-7xl lg:text-[9rem] font-light text-dark leading-[0.95]">
            Let&apos;s work
            <br />
            <span className="italic text-gold-dark">together.</span>
          </h2>
          <div className="mt-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 bg-dark text-cream px-8 py-5 hover:bg-gold hover:text-dark transition-colors"
            >
              <span className="text-sm uppercase tracking-[0.2em]">Get in touch</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
