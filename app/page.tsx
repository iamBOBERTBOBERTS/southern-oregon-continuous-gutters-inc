import { Button } from "@/components/Button";
import { ScrollSceneController } from "@/components/motion/ScrollSceneController";
import { QuoteForm } from "@/components/QuoteForm";
import { RevealText } from "@/components/RevealText";
import { SectionLabel } from "@/components/SectionLabel";
import { SceneCanvasLoader } from "@/components/three/SceneCanvasLoader";
import { siteData } from "@/lib/site-data";

const stormIssues = [
  "Overflowing, leaking, undersized, or failing gutters can send water where it does not belong - into fascia boards, siding, landscaping, walkways, and foundations."
];

const serviceDetails = [
  {
    title: "Continuous gutter installation",
    body: "Continuous gutters are custom fit on site for clean roofline drainage and long, seamless runs."
  },
  {
    title: "Seamless gutter replacement",
    body: "Replacement for aging, leaking, damaged, undersized, or poorly pitched gutter systems."
  },
  {
    title: "Downspout installation",
    body: "Downspout placement and replacement to direct water safely away from the structure."
  },
  {
    title: "Gutter protection options",
    body: "Protection options for Southern Oregon homes with trees, debris, and seasonal buildup."
  },
  {
    title: "Exterior water management",
    body: "Practical routing recommendations for entries, walkways, landscape beds, and foundation edges."
  },
  {
    title: "Residential gutter systems",
    body: "Seamless gutter systems for Southern Oregon homes, rooflines, and runoff conditions."
  },
  {
    title: "Light commercial gutter systems",
    body: "Clean, practical gutter and downspout work for smaller commercial properties."
  }
];

const processSteps = [
  "Inspect the roofline and drainage needs.",
  "Measure the home for a custom fit.",
  "Form continuous gutters on site.",
  "Install, align, and secure the system.",
  "Direct water safely away from the structure."
];

const faqs = [
  {
    question: "What are continuous gutters?",
    answer:
      "Continuous gutters are formed in long seamless runs and custom fit on site, reducing joints compared with sectional systems."
  },
  {
    question: "Do I need gutter replacement or repair?",
    answer:
      "That depends on slope, leaks, corrosion, fascia condition, and whether runoff is routed correctly. A site review is the right next step."
  },
  {
    question: "Can gutter protection be added?",
    answer:
      "Yes. Gutter protection can be discussed during the quote, especially for homes with trees or recurring debris."
  },
  {
    question: "What areas do you serve?",
    answer: `${siteData.businessName} serves homeowners and property owners across ${siteData.serviceArea}.`
  }
];

const journeyScenes = [
  {
    label: "01 / Opening",
    title: "Southern Oregon storms are serious.",
    body: "A dark roofline, slow rain, and shifting light set the tone for weather that tests every edge of the home."
  },
  {
    label: "02 / Problem",
    title: "Poor drainage damages homes.",
    body: "When water overflows and scatters, it can soak fascia, mark siding, erode landscaping, and move toward foundations."
  },
  {
    label: "03 / Craft",
    title: "Continuous gutters are custom made.",
    body: "An aluminum profile forms in 3D to show how seamless gutters are custom fit on site for the home."
  },
  {
    label: "04 / Solution",
    title: "Proper systems control runoff.",
    body: "Water moves smoothly through the gutter and into a planned downspout path instead of spreading across vulnerable areas."
  },
  {
    label: "05 / Local Trust",
    title: "Local owner. Local service.",
    body: "A calm home silhouette and warm light shift the scene from storm pressure to practical help from Paul Chitwood."
  },
  {
    label: "06 / CTA",
    title: "Call Paul or request a quote.",
    body: "The path ends with clear contact options: call 541-821-4258 or send the quote form with the project details."
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
      <Hero />
      <CinematicJourney />
      <StormProblem />
      <Solution />
      <Services />
      <WhyContinuous />
      <Process />
      <LocalTrust />
      <Gallery />
      <Faq />
      <Contact />
      <Footer />
      <a
        data-cta
        className="fixed inset-x-4 bottom-4 z-50 inline-flex min-h-14 items-center justify-center rounded-md bg-amber px-5 text-sm font-bold uppercase tracking-[0.12em] text-ink shadow-amber sm:hidden"
        href={siteData.phoneHref}
      >
        Call {siteData.phoneNumber}
      </a>
    </main>
  );
}

