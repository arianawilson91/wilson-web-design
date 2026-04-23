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
      <section className="bg-cream pt-48 pb-16">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-dark/50 mb-12">
            § Contact / Let&apos;s Talk
          </p>
          <h1 className="font-display display-tight text-6xl md:text-8xl lg:text-[10rem] font-light text-dark leading-[0.95]">
            Start a
            <br />
            <span className="italic text-gold-dark">project.</span>
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-cream pb-32">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
          <div className="border-t border-dark/10 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Intro */}
            <div className="lg:col-span-4 space-y-10">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-dark/50 mb-4">
                  — Direct
                </p>
                <a
                  href="mailto:wilsonwebdesignfl@gmail.com"
                  className="font-display text-2xl md:text-3xl text-dark hover:text-gold-dark hover:italic transition-all block leading-tight"
                >
                  wilsonwebdesignfl
                  <br />
                  @gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-dark/50 mb-4">
                  — Response time
                </p>
                <p className="text-dark/80">Within 24 hours</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-dark/50 mb-4">
                  — Location
                </p>
                <p className="text-dark/80">Southwest Florida</p>
                <p className="text-dark/50 text-sm mt-1">Working with clients worldwide.</p>
              </div>

              <div className="pt-8 border-t border-dark/10">
                <p className="text-xs uppercase tracking-[0.3em] text-dark/50 mb-4">
                  — Follow
                </p>
                <ul className="space-y-2">
                  {["Instagram", "LinkedIn", "Facebook"].map((s) => (
                    <li key={s}>
                      <a
                        href="#"
                        className="text-sm uppercase tracking-[0.15em] text-dark/80 hover:text-gold-dark transition-colors inline-flex items-center gap-2 group"
                      >
                        {s}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-xs uppercase tracking-[0.3em] text-dark/50 mb-10">
                — Or, send a note
              </p>

              <form className="space-y-10">
                {/* Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-xs uppercase tracking-[0.2em] text-dark/60 mb-3"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full bg-transparent border-b border-dark/20 pb-3 text-dark placeholder-dark/30 focus:border-gold-dark outline-none transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-xs uppercase tracking-[0.2em] text-dark/60 mb-3"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full bg-transparent border-b border-dark/20 pb-3 text-dark placeholder-dark/30 focus:border-gold-dark outline-none transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-[0.2em] text-dark/60 mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-dark/20 pb-3 text-dark placeholder-dark/30 focus:border-gold-dark outline-none transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                {/* Service + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs uppercase tracking-[0.2em] text-dark/60 mb-3"
                    >
                      Project Type
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-transparent border-b border-dark/20 pb-3 text-dark focus:border-gold-dark outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select —</option>
                      <option value="custom-design">Custom Website Design</option>
                      <option value="web-development">Web Development</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="redesign">Website Redesign</option>
                      <option value="seo">SEO & Performance</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs uppercase tracking-[0.2em] text-dark/60 mb-3"
                    >
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full bg-transparent border-b border-dark/20 pb-3 text-dark focus:border-gold-dark outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select —</option>
                      <option value="1k-3k">$1,000 – $3,000</option>
                      <option value="3k-5k">$3,000 – $5,000</option>
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="10k+">$10,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.2em] text-dark/60 mb-3"
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full bg-transparent border-b border-dark/20 pb-3 text-dark placeholder-dark/30 focus:border-gold-dark outline-none transition-colors resize-none"
                    placeholder="Goals, timeline, details..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 bg-dark text-cream px-8 py-5 hover:bg-gold hover:text-dark transition-colors"
                >
                  <span className="text-sm uppercase tracking-[0.2em]">Send Message</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
