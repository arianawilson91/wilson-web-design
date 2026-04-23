"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const selectedWork = [
  {
    index: "01",
    title: "Pud's Pit BBQ",
    category: "Food & Beverage",
    year: "2025",
    image: "/images/portfolio/pudspit.png",
    url: "https://pudspit.com",
  },
  {
    index: "02",
    title: "Lisa Wilson Design",
    category: "Interior Design",
    year: "2025",
    image: "/images/portfolio/lisawilsondesign.png",
    url: "https://lisawilsondesign.com",
  },
];

const testimonials = [
  {
    quote: "Wilson Web Design completely transformed our online presence. Couldn't be happier.",
    name: "Michael R.",
    business: "Pud's Pit BBQ",
  },
  {
    quote: "From start to finish the process was smooth. They understood my vision perfectly.",
    name: "Lisa W.",
    business: "Lisa Wilson Design",
  },
];

export default function Home() {
  return (
    <>
      {/* ========= HERO ========= */}
      <section className="relative bg-dark text-cream min-h-screen flex flex-col justify-between overflow-hidden grain">
        {/* Top meta row */}
        <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 lg:px-12 pt-32">
          <AnimatedSection>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-cream/50">
              <span>Southwest Florida</span>
              <span className="hidden md:inline">Est. 2025</span>
              <span>Studio · Est. 01</span>
            </div>
          </AnimatedSection>
        </div>

        {/* Main hero content */}
        <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 lg:px-12 py-12 flex-1 flex items-center">
          <div className="w-full">
            <AnimatedSection>
              <h1 className="font-display display-tight text-[14vw] md:text-[11vw] lg:text-[9vw] font-light text-cream leading-[0.9]">
                Websites,
                <br />
                <span className="italic text-gold">made well.</span>
              </h1>
            </AnimatedSection>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
              <AnimatedSection delay={0.2} className="md:col-span-5">
                <p className="text-cream/70 text-base md:text-lg leading-relaxed max-w-md">
                  A small studio that builds considered,
                  high-performance websites for people who care
                  about the details.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.35} className="md:col-span-4 md:col-start-9 flex md:justify-end gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 border-b border-cream/30 pb-2 text-sm uppercase tracking-[0.2em] text-cream hover:text-gold hover:border-gold transition-colors"
                >
                  <span>Start a project</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </AnimatedSection>
            </div>
          </div>
        </div>

        {/* Bottom index row */}
        <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 lg:px-12 pb-10">
          <AnimatedSection delay={0.5}>
            <div className="flex items-end justify-between text-xs uppercase tracking-[0.3em] text-cream/50 border-t border-cream/10 pt-6">
              <span>Index</span>
              <span className="hidden md:block">Selected Work · About · Contact</span>
              <span>Scroll ↓</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========= SELECTED WORK ========= */}
      <section className="bg-cream py-32 lg:py-48">
        <div className="mx-auto max-w-[1600px] w-full px-6 lg:px-12">
          {/* Section header */}
          <AnimatedSection>
            <div className="flex items-end justify-between mb-20 lg:mb-32">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-dark/50 mb-6">
                  § 01 / Selected Work
                </p>
                <h2 className="font-display display-tight text-6xl md:text-8xl lg:text-[9rem] font-light text-dark">
                  Recent
                  <br />
                  <span className="italic">projects.</span>
                </h2>
              </div>
              <Link
                href="/portfolio"
                className="hidden md:inline-flex items-center gap-3 border-b border-dark/30 pb-2 text-sm uppercase tracking-[0.2em] text-dark hover:text-gold-dark hover:border-gold-dark transition-colors"
              >
                <span>All work</span>
                <span>→</span>
              </Link>
            </div>
          </AnimatedSection>

          {/* Work items */}
          <div className="space-y-24 lg:space-y-40">
            {selectedWork.map((project, i) => (
              <AnimatedSection key={project.index} delay={0.1}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block ${i % 2 === 1 ? "md:ml-[20%]" : ""}`}
                >
                  <div className="grid grid-cols-12 gap-6 mb-6">
                    <div className="col-span-2 md:col-span-1 font-display italic text-2xl md:text-3xl text-gold-dark">
                      {project.index}
                    </div>
                    <div className="col-span-10 md:col-span-11 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-dark/60">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <div className="relative overflow-hidden bg-dark">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={2000}
                      height={1200}
                      className="w-full h-auto transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-6 flex items-baseline justify-between">
                    <h3 className="font-display text-4xl md:text-6xl font-light text-dark group-hover:italic transition-all duration-500">
                      {project.title}
                    </h3>
                    <span className="text-sm uppercase tracking-[0.2em] text-dark/50 group-hover:text-gold-dark transition-colors">
                      Visit site ↗
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========= TESTIMONIAL / PULL QUOTE ========= */}
      <section className="relative bg-dark text-cream py-32 lg:py-48 overflow-hidden grain">
        <div className="relative z-10 mx-auto max-w-[1600px] w-full px-6 lg:px-12">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-12">
              § 02 / Kind Words
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.15}>
                <div className="border-t border-cream/15 pt-10">
                  <span className="font-display italic text-5xl text-gold leading-none">&ldquo;</span>
                  <p className="font-display text-2xl md:text-3xl font-light leading-snug text-cream mt-4">
                    {t.quote}
                  </p>
                  <div className="mt-10 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-cream/60">
                    <span>{t.name}</span>
                    <span className="text-gold">{t.business}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========= CTA ========= */}
      <section className="bg-cream py-32 lg:py-48">
        <div className="mx-auto max-w-[1600px] w-full px-6 lg:px-12">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.3em] text-dark/50 mb-12">
              § 03 / Let&apos;s Talk
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 className="font-display display-tight text-6xl md:text-8xl lg:text-[10rem] font-light text-dark leading-[0.95]">
              Have a project
              <br />
              <span className="italic text-gold-dark">in mind?</span>
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <AnimatedSection delay={0.3} className="md:col-span-5">
              <p className="text-dark/70 text-base md:text-lg leading-relaxed max-w-md">
                Tell us about it. We take on a limited number of projects each quarter
                and give each one the attention it deserves.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} className="md:col-span-5 md:col-start-8 flex md:justify-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 bg-dark text-cream px-8 py-5 hover:bg-gold hover:text-dark transition-colors"
              >
                <span className="text-sm uppercase tracking-[0.2em]">Start a project</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
