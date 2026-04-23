import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journal | Wilson Web Design",
  description:
    "Thoughts and notes on web design, craft, and running a small studio.",
};

const posts = [
  {
    slug: "why-your-business-needs-a-custom-website",
    title: "Why your business needs a custom website",
    excerpt:
      "Template websites might be cheap, but they're costing you customers. Why investing in a custom website pays off in the long run.",
    category: "Craft",
    date: "April 10, 2026",
    readTime: "5 min",
    index: "01",
  },
  {
    slug: "5-web-design-trends",
    title: "Five web design trends worth paying attention to",
    excerpt:
      "From bold typography to dark mode designs, the trends shaping the web in 2026 — and how to use them without looking like everyone else.",
    category: "Trends",
    date: "April 5, 2026",
    readTime: "4 min",
    index: "02",
  },
  {
    slug: "how-to-choose-a-web-designer",
    title: "How to choose the right web designer",
    excerpt:
      "Not all web designers are created equal. What to look for — and what red flags to watch out for — when hiring someone to build your site.",
    category: "Notes",
    date: "March 28, 2026",
    readTime: "6 min",
    index: "03",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream pt-48 pb-24">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-dark/50 mb-12">
            § Journal / Writing
          </p>
          <h1 className="font-display display-tight text-6xl md:text-8xl lg:text-[10rem] font-light text-dark leading-[0.95]">
            Notes on
            <br />
            <span className="italic text-gold-dark">the craft.</span>
          </h1>
        </div>
      </section>

      {/* Blog posts — editorial list */}
      <section className="bg-cream pb-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="border-t border-dark/10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border-b border-dark/10 py-10 md:py-16"
              >
                <div className="grid grid-cols-12 gap-4 md:gap-8 items-baseline">
                  <div className="col-span-2 md:col-span-1 font-display italic text-2xl md:text-3xl text-gold-dark">
                    {post.index}
                  </div>
                  <div className="col-span-10 md:col-span-1 md:col-start-2 flex md:flex-col gap-4 md:gap-2 text-xs uppercase tracking-[0.2em] text-dark/50">
                    <span>{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="col-span-12 md:col-span-7 md:col-start-4">
                    <h2 className="font-display text-3xl md:text-5xl font-light text-dark group-hover:italic transition-all duration-500 leading-tight">
                      {post.title}
                    </h2>
                    <p className="mt-4 text-dark/70 leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-2 md:col-start-11 flex md:justify-end items-baseline">
                    <span className="text-xs uppercase tracking-[0.2em] text-dark/50 group-hover:text-gold-dark transition-colors">
                      Read ↗
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="font-display italic text-2xl md:text-3xl text-dark/50">
              More coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark text-cream py-32 lg:py-48 relative overflow-hidden grain">
        <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
          <h2 className="font-display display-tight text-5xl md:text-7xl lg:text-[9rem] font-light leading-[0.95]">
            Enough reading —
            <br />
            <span className="italic text-gold">let&apos;s build.</span>
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
