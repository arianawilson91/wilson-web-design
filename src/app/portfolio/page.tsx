import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work | Wilson Web Design",
  description:
    "A selection of recent web design and development work from Wilson Web Design.",
};

const projects = [
  {
    index: "01",
    title: "Pud's Pit BBQ",
    category: "Food & Beverage",
    year: "2025",
    location: "Southwest Florida",
    description:
      "A bold, modern website for a veteran and family-owned BBQ food truck. Features an interactive menu, catering request form, location schedule, and photo gallery.",
    tags: ["Custom Design", "Catering Form", "Mobile-First", "Brand-Driven"],
    url: "https://pudspit.com",
    image: "/images/portfolio/pudspit.png",
  },
  {
    index: "02",
    title: "Lisa Wilson Design",
    category: "Interior Design",
    year: "2025",
    location: "Southwest Florida",
    description:
      "An elegant, luxury website for a kitchen design and remodeling business. Showcases a portfolio of custom kitchens, bathrooms, and cabinetry with a clean, sophisticated aesthetic.",
    tags: ["Portfolio Showcase", "Luxury Design", "Responsive", "SEO Optimized"],
    url: "https://lisawilsondesign.com",
    image: "/images/portfolio/lisawilsondesign.png",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-48 pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-dark/50 mb-12">
                § Work / 2025
              </p>
              <h1 className="font-display display-tight text-6xl md:text-8xl lg:text-[10rem] font-light text-dark leading-[0.95]">
                Selected
                <br />
                <span className="italic text-gold-dark">work.</span>
              </h1>
            </div>
            <p className="hidden md:block text-xs uppercase tracking-[0.3em] text-dark/50">
              {projects.length} projects
            </p>
          </div>
        </div>
      </section>

      {/* Projects — alternating editorial layout */}
      <section className="bg-cream pb-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="space-y-32 lg:space-y-48">
            {projects.map((project, i) => {
              const isRight = i % 2 === 1;
              return (
                <a
                  key={project.index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className={`grid grid-cols-12 gap-6 mb-8 ${isRight ? "md:ml-[15%]" : ""}`}>
                    <div className="col-span-2 md:col-span-1 font-display italic text-2xl md:text-3xl text-gold-dark">
                      {project.index}
                    </div>
                    <div className="col-span-10 md:col-span-11 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-dark/60">
                      <span>{project.category}</span>
                      <span className="hidden md:block">{project.location}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <div className={`relative overflow-hidden bg-dark ${isRight ? "md:ml-[15%]" : ""}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={2400}
                      height={1500}
                      className="w-full h-auto transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className={`mt-8 grid grid-cols-12 gap-6 ${isRight ? "md:ml-[15%]" : ""}`}>
                    <div className="col-span-12 md:col-span-6">
                      <h2 className="font-display text-4xl md:text-6xl font-light text-dark group-hover:italic transition-all duration-500">
                        {project.title}
                      </h2>
                    </div>
                    <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-between gap-6">
                      <p className="text-dark/70 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs uppercase tracking-[0.15em] text-dark/50">
                              — {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-xs uppercase tracking-[0.2em] text-dark group-hover:text-gold-dark transition-colors whitespace-nowrap">
                          Visit ↗
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* More coming */}
          <div className="mt-32 text-center">
            <p className="font-display italic text-2xl md:text-3xl text-dark/50">
              More on the way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-cream py-32 lg:py-48 relative overflow-hidden grain">
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
          <h2 className="font-display display-tight text-5xl md:text-7xl lg:text-[9rem] font-light leading-[0.95]">
            Want to be
            <br />
            <span className="italic text-gold">featured here?</span>
          </h2>
          <div className="mt-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 bg-gold text-dark px-8 py-5 hover:bg-cream transition-colors"
            >
              <span className="text-sm uppercase tracking-[0.2em]">Start a project</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
