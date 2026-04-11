import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Wilson Web Design",
  description:
    "Custom web design, responsive development, e-commerce solutions, and more. Explore our full range of web services.",
};

const services = [
  {
    title: "Custom Website Design",
    description:
      "Every business is unique, and your website should be too. We create bespoke designs from scratch that capture your brand's personality and resonate with your target audience. No templates, no shortcuts — just thoughtful, original design.",
    features: [
      "Brand-aligned visual design",
      "User experience (UX) planning",
      "Wireframing and prototyping",
      "Unlimited design revisions",
    ],
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Responsive Web Development",
    description:
      "We build fast, modern websites using the latest technologies. Every site we develop is fully responsive, ensuring a flawless experience on phones, tablets, and desktops. Clean code, optimal performance.",
    features: [
      "Mobile-first development",
      "Cross-browser compatibility",
      "Performance optimization",
      "Clean, maintainable code",
    ],
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Sell your products online with a beautiful, secure storefront. We build e-commerce experiences that make buying easy and enjoyable for your customers, with seamless payment integration and inventory management.",
    features: [
      "Secure payment processing",
      "Product catalog management",
      "Shopping cart & checkout",
      "Order tracking & analytics",
    ],
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Website Redesign",
    description:
      "Is your current website outdated or underperforming? We'll give it a complete makeover with modern design, improved performance, and better user experience — while preserving what already works.",
    features: [
      "Full visual overhaul",
      "Improved site speed",
      "Better user experience",
      "SEO migration support",
    ],
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: "SEO & Performance",
    description:
      "A beautiful website means nothing if no one can find it. We optimize every site for search engines and performance, helping you rank higher and load faster to capture more leads.",
    features: [
      "On-page SEO optimization",
      "Core Web Vitals tuning",
      "Image & asset optimization",
      "Analytics setup & monitoring",
    ],
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Support",
    description:
      "Your website needs ongoing care. We offer maintenance plans to keep your site updated, secure, and running smoothly so you can focus on your business.",
    features: [
      "Regular updates & backups",
      "Security monitoring",
      "Content updates",
      "Priority support",
    ],
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.049.58.025 1.194-.14 1.743" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest">
              Our Services
            </p>
            <h1 className="mt-3 text-5xl font-bold text-white">
              Everything You Need to Succeed Online
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              From design to development to ongoing support, we provide
              end-to-end web solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-gray-200 p-8 transition-all hover:border-gold/50 hover:shadow-lg"
              >
                <div className="text-gold">{service.icon}</div>
                <h3 className="mt-5 text-xl font-bold text-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-gray text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <svg
                        className="h-4 w-4 text-gold flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-dark-lighter">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-lighter">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest">
              Our Process
            </p>
            <h2 className="mt-3 text-4xl font-bold text-dark">
              How We Work
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We learn about your business, goals, and target audience." },
              { step: "02", title: "Design", desc: "We create mockups and prototypes for your approval." },
              { step: "03", title: "Develop", desc: "We build your site with clean code and modern tech." },
              { step: "04", title: "Launch", desc: "We deploy, test, and launch your site to the world." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-gold/30">{item.step}</div>
                <h3 className="mt-4 text-lg font-bold text-dark">{item.title}</h3>
                <p className="mt-2 text-gray text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white">
            Let&apos;s Build Your <span className="text-gold">Dream Website</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Ready to get started? Reach out for a free consultation and quote.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-light"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
