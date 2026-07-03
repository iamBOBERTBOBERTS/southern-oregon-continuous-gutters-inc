import { Button } from "@/components/Button";
import { ScrollSceneController } from "@/components/motion/ScrollSceneController";
import { QuoteForm } from "@/components/QuoteForm";
import { RevealText } from "@/components/RevealText";
import { SectionLabel } from "@/components/SectionLabel";
import { SceneCanvasLoader } from "@/components/three/SceneCanvasLoader";
import { siteData } from "@/lib/site-data";

const problemCards = [
  {
    title: "Runoff leaves the roofline",
    body: "Heavy rain can sheet off roof edges, splash siding, and push water into places the home was not built to absorb."
  },
  {
    title: "Small failures spread fast",
    body: "Poor pitch, loose sections, and weak downspout routing can lead to wet fascia, stained walkways, erosion, and foundation-edge pressure."
  },
  {
    title: "Drainage needs a path",
    body: "A gutter system should collect water, move it cleanly, and release it away from the structure with a practical downspout route."
  }
];

const solutionPoints = [
  "Measured at the roofline",
  "Formed in continuous runs",
  "Aligned for controlled flow",
  "Routed away from vulnerable areas"
];

const serviceDetails = [
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

const whyItems = [
  {
    title: "Southern Oregon weather",
    body: "Seasonal rain, tree debris, and varied rooflines make controlled drainage a real protection issue, not just a cosmetic upgrade."
  },
  {
    title: "Cleaner curb appeal",
    body: "Continuous runs create a cleaner finished line across the roof edge while supporting the drainage plan."
  },
  {
    title: "Fewer joint points",
    body: "Seamless gutter runs reduce the number of joints compared with sectional systems."
  }
];

const processSteps = [
  {
    title: "Review",
    body: "Inspect the roofline, runoff areas, slope needs, and existing drainage concerns."
  },
  {
    title: "Measure",
    body: "Measure the home for custom-fit continuous gutter runs and downspout locations."
  },
  {
    title: "Form",
    body: "Fabricate continuous gutters on site for the needed profile and lengths."
  },
  {
    title: "Install",
    body: "Install, secure, align, and connect the system with attention to water movement."
  },
  {
    title: "Direct",
    body: "Route water away from vulnerable areas where practical for the property."
  }
];

const trustItems = [
  "Owner/operator: Paul Chitwood",
  "Oregon CCB #64538",
  "Southern Oregon, Medford, and Rogue Valley service focus",
  "No published street address until confirmed"
];

const galleryItems = [
  {
    title: "Roofline profile",
    body: "Use for approved close-up photos of the finished continuous gutter line."
  },
  {
    title: "Downspout routing",
    body: "Use for before-and-after examples showing how water is carried away."
  },
  {
    title: "Finished exterior",
    body: "Use for curb-facing project photos after business approval."
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
  },
  {
    question: "What areas do you serve?",
    answer: `${siteData.businessName} serves homeowners and property owners across ${siteData.serviceArea}, including Medford and the Rogue Valley.`
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
    <main className="pb-20 sm:pb-0">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <ScrollSceneController />
      <Header />
      <Hero />
      <StormProblem />
      <Solution />
      <Services />
      <WhyContinuous />
      <Process />
      <LocalTrust />
      <Gallery />
      <Faq />
      <Contact />
      <FinalCta />
      <Footer />
      <a
        data-cta
        className="fixed inset-x-4 bottom-4 z-50 inline-flex min-h-14 items-center justify-center rounded-md bg-amber px-5 text-center text-sm font-bold uppercase tracking-[0.12em] text-ink shadow-amber sm:hidden"
        href={siteData.phoneHref}
      >
        Call {siteData.phoneNumber}
      </a>
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/78 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="section-shell flex items-center justify-between gap-4">
        <a href="#" className="min-w-0">
          <span className="block text-sm font-bold uppercase tracking-[0.16em] text-zinc-50">Southern Oregon</span>
          <span className="block truncate text-xs font-bold uppercase tracking-[0.16em] text-rain">
            Continuous Gutters Inc.
          </span>
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
    <section className="hero-stage relative min-h-screen overflow-hidden border-b border-white/10 px-4 pt-24 sm:px-6 lg:px-8">
      <div className="storm-orbit" aria-hidden="true" />
      <div className="rain-field" aria-hidden="true" />
      <SceneCanvasLoader />
      <div className="section-shell relative z-10 grid min-h-[calc(100svh-6rem)] items-center gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionLabel>Stormwater protection for Southern Oregon homes</SectionLabel>
          <RevealText
            as="h1"
            className="cinematic-type mt-6 max-w-5xl text-5xl font-bold leading-[0.9] text-zinc-50 sm:text-7xl lg:text-8xl"
          >
            Built for Southern Oregon Storms.
          </RevealText>
          <p data-reveal className="mt-7 max-w-2xl text-xl font-semibold leading-8 text-zinc-100 sm:text-2xl sm:leading-9">
            Seamless continuous gutters designed to move water away from your roofline, siding, walkways, landscaping,
            and foundation.
          </p>
          <div data-reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={siteData.phoneHref}>{siteData.ctas.primary}</Button>
            <Button href="#quote" variant="secondary">
              Request a Gutter Estimate
            </Button>
          </div>
          <dl data-reveal className="mt-9 grid gap-3 sm:grid-cols-3">
            {["Seamless runs", "Water control", "CCB #64538"].map((item) => (
              <div className="hero-proof" key={item}>
                <dt className="sr-only">Trust marker</dt>
                <dd>{item}</dd>
              </div>
            ))}
          </dl>
        </div>
        <aside className="storm-card" data-card>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-rain">Water path</p>
          <h2 className="mt-5 text-3xl font-semibold leading-tight text-zinc-50">
            From roof edge to controlled runoff.
          </h2>
          <p className="mt-5 leading-7 text-zinc-300">
            The job is simple to describe and important to get right: capture roof water, carry it cleanly, and send it
            where it belongs.
          </p>
          <div className="roofline-diagram mt-8" aria-hidden="true">
            <span className="roofline-diagram__roof" />
            <span className="roofline-diagram__gutter" />
            <span className="roofline-diagram__flow" />
          </div>
        </aside>
      </div>
    </section>
  );
}

function StormProblem() {
  return (
    <section data-scroll-scene className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="max-w-3xl">
          <SectionLabel>Stormwater problem</SectionLabel>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Rain becomes a threat when it loses the path.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {problemCards.map((card) => (
            <article className="surface-panel water-card rounded-lg p-6" data-card key={card.title}>
              <h3 className="text-xl font-semibold text-zinc-50">{card.title}</h3>
              <p className="mt-4 leading-7 text-zinc-300">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section data-scroll-scene className="section-band section-band--metal border-y border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionLabel>Seamless continuous gutter solution</SectionLabel>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Custom formed to take control at the roofline.
          </h2>
          <p data-reveal className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            Continuous gutters give runoff a cleaner route across the home, with fewer joints than sectional systems and
            a fit that is built around the actual roofline.
          </p>
        </div>
        <div className="flow-panel" data-card>
          {solutionPoints.map((point, index) => (
            <div className="flow-step" key={point}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section data-scroll-scene id="services" className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionLabel>Services</SectionLabel>
        <h2 data-reveal className="cinematic-type mt-5 max-w-4xl text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
          Precision gutter work for rooflines, runoff, and curb appeal.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceDetails.map((service) => (
            <article className="service-card" data-card key={service.title}>
              <div className="service-card__shine" aria-hidden="true" />
              <h3 className="text-xl font-semibold text-zinc-50">{service.title}</h3>
              <p className="mt-4 leading-7 text-zinc-300">{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyContinuous() {
  return (
    <section data-scroll-scene className="section-band border-y border-white/10 bg-zinc-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionLabel>Why it matters here</SectionLabel>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Southern Oregon homes need water movement that makes sense.
          </h2>
        </div>
        <div className="grid gap-5">
          {whyItems.map((item) => (
            <article className="surface-panel rounded-lg p-6" data-card key={item.title}>
              <h3 className="text-xl font-semibold text-zinc-50">{item.title}</h3>
              <p className="mt-3 leading-7 text-zinc-300">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section data-scroll-scene className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionLabel>Process</SectionLabel>
        <h2 data-reveal className="cinematic-type mt-5 max-w-4xl text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
          Measured, fabricated, and installed with a clear water-control purpose.
        </h2>
        <ol className="process-track mt-10">
          {processSteps.map((step, index) => (
            <li className="process-step" data-card key={step.title}>
              <span className="process-step__number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LocalTrust() {
  return (
    <section data-scroll-scene className="section-band section-band--warm border-y border-white/10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionLabel>Local owner-operated trust</SectionLabel>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Talk directly with Paul about the water around your home.
          </h2>
          <p data-reveal className="mt-6 leading-8 text-zinc-300">
            The site stays focused on verifiable business information: local service, practical gutter work, and direct
            quote paths without invented awards, reviews, or warranty claims.
          </p>
        </div>
        <div className="trust-grid">
          {trustItems.map((item) => (
            <div className="trust-pill" data-card key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section data-scroll-scene className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionLabel>Gallery placeholders</SectionLabel>
        <h2 data-reveal className="cinematic-type mt-5 max-w-4xl text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
          Ready for approved local project photography.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {galleryItems.map((item) => (
            <article className="gallery-card" data-card key={item.title}>
              <div className="gallery-card__image">
                <span>{item.title}</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-zinc-50">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{item.body}</p>
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
    <section data-scroll-scene className="section-band border-y border-white/10 bg-zinc-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Clear answers before the quote.
          </h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <article className="surface-panel rounded-lg p-6" data-card key={faq.question}>
              <h3 className="text-xl font-semibold text-zinc-50">{faq.question}</h3>
              <p className="mt-4 leading-7 text-zinc-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section data-scroll-scene id="quote" className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <SectionLabel>Request a quote</SectionLabel>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
            Protect your roofline before the next storm cycle.
          </h2>
          <p data-reveal className="mt-6 leading-8 text-zinc-300">
            Send the project details through the form or call Paul directly. The quote workflow remains connected to the
            existing `/api/quote` route and Base44 storage path when configured.
          </p>
          <a data-cta className="mt-7 block text-3xl font-bold text-amber" href={siteData.phoneHref}>
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
        <SectionLabel>Southern Oregon Continuous Gutters Inc.</SectionLabel>
        <h2 className="cinematic-type mx-auto mt-5 max-w-4xl text-4xl font-bold leading-none text-zinc-50 sm:text-6xl">
          Give rain a better path around your home.
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
    <footer className="border-t border-white/10 bg-ink px-4 py-10 sm:px-6 lg:px-8">
      <div className="section-shell flex flex-col justify-between gap-5 text-sm text-zinc-400 sm:flex-row">
        <p>
          {siteData.businessName} - Owner/operator {siteData.ownerName} - {siteData.serviceArea} - Oregon CCB #64538
        </p>
        <a className="font-semibold text-amber hover:text-amber/85" href={siteData.phoneHref}>
          {siteData.phoneNumber}
        </a>
      </div>
    </footer>
  );
}
