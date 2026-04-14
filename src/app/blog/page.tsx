import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Wilson Web Design",
  description:
    "Web design tips, trends, and insights from Wilson Web Design. Learn how to improve your online presence.",
};

const posts = [
  {
    slug: "why-your-business-needs-a-custom-website",
    title: "Why Your Business Needs a Custom Website in 2026",
    excerpt:
      "Template websites might be cheap, but they're costing you customers. Here's why investing in a custom website pays off in the long run.",
    category: "Web Design",
    date: "April 10, 2026",
    readTime: "5 min read",
  },
  {
    slug: "5-web-design-trends",
    title: "5 Web Design Trends That Are Dominating Right Now",
    excerpt:
      "From bold typography to dark mode designs, here are the trends that are shaping the web in 2026 and how you can use them for your business.",
    category: "Trends",
    date: "April 5, 2026",
    readTime: "4 min read",
  },
  {
    slug: "how-to-choose-a-web-designer",
    title: "How to Choose the Right Web Designer for Your Business",
    excerpt:
      "Not all web designers are created equal. Here's what to look for — and what red flags to watch out for — when hiring someone to build your site.",
    category: "Tips",
    date: "March 28, 2026",
    readTime: "6 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Web Design": "bg-gold/10 text-gold",
  Trends: "bg-blue-500/10 text-blue-500",
  Tips: "bg-emerald-500/10 text-emerald-500",
};

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest">
              Blog
            </p>
            <h1 className="mt-3 text-5xl font-bold text-white">
              Insights & Tips
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Web design tips, trends, and insights to help your business
              succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-xl border border-gray-200 overflow-hidden transition-all hover:shadow-lg hover:border-gold/30 hover:-translate-y-1"
              >
                {/* Placeholder image */}
                <div className="h-48 bg-gradient-to-br from-dark to-dark-lighter flex items-center justify-center">
                  <svg
                    className="h-12 w-12 text-gold/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-semibold rounded-full px-3 py-1 ${
                        categoryColors[post.category] || "bg-gray-light text-gray"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray">{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-dark group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-gray text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-gray">{post.date}</span>
                    <span className="text-gold text-sm font-medium group-hover:underline">
                      Read More &rarr;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray text-sm">
              More articles coming soon — check back regularly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white">
            Need a Website That <span className="text-gold">Works</span>?
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">
            Stop reading about great web design — let us build one for you.
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