function Header() {
  return (
    <header className="section-shell relative z-20 flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
      <a href="#" className="max-w-72">
        <span className="block text-sm font-bold uppercase tracking-[0.18em] text-zinc-50">Southern Oregon</span>
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-rain">Continuous Gutters Inc.</span>
      </a>
      <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-3">
        <Button href="#services" variant="ghost">
          Services
        </Button>
        <Button href="#quote" variant="secondary">
          Quote
        </Button>
        <Button className="hidden sm:inline-flex" href={siteData.phoneHref}>
          Call {siteData.phoneNumber}
        </Button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section data-scroll-scene className="relative min-h-screen overflow-hidden border-b border-white/10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 rain-lines opacity-20" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-64 bg-rain/10 blur-3xl" aria-hidden="true" />
      <SceneCanvasLoader />
      <Header />
      <div className="section-shell relative z-10 grid min-h-[calc(100svh-6rem)] items-center gap-12 py-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <SectionLabel>Seamless gutter systems</SectionLabel>
          <RevealText
            as="h1"
            className="cinematic-type mt-6 max-w-5xl text-5xl font-bold leading-[0.92] text-zinc-50 sm:text-7xl lg:text-8xl"
          >
            Southern Oregon Continuous Gutters
          </RevealText>
          <p data-reveal className="mt-7 max-w-2xl text-2xl font-semibold leading-9 text-zinc-100">
            Seamless gutter systems built for Southern Oregon storms.
          </p>
          <p data-reveal className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Custom-fit continuous gutters designed to move water cleanly, protect your roofline, and help defend your
            home from runoff damage.
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
            Owner-operated gutter work with clear communication, practical recommendations, and direct phone access from
            the first visit through installation.
          </p>
          <div className="mt-8 rounded-md border border-white/10 bg-white/[0.035] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">Call Paul</p>
            <a className="mt-1 block text-2xl font-semibold text-amber" href={siteData.phoneHref}>
              {siteData.phoneNumber}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function CinematicJourney() {
  return (
    <section
      className="cinematic-journey relative overflow-hidden border-b border-white/10 bg-zinc-950 px-4 py-20 sm:px-6 lg:px-8"
      data-cinematic-journey
    >
      <div className="section-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="journey-visual surface-panel sticky top-0 hidden h-screen overflow-hidden rounded-lg lg:block">
          <SceneCanvasLoader />
          <div className="journey-visual-copy">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-rain">Water path</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-300">
              A simple look at how rain moves from roofline to controlled runoff.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:py-24">
          {journeyScenes.map((scene, index) => (
            <article
              className="journey-panel surface-panel min-h-[72svh] rounded-lg p-6 sm:p-8 lg:min-h-screen"
              data-journey-panel
              data-reveal
              key={scene.label}
            >
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-amber">{scene.label}</span>
              <h2 className="cinematic-type mt-6 max-w-2xl text-4xl font-bold leading-none text-zinc-50 sm:text-5xl">
                {scene.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">{scene.body}</p>
              {index === journeyScenes.length - 1 ? (
                <div className="mt-8">
                  <Button href="#quote">Request a Free Gutter Quote</Button>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function StormProblem() {
  return (
    <section data-scroll-scene className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <SectionLabel>Storm problem</SectionLabel>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-5xl">
            When the rain hits, every roofline tells the truth.
          </h2>
        </div>
        <div className="grid gap-4">
          {stormIssues.map((issue) => (
            <article className="surface-panel rounded-lg p-6" data-card key={issue}>
              <p className="leading-8 text-zinc-300">{issue}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section data-pin-section data-scroll-scene className="border-y border-white/10 bg-charcoal px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="surface-panel rounded-lg p-6 sm:p-8">
          <SectionLabel>Seamless gutter solution</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold text-zinc-50">
            A continuous gutter system is formed to fit your home.
          </h2>
          <p className="mt-5 leading-8 text-zinc-300">
            No unnecessary seams. Cleaner lines. Better water control. A stronger exterior protection system for the
            conditions Southern Oregon homes face every season.
          </p>
        </div>
        <div className="rounded-lg border border-rain/25 bg-rain/10 p-6" data-card>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-rain">System intent</p>
          <p className="mt-4 text-2xl font-semibold leading-9 text-zinc-50">
            Collect water at the roofline, carry it through a continuous channel, and protect fascia, siding,
            landscaping, and foundations.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section data-scroll-scene id="services" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionLabel>Services</SectionLabel>
        <h2 data-reveal className="cinematic-type mt-5 max-w-3xl text-4xl font-bold leading-none text-zinc-50 sm:text-5xl">
          Gutter work built around real Southern Oregon rooflines.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceDetails.map((service) => (
            <article className="surface-panel rounded-lg p-6" data-card key={service.title}>
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
    <section data-scroll-scene className="border-y border-white/10 bg-zinc-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionLabel>Why continuous gutters</SectionLabel>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-5xl">
            Fewer joints. Cleaner lines. A better fit for the home.
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {["Seamless appearance", "Custom fit on site", "Planned downspout routes"].map((item) => (
            <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5" data-card key={item}>
              <p className="font-semibold text-zinc-50">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section data-scroll-scene className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionLabel>Installation process</SectionLabel>
        <h2 data-reveal className="cinematic-type mt-5 max-w-3xl text-4xl font-bold leading-none text-zinc-50 sm:text-5xl">
          A clear path from site review to controlled runoff.
        </h2>
        <ol className="mt-10 grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li className="surface-panel rounded-lg p-5" data-card key={step}>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-amber">
                Step {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-5 leading-7 text-zinc-300">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function LocalTrust() {
  return (
    <section data-scroll-scene className="border-y border-white/10 bg-charcoal px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionLabel>Southern Oregon trust</SectionLabel>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-5xl">
            Local gutter work for local weather.
          </h2>
        </div>
        <p data-reveal className="text-lg leading-8 text-zinc-300">
          Southern Oregon homes see rain, trees, roofline variation, and drainage challenges. Paul Chitwood brings an
          owner-operated approach focused on practical water management and clear job-site communication.
        </p>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section data-scroll-scene className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionLabel>Project gallery</SectionLabel>
        <h2 data-reveal className="cinematic-type mt-5 max-w-3xl text-4xl font-bold leading-none text-zinc-50 sm:text-5xl">
          Project placeholders ready for real installations.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {["Roofline detail", "Downspout route", "Finished profile"].map((label) => (
            <article className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]" data-card key={label}>
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-zinc-900 via-charcoal to-rain/20">
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-500">Image placeholder</span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-zinc-50">{label}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">Replace with approved local project photography.</p>
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
    <section data-scroll-scene className="border-y border-white/10 bg-zinc-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionLabel>FAQ</SectionLabel>
        <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-5xl">
          Common gutter questions.
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
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
    <section data-scroll-scene id="quote" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <SectionLabel>Contact / quote</SectionLabel>
          <h2 data-reveal className="cinematic-type mt-5 text-4xl font-bold leading-none text-zinc-50 sm:text-5xl">
            Protect your home before the next storm cycle.
          </h2>
          <p data-reveal className="mt-6 leading-8 text-zinc-300">
            Talk with Paul at Southern Oregon Continuous Gutters Inc. and request a straightforward quote for your home
            or property.
          </p>
          <a data-cta className="mt-7 block text-3xl font-bold text-amber" href={siteData.phoneHref}>
            {siteData.phoneNumber}
          </a>
          <div className="mt-7">
            <Button href={siteData.phoneHref}>Call {siteData.phoneNumber}</Button>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-4 py-10 sm:px-6 lg:px-8">
      <div className="section-shell flex flex-col justify-between gap-5 text-sm text-zinc-400 sm:flex-row">
        <p>
          {siteData.businessName} - Owner/operator {siteData.ownerName} - {siteData.serviceArea}
        </p>
        <a className="font-semibold text-amber hover:text-amber/85" href={siteData.phoneHref}>
          {siteData.phoneNumber}
        </a>
      </div>
    </footer>
  );
}
