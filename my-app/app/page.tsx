export async function generateMetadata() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/configurations/seo-configs/?page_name=home`,
    { next: { revalidate: 14400 } },
  );

  const data = await res.json();
  const seo = data.results?.[0];

  return {
    title: seo?.meta_title_template || "Home",
    description: seo?.meta_description_template || "Homepage",
    keywords: seo?.meta_keywords,

    robots: {
      index: seo.robots_meta?.includes("index") ?? true,
      follow: seo.robots_meta?.includes("follow") ?? true,
    },
    openGraph: {
      title: seo?.og_title_template,
      description: seo?.og_description_template,
      images: seo?.og_image_url ? [seo.og_image_url] : [],
      type: seo?.og_type,
    },

    twitter: {
      card: seo?.twitter_card_type,
      site: seo?.twitter_site,
      creator: seo?.twitter_creator,
    },
  };
}
export default function HomePage() {
  const stats = [
    { label: "Projects Delivered", value: "120+" },
    { label: "Active Clients", value: "35+" },
    { label: "Uptime", value: "99.9%" },
  ];

  const features = [
    {
      title: "Fast Performance",
      description:
        "Built with a clean layout, responsive sections, and a structure that feels modern from the first scroll.",
      icon: "⚡",
    },
    {
      title: "Professional Design",
      description:
        "A dark modern landing page with strong hierarchy, clear calls to action, and polished content blocks.",
      icon: "🎯",
    },
    {
      title: "Ready for Growth",
      description:
        "Easy to connect to your backend, SEO configuration system, blog pages, and product sections later.",
      icon: "🚀",
    },
  ];

  const services = [
    "Web Development",
    "Backend Systems",
    "SEO Configuration",
    "API Integration",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.18),_transparent_30%),radial-gradient(circle_at_left,_rgba(168,85,247,0.14),_transparent_25%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <nav className="mb-16 flex items-center justify-between">
            <div className="text-xl font-bold tracking-wide">PiperNash</div>
            <div className="hidden gap-8 text-sm text-slate-300 md:flex">
              <a href="#features" className="transition hover:text-white">
                Features
              </a>
              <a href="#services" className="transition hover:text-white">
                Services
              </a>
              <a href="#about" className="transition hover:text-white">
                About
              </a>
            </div>
            <a
              href="#contact"
              className="rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-500/20"
            >
              Let&apos;s Talk
            </a>
          </nav>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                Modern Next.js Homepage
              </div>

              <h1 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Build a strong digital presence with a homepage that looks
                premium.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                A sleek and modern landing page for your brand, portfolio,
                startup, or company website. Designed to feel clean,
                trustworthy, and conversion-focused.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-blue-600 px-6 py-3 text-center font-semibold transition hover:bg-blue-500"
                >
                  Start Your Project
                </a>
                <a
                  href="#features"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Explore Features
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                  <div className="mb-6 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-slate-800 p-5">
                      <p className="text-sm text-slate-400">Hero Section</p>
                      <p className="mt-2 text-2xl font-bold">
                        Clean headline. Strong CTA. Modern feel.
                      </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-2xl bg-slate-800 p-5"
                        >
                          <p className="text-2xl font-bold text-blue-300">
                            {stat.value}
                          </p>
                          <p className="mt-1 text-sm text-slate-400">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Everything a modern homepage should communicate.
          </h2>
          <p className="mt-4 text-slate-400">
            This section helps visitors quickly understand your value, your
            quality, and why they should trust your brand.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-300">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Designed for clean presentation and future expansion.
            </h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-400">
              Whether you want a personal portfolio, business homepage, or a
              landing page for your startup, this design gives you a strong
              foundation.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-slate-200"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              About This Design
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Simple, sharp, and made to convert.
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              This homepage uses a strong hero, supportive feature cards,
              service highlights, and a clear final call to action. It is meant
              to look professional without feeling crowded.
            </p>
          </div>

          <div className="space-y-4 text-slate-300">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">Modern layout</p>
              <p className="mt-2 text-slate-400">
                Balanced spacing, strong hierarchy, and clear focus areas.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">Easy to customize</p>
              <p className="mt-2 text-slate-400">
                You can swap text, colors, images, and sections based on your
                brand.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">Ready for backend integration</p>
              <p className="mt-2 text-slate-400">
                This structure can later connect to your Django-powered SEO
                configuration system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
            Get Started
          </p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Need a homepage that actually looks professional?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Use this as your starting point, then expand it into a full business
            website, portfolio, or product landing page.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@example.com"
              className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:opacity-90"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
