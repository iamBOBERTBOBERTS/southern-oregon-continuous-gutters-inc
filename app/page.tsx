import { Button } from "@/components/Button";
import { BrandMark } from "@/components/BrandMark";
import { ScrollSceneController } from "@/components/motion/ScrollSceneController";
import { QuoteForm } from "@/components/QuoteForm";
import { siteData } from "@/lib/site-data";

const waterPath = [
  {
    label: "Roof edge",
    title: "Rain leaves the roof fast.",
    body: "Southern Oregon storms can turn a roofline into a sheet of runoff within minutes."
  },
  {
    label: "Capture",
    title: "The system has to catch it cleanly.",
    body: "Continuous runs are formed to fit the home and reduce unnecessary joint points."
  },
  {
    label: "Carry",
    title: "Pitch and placement move water with purpose.",
    body: "The goal is a controlled path across the roofline instead of overflow at weak points."
  },
  {
    label: "Direct",
    title: "Downspouts finish the route.",
    body: "Water should be released away from entries, walkways, beds, and foundation edges where practical."
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
    title: "Continuous gutter installation",
    body: "Custom-fit continuous gutters formed for clean roofline drainage and long seamless runs."
  },
  {
    title: "Seamless gutter replacement",
    body: "Replacement for aging, leaking, damaged, undersized, or poorly pitched gutter systems."
  },
  {
    title: "Gutter repair",
    body: "Practical repairs for leaks, slope problems, damaged sections, and connection points that need attention."
  },
  {
    title: "Downspouts",
    body: "Downspout placement and replacement to help carry water away from entries, walkways, beds, and foundation edges."
  },
  {
    title: "Gutter protection",
    body: "Protection options for homes dealing with trees, debris, and seasonal buildup across Southern Oregon."
  },
  {
    title: "Exterior water management",
    body: "Roofline and runoff recommendations focused on practical water movement around the home."
  }
];

const process = [
  "Review the roofline, runoff areas, slope needs, and existing drainage concerns.",
  "Measure the home for custom-fit continuous gutter runs and downspout locations.",
  "Form continuous gutters on site for the needed profile and lengths.",
  "Install, secure, align, and connect the system with attention to water movement.",
  "Route water away from vulnerable areas where practical for the property."
];

// TODO(final-assets): Replace these intentional placeholders with approved project photography in public/images/.
const imageSlots = [
  {
    title: "Finished roofline",
    use: "Clean completed gutter line on a real Southern Oregon home",
    file: "project-roofline-profile.jpg"
  },
  {
    title: "Downspout detail",
    use: "Approved close-up showing practical water routing",
    file: "project-downspout-routing.jpg"
  },
  {
    title: "Before / after",
    use: "Matched project pair from the same angle where practical",
    file: "before-after-runoff-control.jpg"
  },
  {
    title: "Installation detail",
    use: "On-site fabrication or roofline install detail",
    file: "fabrication-continuous-gutter-forming.jpg"
  },
  {
    title: "Local project",
    use: "Approved exterior, company, vehicle, or equipment image",
    file: "owner-or-company-approved.jpg"
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
    question: "Can gutter protection be added?",
    answer:
      "Yes. Gutter protection can be discussed during the quote, especially for homes with trees or recurring debris."
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
  priceRange: "$$",
  serviceType: siteData.seoServices,
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
          <SectionKicker>Stormwater protection for Southern Oregon homes</SectionKicker>
          <h1 data-reveal className="cinematic-type hero-title mt-6 max-w-5xl text-5xl font-bold leading-[0.88] text-zinc-50 sm:text-7xl lg:text-8xl">
            Control the water before it controls the home.
          </h1>
          <p data-reveal className="hero-lede mt-7 max-w-2xl text-xl font-semibold leading-8 text-zinc-100 sm:text-2xl sm:leading-9">
            Custom-fit continuous gutters built to move Southern Oregon rain away from rooflines, walkways, landscaping,
            and foundation edges.
          </p>
          <div data-reveal className="hero-actions mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={siteData.phoneHref}>{siteData.ctas.primary}</Button>
            <Button href="#quote" variant="secondary">
              Request a Gutter Estimate
            </Button>
          </div>
          <div data-reveal className="hero-proof-line mt-8" aria-label="Business markers">
            <span>Owner-operated</span>
            <span>{siteData.serviceArea}</span>
            <span>Oregon CCB #64538</span>
          </div>
        </div>
        <div className="hero-roof-stage" aria-label="Cinematic roofline water path">
          <div className="roof-visual">
            <span className="roof-visual__mountain" />
            <span className="roof-visual__plane" />
            <span className="roof-visual__gutter" />
            <span className="roof-visual__flow roof-visual__flow--one" />
            <span className="roof-visual__flow roof-visual__flow--two" />
            <span className="roof-visual__drop" />
            <div className="roof-visual__caption">
              <p>Roof edge to downspout</p>
              <strong>Controlled runoff starts at the fit.</strong>
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
          <SectionKicker>One connected system</SectionKicker>
          <h2 data-reveal className="cinematic-type mt-5 max-w-5xl text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            The page follows the same path water should follow.
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
          <SectionKicker>Why the roofline matters</SectionKicker>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Stormwater damage does not start with drama. It starts with direction.
          </h2>
          <p data-reveal className="mt-6 text-lg leading-8 text-zinc-300">
            Water that misses the gutter, overruns a corner, or exits in the wrong place can create repeat problems
            around the exterior. The right system makes the route visible, practical, and easier to maintain.
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
            Continuous gutter work shaped around the home, not a template.
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
          <SectionKicker>Install rhythm</SectionKicker>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Measured, formed, installed, and directed.
          </h2>
          <p data-reveal className="mt-6 leading-8 text-zinc-300">
            The process stays practical: understand the water, fit the gutter, and finish the downspout path.
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
          <SectionKicker>Approved photography slots</SectionKicker>
          <h2 data-reveal className="cinematic-type mt-5 max-w-5xl text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Premium placeholders now. Real Southern Oregon work when approved.
          </h2>
          <p data-reveal className="mt-6 max-w-3xl leading-8 text-zinc-300">
            These frames are intentionally honest asset slots. They keep the experience polished without showing fake
            projects, invented before-and-after claims, or stock-looking contractor proof.
          </p>
        </div>
        <div className="asset-grid mt-12">
          {imageSlots.map((slot, index) => (
            <article data-card className="asset-frame" key={slot.file}>
              <div className="asset-frame__image">
                <span>{slot.title}</span>
              </div>
              <div className="asset-frame__copy">
                <h3>{slot.title}</h3>
                <p>{slot.use}</p>
                <small>{slot.file}</small>
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
            Protect the roofline before the next storm cycle.
          </h2>
          <p data-reveal className="mt-6 leading-8 text-zinc-300">
            Send the project details through the form or call directly. Include what you are seeing at the roofline,
            downspouts, walkways, or landscape edges so the request is easy to review.
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
          A cleaner path for the rain around your home.
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={siteData.phoneHref}>Call for a Quote</Button>
          <Button href="#quote" variant="secondary">
            Get a Local Quote
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
            Southern Oregon Continuous Gutters Inc. - Lic. #64538
          </p>
          <p className="mt-1">{siteData.serviceArea}</p>
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
