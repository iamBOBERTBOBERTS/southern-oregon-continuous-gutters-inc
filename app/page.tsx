import { Button } from "@/components/Button";
import { BrandMark } from "@/components/BrandMark";
import { ScrollSceneController } from "@/components/motion/ScrollSceneController";
import { QuoteForm } from "@/components/QuoteForm";
import { siteData } from "@/lib/site-data";

const waterPath = [
  {
    label: "Roof edge",
    title: "Rain and debris collect at the roofline.",
    body: "Southern Oregon winter weather can push a lot of water and leaf debris through a small edge of the home."
  },
  {
    label: "Capture",
    title: "The gutter has to catch and carry it cleanly.",
    body: "Custom-fit seamless runs help give roof water a clearer path than aging or poorly pitched sections."
  },
  {
    label: "Carry",
    title: "Pitch and placement matter.",
    body: "The goal is practical water movement across the roofline instead of overflow at corners, entries, or siding."
  },
  {
    label: "Direct",
    title: "Downspouts finish the route.",
    body: "Downspouts should move water away from walkways, landscaping, and foundation edges where practical."
  }
];

const risks = [
  "Overflow at roof edges",
  "Wet fascia and stained siding",
  "Walkway splashback",
  "Landscape erosion",
  "Poor downspout routing",
  "Seasonal debris buildup"
];

const services = [
  {
    title: "Seamless gutter installation",
    body: "Custom-fit gutter installation for homes that need a cleaner roofline water path."
  },
  {
    title: "Continuous gutter replacement",
    body: "Replacement for aging, leaking, damaged, undersized, or poorly pitched gutter runs."
  },
  {
    title: "Gutter repair",
    body: "Practical repairs for leaks, slope problems, damaged sections, and connection points that need attention."
  },
  {
    title: "Gutter maintenance",
    body: "Maintenance-focused work for seasonal debris, loose sections, and visible problem areas."
  },
  {
    title: "Downspouts",
    body: "Downspout placement and replacement to help carry water away from entries, walkways, beds, and foundation edges."
  },
  {
    title: "Roofline water control",
    body: "Straightforward recommendations for moving roof runoff where it should go around the home."
  }
];

const process = [
  "Look over the roofline, runoff areas, slope needs, and visible drainage concerns.",
  "Measure the home for a custom fit and review downspout locations.",
  "Prepare and install the gutter system for the agreed roofline scope.",
  "Route downspouts for clean water movement where practical for the property.",
  "Review the finished work and estimate details so the next step is clear."
];

const imageSlots = [
  {
    title: "Roofline fit",
    use: "Review the roof edge, fascia, corners, and places where runoff is currently missing the gutter."
  },
  {
    title: "Gutter condition",
    use: "Look for leaks, sagging, damaged sections, loose connections, and places where replacement may make more sense than repair."
  },
  {
    title: "Downspout path",
    use: "Check how roof water leaves the system and whether the path is practical for entries, walkways, landscaping, and foundation edges."
  },
  {
    title: "Maintenance needs",
    use: "Identify debris, seasonal buildup, and visible problem areas that affect water movement."
  },
  {
    title: "Local home conditions",
    use: "Account for Medford and Southern Oregon rooflines, winter runoff, and leaf debris patterns."
  }
];

const faqs = [
  {
    question: "What are continuous gutters?",
    answer:
      "Continuous gutters are formed in long seamless runs and custom fit on site, reducing joints compared with sectional systems."
  },
  {
    question: "Do I need replacement or repair?",
    answer:
      "That depends on slope, leaks, damage, fascia condition, and how runoff is routed. A site review is the right next step."
  },
  {
    question: "Can downspouts be rerouted?",
    answer:
      "Often, downspout placement can be reviewed during the estimate so roof water has a more practical path away from the home."
  },
  {
    question: "How do estimates work?",
    answer:
      "Share the service address or city, the issue you are seeing, and the best way to reach you. The next step is a site review and estimate."
  },
  {
    question: "Do you work outside Medford?",
    answer:
      "The company serves Medford and Southern Oregon. Exact service area should be confirmed during scheduling."
  }
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteData.businessName,
  founder: siteData.ownerName,
  telephone: siteData.phoneNumber,
  url: siteData.siteUrl,
  areaServed: {
    "@type": "AdministrativeArea",
    name: siteData.serviceArea
  },
  description: siteData.description,
  serviceType: siteData.seoServices,
  foundingDate: siteData.incorporationDate,
  identifier: [
    {
      "@type": "PropertyValue",
      name: "Oregon CCB License",
      value: siteData.licenseNumber
    }
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Medford",
    addressRegion: "OR",
    addressCountry: "US"
  },
  makesOffer: siteData.seoServices.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service
    },
    areaServed: siteData.serviceArea
  }))
};

