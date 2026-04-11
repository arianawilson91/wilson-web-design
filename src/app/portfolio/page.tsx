import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio | Wilson Web Design",
  description:
    "Browse our portfolio of custom web design projects. See how we've helped businesses establish a powerful online presence.",
};

const projects = [
  {
    title: "Pud's Pit BBQ",
    category: "Restaurant / Food Truck",
    description:
      "A bold, modern website for a veteran and family-owned BBQ food truck in Southwest Florida. Features include an interactive menu, catering request form, location schedule, and photo gallery showcasing their smoked meats.",
    tags: ["Custom Design", "Catering Form", "Mobile-First", "Brand-Driven"],
    url: "https://pudspit.com",
    image: "/images/portfolio/pudspit.png",
  },
  {
    title: "Lisa Wilson Design",
    category: "Interior Design",
    description:
      "An elegant, luxury website for a kitchen design and remodeling business serving Southwest Florida. Showcases a stunning portfolio of custom kitchens, bathrooms, and cabinetry with a clean, sophisticated aesthetic.",
    tags: ["Portfolio Showcase", "Luxury Design", "Responsive", "SEO Optimized"],
    url: "https://lisawilsondesign.com",
    image: "/images/portfolio/lisawilsondesign.png",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest">
              Our Work
            </p>
            <h1 className="mt-3 text-5xl font-bold text-white">
              Projects We&apos;re Proud Of
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Take a look at some of the websites we&apos;ve designed and
              developed for real clients across different industries.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-xl border border-gray-200 overflow-hidden transition-all hover:shadow-xl hover:border-gold/50 hover:-translate-y-1"
              >
                {/* Website screenshot */}
                <div className="relative h-64 overflow-hidden bg-gray-light">
                  <Image
                    src={project.image}
                    alt={`${project.title} website screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/70 transition-all flex items-center justify-center">
                    <span className="text-gold font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      Visit Site &rarr;
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-dark group-hover:text-gold transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-gray text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-light text-dark-lighter rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* More projects coming */}
          <div className="mt-16 text-center">
            <p className="text-gray text-sm">
              More projects on the way — check back soon.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white">
            Want Your Business <span className="text-gold">Featured Here</span>?
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Let&apos;s create a website that you&apos;ll be proud to show off.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-light"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
