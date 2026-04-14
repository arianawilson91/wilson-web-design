"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";

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

const testimonials = [
  {
    quote:
      "Wilson Web Design completely transformed our online presence. The website they built for us looks incredible and has brought in so many new customers. Couldn't be happier!",
    name: "Michael R.",
    business: "Pud's Pit BBQ",
    stars: 5,
  },
  {
    quote:
      "From start to finish, the process was smooth and professional. They understood my vision perfectly and delivered a site that truly represents my brand.",
    name: "Lisa W.",
    business: "Lisa Wilson Design",
    stars: 5,
  },
  {
    quote:
      "Fast turnaround, beautiful design, and incredibly easy to work with. My website looks better than competitors who paid 3x more. Highly recommend!",
    name: "Sarah T.",
    business: "Local Business Owner",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-dark min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,76,0.15),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
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
                  className="rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-dark transition-all hover:bg-gold-light hover:scale-105"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/portfolio"
                  className="rounded-md border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold hover:scale-105"
                >
                  View Our Work
                </Link>
              </div>
            </AnimatedSection>

            {/* Browser Mockup */}
            <AnimatedSection delay={0.3} className="hidden lg:block">
              <div className="relative">
                <div className="rounded-xl border border-white/10 bg-dark-lighter overflow-hidden shadow-2xl shadow-gold/5">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-dark-light border-b border-white/10">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex-1 ml-3">
                      <div className="bg-dark/50 rounded-md px-3 py-1 text-xs text-white/40 max-w-xs">
                        pudspit.com
                      </div>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <Image
                    src="/images/portfolio/pudspit.png"
                    alt="Pud's Pit BBQ website by Wilson Web Design"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-gold text-dark rounded-lg px-4 py-2 text-sm font-bold shadow-lg">
                  Latest Project
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
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
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.15}>
                <div className="group rounded-xl border border-gray-200 p-8 transition-all hover:border-gold/50 hover:shadow-lg hover:-translate-y-1 h-full">
                  <div className="text-gold">{service.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold text-dark">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              href="/services"
              className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors"
            >
              View All Services &rarr;
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-gray-lighter">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest">
              Our Work
            </p>
            <h2 className="mt-3 text-4xl font-bold text-dark">
              Featured Projects
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Pud's Pit BBQ",
                category: "Restaurant",
                image: "/images/portfolio/pudspit.png",
                url: "/portfolio",
              },
              {
                title: "Lisa Wilson Design",
                category: "Interior Design",
                image: "/images/portfolio/lisawilsondesign.png",
                url: "/portfolio",
              },
            ].map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.2}>
                <Link
                  href={project.url}
                  className="group block rounded-xl border border-gray-200 overflow-hidden transition-all hover:shadow-xl hover:border-gold/30 hover:-translate-y-1 bg-white"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-dark group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gold text-sm font-medium">
                      View Project &rarr;
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="rounded-md border border-dark px-8 py-3.5 text-sm font-semibold text-dark transition-all hover:bg-dark hover:text-white"
            >
              See All Projects
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest">
              Testimonials
            </p>
            <h2 className="mt-3 text-4xl font-bold text-dark">
              What Our Clients Say
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <AnimatedSection key={testimonial.name} delay={i * 0.15}>
                <div className="rounded-xl border border-gray-200 p-8 h-full flex flex-col">
                  {/* Gold quote icon */}
                  <svg className="h-8 w-8 text-gold/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray text-sm leading-relaxed flex-1">
                    {testimonial.quote}
                  </p>
                  {/* Stars */}
                  <div className="flex gap-1 mt-4">
                    {Array.from({ length: testimonial.stars }).map((_, j) => (
                      <svg
                        key={j}
                        className="h-4 w-4 text-gold"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-3">
                    <p className="text-dark font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-gray text-xs">{testimonial.business}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimatedSection delay={0}>
              <div className="text-5xl font-bold text-gold">
                <AnimatedCounter target={100} suffix="%" />
              </div>
              <p className="mt-2 text-white/60 text-sm">Client Satisfaction</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="text-5xl font-bold text-white">
                <AnimatedCounter target={2} suffix="+" />
              </div>
              <p className="mt-2 text-white/60 text-sm">Projects Delivered</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="text-5xl font-bold text-white">
                <AnimatedCounter target={24} suffix="hr" />
              </div>
              <p className="mt-2 text-white/60 text-sm">Response Time</p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="text-5xl font-bold text-white">
                <AnimatedCounter target={100} suffix="%" />
              </div>
              <p className="mt-2 text-white/60 text-sm">Custom Built</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-lighter">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
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
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-xl border border-white/10 bg-dark overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-dark-light border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex-1 ml-3">
                    <div className="bg-dark/50 rounded-md px-3 py-1 text-xs text-white/40 max-w-xs">
                      lisawilsondesign.com
                    </div>
                  </div>
                </div>
                <Image
                  src="/images/portfolio/lisawilsondesign.png"
                  alt="Lisa Wilson Design website by Wilson Web Design"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white">
              Ready to Build Something <span className="text-gold">Amazing</span>?
            </h2>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              Let&apos;s discuss your project and create a website that truly
              represents your business.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-dark transition-all hover:bg-gold-light hover:scale-105"
            >
              Get Your Free Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
