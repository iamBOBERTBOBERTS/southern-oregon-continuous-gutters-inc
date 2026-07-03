import { Button } from "@/components/Button";
import { RevealText } from "@/components/RevealText";
import { SectionLabel } from "@/components/SectionLabel";
import { siteData } from "@/lib/site-data";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="absolute inset-0 rain-lines opacity-20" aria-hidden="true" />
        <div className="section-shell relative z-10">
          <header className="flex flex-col gap-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <a href="#" className="max-w-72">
              <span className="block text-sm font-bold uppercase tracking-[0.18em] text-zinc-50">
                Southern Oregon
              </span>
              <span className="block text-xs font-bold uppercase tracking-[0.18em] text-rain">
                Continuous Gutters Inc.
              </span>
            </a>
            <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-3">
              <Button href="#services" variant="ghost">
                Services
              </Button>
              <Button href="#quote" variant="secondary">
                {siteData.ctas.secondary}
              </Button>
              <Button href={siteData.phoneHref}>{siteData.ctas.phoneShort}</Button>
            </nav>
          </header>

          <div className="grid min-h-[calc(100svh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.92fr]">
            <div>
              <SectionLabel>Seamless gutters for {siteData.serviceArea}</SectionLabel>
              <RevealText
                as="h1"
                className="cinematic-type mt-6 max-w-5xl text-5xl font-bold leading-[0.92] text-zinc-50 sm:text-7xl lg:text-8xl"
              >
                Continuous gutters that manage the storm.
              </RevealText>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
                {siteData.businessName} installs seamless gutter systems, replacement gutters, gutter protection,
                downspouts, and exterior water management solutions for Southern Oregon homeowners and property owners.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href={siteData.phoneHref}>{siteData.ctas.primary}</Button>
                <Button href="#quote" variant="secondary">
                  {siteData.ctas.secondary}
                </Button>
              </div>
            </div>

            <aside className="surface-panel rounded-lg p-6 sm:p-8">
              <SectionLabel>Owner operated</SectionLabel>
              <h2 className="mt-5 text-3xl font-semibold text-zinc-50">{siteData.ownerName}</h2>
              <p className="mt-4 leading-7 text-zinc-300">
                Clear contact information stays visible from the first screen. Future cinematic or WebGL layers should
                enhance this foundation without hiding the phone number, services, or quote path.
              </p>
              <dl className="mt-8 grid gap-4 text-sm">
                <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                  <dt className="font-bold uppercase tracking-[0.16em] text-zinc-500">Phone</dt>
                  <dd className="mt-1 text-lg font-semibold text-amber">
                    <a href={siteData.phoneHref}>{siteData.phoneNumber}</a>
                  </dd>
                </div>
                <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                  <dt className="font-bold uppercase tracking-[0.16em] text-zinc-500">Service Area</dt>
                  <dd className="mt-1 text-lg font-semibold text-zinc-100">{siteData.serviceArea}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="section-shell">
          <SectionLabel>Core services</SectionLabel>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {siteData.services.map((service) => (
              <article className="surface-panel rounded-lg p-6" key={service}>
                <h3 className="text-xl font-semibold text-zinc-50">{service}</h3>
                <p className="mt-4 leading-7 text-zinc-300">
                  Built as a clear foundation section now, ready for project photos, refined copy, and future cinematic
                  enhancement after the base site is stable.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="border-t border-white/10 bg-charcoal px-4 py-20 sm:px-6 lg:px-8">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel>Quote requests</SectionLabel>
            <h2 className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-5xl">
              Start with a call.
            </h2>
          </div>
          <div className="surface-panel rounded-lg p-6 sm:p-8">
            <p className="leading-8 text-zinc-300">
              For gutter installation, gutter replacement, gutter protection, downspouts, or drainage concerns, contact
              {` ${siteData.ownerName}`} directly.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={siteData.phoneHref}>{siteData.ctas.primary}</Button>
              <Button href={`mailto:?subject=Quote request for ${encodeURIComponent(siteData.businessName)}`} variant="secondary">
                Email Quote Details
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
