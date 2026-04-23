import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Wilson Web Design",
  description:
    "Custom web design, responsive development, e-commerce solutions, and more. Explore our full range of web services.",
};

const services = [
  {
    index: "01",
    title: "Custom Website Design",
    description:
      "Every business is unique, and your website should be too. We create bespoke designs from scratch that capture your brand and resonate with your audience. No templates, no shortcuts.",
    features: ["Brand-aligned visuals", "UX planning", "Prototyping", "Unlimited revisions"],
  },
  {
    index: "02",
    title: "Responsive Development",
    description:
      "Fast, modern websites built with the latest technologies. Every site we develop is fully responsive — flawless on phones, tablets, and desktops. Clean code, optimal performance.",
    features: ["Mobile-first", "Cross-browser", "Performance tuned", "Maintainable"],
  },
  {
    index: "03",
    title: "E-Commerce",
    description:
      "Sell online with a beautiful, secure storefront. We build e-commerce experiences that make buying easy — with seamless payment integration and inventory management.",
    features: ["Payment processing", "Catalog management", "Cart & checkout", "Order tracking"],
  },
  {
    index: "04",
    title: "Website Redesign",
    description:
      "Give your outdated site a complete makeover with modern design, improved performance, and better user experience — while preserving what already works.",
    features: ["Visual overhaul", "Speed improvements", "Better UX", "SEO migration"],
  },
  {
    index: "05",
    title: "SEO & Performance",
    description:
      "A beautiful website means nothing if no one can find it. We optimize every site for search engines and performance, helping you rank higher and load faster.",
    features: ["On-page SEO", "Core Web Vitals", "Asset optimization", "Analytics setup"],
  },
  {
    index: "06",
    title: "Maintenance & Support",
    description:
      "Your website needs ongoing care. We offer maintenance plans to keep your site updated, secure, and running smoothly so you can focus on your business.",
    features: ["Updates & backups", "Security monitoring", "Content updates", "Priority support"],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-48 pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-dark/50 mb-12">
            § Services / Overview
          </p>
          <h1 className="font-display display-tight text-6xl md:text-8xl lg:text-[10rem] font-light text-dark leading-[0.95]">
            What we
            <br />
            <span className="italic text-gold-dark">make.</span>
          </h1>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-12">
            <p className="md:col-span-6 md:col-start-7 text-dark/70 text-lg leading-relaxed">
              From design to development to ongoing support, we provide
              end-to-end web solutions, tailored to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services List — editorial numbered list */}
      <section className="bg-cream pb-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="border-t border-dark/10">
            {services.map((s) => (
              <div
                key={s.index}
                className="group border-b border-dark/10 py-10 md:py-16 grid grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <div className="col-span-2 md:col-span-1 font-display italic text-2xl md:text-3xl text-gold-dark">
                  {s.index}
                </div>
                <div className="col-span-10 md:col-span-5">
                  <h3 className="font-display text-3xl md:text-5xl font-light text-dark group-hover:italic transition-all duration-500">
                    {s.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6 space-y-6">
                  <p className="text-dark/70 leading-relaxed">{s.description}</p>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="text-xs uppercase tracking-[0.15em] text-dark/50 flex items-center gap-2"
                      >
                        <span className="text-gold-dark">—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-dark text-cream py-32 lg:py-48 relative overflow-hidden grain">
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-cream/50 mb-12">
            § How We Work
          </p>
          <h2 className="font-display display-tight text-5xl md:text-7xl lg:text-[8rem] font-light leading-[0.95]">
            A considered
            <br />
            <span className="italic text-gold">process.</span>
          </h2>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-t border-cream/10 pt-12">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your business, goals, and audience." },
              { step: "02", title: "Design", desc: "We create mockups and prototypes for your approval." },
              { step: "03", title: "Develop", desc: "We build your site with clean code and modern tech." },
              { step: "04", title: "Launch", desc: "We deploy, test, and launch your site." },
            ].map((item) => (
              <div key={item.step}>
                <div className="font-display italic text-gold text-3xl mb-6">{item.step}</div>
                <h3 className="text-lg uppercase tracking-[0.15em] text-cream mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-cream/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-32 lg:py-48">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <h2 className="font-display display-tight text-5xl md:text-7xl lg:text-[9rem] font-light text-dark leading-[0.95]">
            Ready to
            <br />
            <span className="italic text-gold-dark">begin?</span>
          </h2>
          <div className="mt-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 bg-dark text-cream px-8 py-5 hover:bg-gold hover:text-dark transition-colors"
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