export default function Home() {
  return (
    <main className="cinematic-page pb-20 sm:pb-0">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ScrollSceneController />
      <Header />
      <Hero />
      <WaterPath />
      <RiskSection />
      <Services />
      <Process />
      <AssetSlots />
      <Faq />
      <Quote />
      <FinalCta />
      <Footer />
      <a
        data-cta
        className="mobile-call fixed inset-x-4 bottom-4 z-50 inline-flex min-h-14 items-center justify-center rounded-md bg-amber px-5 text-center text-sm font-bold uppercase tracking-[0.12em] text-ink shadow-amber sm:hidden"
        href={siteData.phoneHref}
      >
        Call {siteData.phoneNumber}
      </a>
    </main>
  );
}

function Header() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-40 px-4 py-4 sm:px-6 lg:px-8">
      <div className="section-shell flex items-center justify-between gap-4">
        <a className="brand-mark min-w-0" href="#">
          <BrandMark compact />
        </a>
        <nav aria-label="Primary navigation" className="flex items-center gap-2 sm:gap-3">
          <Button className="hidden lg:inline-flex" href="#services" variant="ghost">
            Services
          </Button>
          <Button className="hidden md:inline-flex" href={siteData.phoneHref} variant="secondary">
            Call
          </Button>
          <Button href="#quote">Quote</Button>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-cinema relative min-h-screen overflow-hidden px-4 pt-24 sm:px-6 lg:px-8">
      <StormAtmosphere />
      <div className="section-shell hero-shell relative z-10 grid min-h-[calc(100svh-6rem)] items-center gap-10 py-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="hero-copy">
          <SectionKicker>Seamless gutters for Medford and Southern Oregon</SectionKicker>
          <h1 data-reveal className="cinematic-type hero-title mt-6 max-w-5xl text-5xl font-bold leading-[0.88] text-zinc-50 sm:text-7xl lg:text-8xl">
            Seamless gutters built for Southern Oregon rooflines.
          </h1>
          <p data-reveal className="hero-lede mt-7 max-w-2xl text-xl font-semibold leading-8 text-zinc-100 sm:text-2xl sm:leading-9">
            Custom-fit continuous gutters installed to move roof water away from siding, walkways, landscaping,
            and foundation edges.
          </p>
          <div data-reveal className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={siteData.phoneHref}>{siteData.ctas.primary}</Button>
            <Button href="#quote" variant="secondary">
              {siteData.ctas.secondary}
            </Button>
          </div>
          <div data-reveal className="hero-proof-line mt-8" aria-label="Business markers">
            <span>Owner-operated</span>
            <span>Oregon CCB #{siteData.licenseNumber}</span>
            <span>{siteData.serviceArea}</span>
            <span>Local contractor since {siteData.establishedYear}</span>
          </div>
        </div>
        <div className="hero-roof-stage" aria-label="Roofline water path visual">
          <div className="roof-visual">
            <span className="roof-visual__mountain" />
            <span className="roof-visual__plane" />
            <span className="roof-visual__gutter" />
            <span className="roof-visual__flow roof-visual__flow--one" />
            <span className="roof-visual__flow roof-visual__flow--two" />
            <span className="roof-visual__drop" />
            <div className="roof-visual__caption">
              <p>Roof edge to downspout</p>
              <strong>Clear water movement starts with the fit.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StormAtmosphere() {
  return (
    <>
      <div className="storm-sky" aria-hidden="true" />
      <div className="rain-field" aria-hidden="true" />
      <div className="terrain-line" aria-hidden="true" />
    </>
  );
}

