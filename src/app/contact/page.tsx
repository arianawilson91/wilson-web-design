import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Wilson Web Design",
  description:
    "Get in touch with Wilson Web Design. Request a free quote for your web design project.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-widest">
              Contact Us
            </p>
            <h1 className="mt-3 text-5xl font-bold text-white">
              Let&apos;s Start a Conversation
            </h1>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Have a project in mind? Fill out the form below and we&apos;ll get
              back to you within 24 hours with a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-dark"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-dark placeholder-gray focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-dark"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-dark placeholder-gray focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-dark placeholder-gray focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-dark"
                  >
                    What service are you interested in?
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-dark focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-design">Custom Website Design</option>
                    <option value="web-development">Web Development</option>
                    <option value="ecommerce">E-Commerce Solution</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="seo">SEO & Performance</option>
                    <option value="maintenance">Maintenance & Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-dark"
                  >
                    Estimated Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-dark focus:border-gold focus:ring-1 focus:ring-gold outline-none transition"
                  >
                    <option value="">Select a range</option>
                    <option value="1k-3k">$1,000 - $3,000</option>
                    <option value="3k-5k">$3,000 - $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-dark placeholder-gray focus:border-gold focus:ring-1 focus:ring-gold outline-none transition resize-none"
                    placeholder="Describe your project, goals, timeline, and any other relevant details..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-dark transition-colors hover:bg-gold-light"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <div className="rounded-xl bg-gray-lighter p-8">
                <h3 className="text-lg font-bold text-dark">
                  Why Work With Us?
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Free initial consultation",
                    "Custom designs — no templates",
                    "Transparent pricing",
                    "Fast turnaround times",
                    "Ongoing support included",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <svg
                        className="h-4 w-4 text-gold flex-shrink-0"
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

              <div className="rounded-xl bg-dark p-8">
                <h3 className="text-lg font-bold text-white">Get in Touch</h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                      Email
                    </p>
                    <a
                      href="mailto:hello@wilsonwebdesignfl.com"
                      className="text-white/80 text-sm hover:text-gold transition-colors"
                    >
                      hello@wilsonwebdesignfl.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                      Response Time
                    </p>
                    <p className="text-white/80 text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
