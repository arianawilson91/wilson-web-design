import Link from "next/link";

const services = [
  {
    title: "Custom Web Design",
    description:
      "Unique, hand-crafted designs tailored to your brand identity and business goals.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Responsive Development",
    description:
      "Pixel-perfect websites that look stunning on every device, from mobile to desktop.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Performance & SEO",
    description:
      "Lightning-fast load times and search engine optimization to help you rank higher.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-dark min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.15),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 relative">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.25em] mb-6">
              Wilson Web Design
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              We Build Websites That{" "}
              <span className="text-gold">Elevate</span> Your Brand
            </h1>
            <p className="mt-6 text-lg text-white/60 max-w-xl leading-relaxed">
              Premium web design and development for businesses that demand
              excellence. From concept to launch, we create digital experiences
              that convert visitors into customers.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-light"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="rounded-md border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest">
              What We Do
            </p>
            <h2 className="mt-3 text-4xl font-bold text-dark">
              Our Services
            </h2>
            <p className="mt-4 text-gray leading-relaxed">
              We offer a full range of web design and development services to
              bring your vision to life.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-gray-200 p-8 transition-all hover:border-gold/50 hover:shadow-lg"
              >
                <div className="text-gold">{service.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors"
            >
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-lighter">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest">
                Why Wilson Web Design
              </p>
              <h2 className="mt-3 text-4xl font-bold text-dark">
                Built for Results, Designed to Impress
              </h2>
              <p className="mt-4 text-gray leading-relaxed">
                We don&apos;t just build websites — we create digital experiences
                that help your business grow. Every project is crafted with
                attention to detail, performance, and user experience in mind.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Modern, clean designs that reflect your brand",
                  "Mobile-first, responsive on all devices",
                  "Fast load times and SEO optimized",
                  "Ongoing support and maintenance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-gold mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <span className="text-dark-lighter">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark rounded-2xl p-12 text-center">
              <div className="text-6xl font-bold text-gold">100%</div>
              <p className="mt-2 text-white/80 text-lg">Client Satisfaction</p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white">2+</div>
                  <p className="mt-1 text-white/60 text-sm">Projects Delivered</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <p className="mt-1 text-white/60 text-sm">Custom Built</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready to Build Something <span className="text-gold">Amazing</span>?
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Let&apos;s discuss your project and create a website that truly
            represents your business.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-light"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