function WaterPath() {
  return (
    <section data-cinematic-journey data-scroll-scene className="water-path px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="path-intro">
          <SectionKicker>Roofline water control</SectionKicker>
          <h2 data-reveal className="cinematic-type mt-5 max-w-5xl text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            A good gutter system gives runoff a clear route away from the home.
          </h2>
        </div>
        <div className="path-stage mt-12">
          <div className="path-line" aria-hidden="true">
            <span />
          </div>
          {waterPath.map((step, index) => (
            <article data-card data-journey-panel className="path-step" key={step.title}>
              <p>{String(index + 1).padStart(2, "0")} / {step.label}</p>
              <h3>{step.title}</h3>
              <span>{step.body}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RiskSection() {
  return (
    <section data-scroll-scene className="editorial-section px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionKicker>Southern Oregon runoff problems</SectionKicker>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Winter rain, leaf debris, and poor drainage all show up at the roof edge.
          </h2>
          <p data-reveal className="mt-6 text-lg leading-8 text-zinc-300">
            Water that misses the gutter, overruns a corner, or exits in the wrong place can create repeat problems around
            fascia, siding, walkways, landscaping, and foundation edges. The right gutter and downspout plan gives that
            water a more practical path.
          </p>
        </div>
        <div className="risk-map" data-card>
          {risks.map((risk) => (
            <span key={risk}>{risk}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section data-scroll-scene id="services" className="services-section px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="section-head">
          <SectionKicker>Services</SectionKicker>
          <h2 data-reveal className="cinematic-type mt-5 max-w-5xl text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Gutter work focused on fit, repair, replacement, and clean water movement.
          </h2>
        </div>
        <div className="service-stream mt-12">
          {services.map((service, index) => (
            <article data-card className="service-row" key={service.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section data-scroll-scene className="process-section px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <SectionKicker>Estimate and install process</SectionKicker>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Look over the roofline, measure the work, and make the next step clear.
          </h2>
          <p data-reveal className="mt-6 leading-8 text-zinc-300">
            The process stays practical: understand the water issue, prepare a custom-fit gutter scope, and review how
            downspouts should move water away from the home.
          </p>
        </div>
        <ol className="process-flow">
          {process.map((step, index) => (
            <li data-card key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AssetSlots() {
  return (
    <section data-scroll-scene className="asset-section px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="asset-head">
          <SectionKicker>What the estimate looks at</SectionKicker>
          <h2 data-reveal className="cinematic-type mt-5 max-w-5xl text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Clear gutter work starts with the roofline, downspouts, and the path water takes.
          </h2>
          <p data-reveal className="mt-6 max-w-3xl leading-8 text-zinc-300">
            A practical estimate looks at where water is collected, where it is carried, and where it exits around the
            home. These are the areas to review before repair, replacement, or a new seamless gutter installation.
          </p>
        </div>
        <div className="asset-grid mt-12">
          {imageSlots.map((slot) => (
            <article data-card className="asset-frame" key={slot.title}>
              <div className="asset-frame__image">
                <span>{slot.title}</span>
              </div>
              <div className="asset-frame__copy">
                <h3>{slot.title}</h3>
                <p>{slot.use}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section data-scroll-scene className="faq-section px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionKicker>FAQ</SectionKicker>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Clear answers before the quote.
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article data-card key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section data-scroll-scene id="quote" className="quote-section px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="quote-copy">
          <SectionKicker>Request a quote</SectionKicker>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Request a straightforward gutter estimate.
          </h2>
          <p data-reveal className="mt-6 leading-8 text-zinc-300">
            Send the project details through the form or call the company line. Include what you are seeing at the
            roofline, gutters, downspouts, walkways, or landscape edges so the request is easier to review.
          </p>
          <a data-cta className="quote-phone mt-7 inline-flex" href={siteData.phoneHref}>
            {siteData.phoneNumber}
          </a>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell text-center">
        <SectionKicker>Southern Oregon Continuous Gutters Inc.</SectionKicker>
        <h2 className="cinematic-type mx-auto mt-5 max-w-4xl text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
          A cleaner path for roof water around your home.
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={siteData.phoneHref}>{siteData.ctas.primary}</Button>
          <Button href="#quote" variant="secondary">
            {siteData.ctas.secondary}
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer px-4 py-10 sm:px-6 lg:px-8">
      <div className="section-shell footer-shell flex flex-col justify-between gap-5 text-sm text-zinc-400 sm:flex-row">
        <div>
          <BrandMark className="footer-brand" />
          <p className="footer-business-line mt-4">
            Southern Oregon Continuous Gutters Inc. - Oregon CCB #{siteData.licenseNumber}
          </p>
          <p className="mt-1">Serving {siteData.locality}, {siteData.region}, and Southern Oregon.</p>
        </div>
        <a className="footer-phone font-semibold text-amber hover:text-amber/85" href={siteData.phoneHref}>
          {siteData.phoneNumber}
        </a>
      </div>
    </footer>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return <p className="section-label text-xs font-bold uppercase tracking-[0.24em] text-rain">{children}</p>;
}
