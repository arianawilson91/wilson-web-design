import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Wilson Web Design",
  description:
    "Learn about Wilson Web Design — our story, our values, and why we're passionate about building exceptional websites.",
};

const values = [
  {
    title: "Quality Over Quantity",
    description:
      "We take on a limited number of projects at a time so we can give each client our full attention and deliver outstanding results.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    title: "Transparent Communication",
    description:
      "No jargon, no hidden fees. We keep you informed every step of the way and make sure you understand exactly what you're getting.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    title: "Results-Driven Design",
    description:
      "A great-looking website is just the beginning. We design with your business goals in mind — more leads, more sales, more growth.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Long-Term Partnership",
    description:
      "We're not just here for the launch. We build lasting relationships with our clients and provide ongoing support as your business grows.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest">
              About Us
            </p>
            <h1 className="mt-3 text-5xl font-bold text-white">
              The Team Behind Your Next Website
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              We&apos;re passionate about creating beautiful, functional websites
              that help businesses thrive in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest">
                Our Story
              </p>
              <h2 className="mt-3 text-4xl font-bold text-dark">
                From Passion to Profession
              </h2>
              <p className="mt-6 text-gray leading-relaxed">
                Wilson Web Design was founded with a simple belief: every
                business deserves a website that truly represents who they are.
                Too many companies settle for generic templates that fail to
                capture their unique identity.
              </p>
              <p className="mt-4 text-gray leading-relaxed">
                We started this journey to change that. By combining creative
                design with modern development practices, we build websites that
                not only look stunning but also perform exceptionally — helping
                our clients attract more customers and grow their businesses.
              </p>
              <p className="mt-4 text-gray leading-relaxed">
                We believe in quality over quantity, taking on a select number
                of projects at a time so we can give each client the attention
                they deserve.
              </p>
            </div>
            <div className="bg-dark rounded-2xl p-12">
              <blockquote className="text-white/90 text-lg italic leading-relaxed">
                &ldquo;We believe that great design isn&apos;t just about
                aesthetics — it&apos;s about creating an experience that drives
                real business results.&rdquo;
              </blockquote>
              <div className="mt-6">
                <p className="text-gold font-semibold">Wilson Web Design</p>
                <p className="text-white/50 text-sm">Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-lighter">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest">
              Our Values
            </p>
            <h2 className="mt-3 text-4xl font-bold text-dark">
              What We Stand For
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="flex gap-5">
                <div className="text-gold flex-shrink-0">{value.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-dark">{value.title}</h3>
                  <p className="mt-2 text-gray text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white">
            Let&apos;s Work <span className="text-gold">Together</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            We&apos;d love to learn about your project and see how we can help.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-md bg-gold px-8 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-light"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
