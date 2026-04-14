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
                      href="mailto:wilsonwebdesignfl@gmail.com"
                      className="text-white/80 text-sm hover:text-gold transition-colors"
                    >
                      wilsonwebdesignfl@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-white/80 text-sm">Southwest Florida</p>
                  </div>
                  <div>
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider">
                      Response Time
                    </p>
                    <p className="text-white/80 text-sm">Within 24 hours</p>
                  </div>
                  <div>
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">
                      Follow Us
                    </p>
                    <div className="flex gap-3">
                      {[
                        { name: "Instagram", icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" },
                        { name: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                      ].map((social) => (
                        <a
                          key={social.name}
                          href="#"
                          className="text-white/40 hover:text-gold transition-colors"
                          aria-label={social.name}
                        >
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d={social.icon} />
                          </svg>
                        </a>
                      ))}
                    </div>
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
