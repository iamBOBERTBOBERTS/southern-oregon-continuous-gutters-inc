export const siteData = {
  businessName: "Southern Oregon Continuous Gutters Inc.",
  ownerName: "Paul Chitwood",
  phoneNumber: "541-821-4258",
  phoneHref: "tel:+15418214258",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://southernoregoncontinuousgutters.com",
  serviceArea: "Southern Oregon",
  services: [
    "Continuous gutter installation",
    "Seamless gutter replacement",
    "Downspout installation",
    "Gutter protection options",
    "Exterior water management",
    "Residential gutter systems",
    "Light commercial gutter systems"
  ],
  seoServices: [
    "continuous gutters",
    "seamless gutters",
    "gutter installation",
    "gutter replacement",
    "downspouts",
    "gutter protection"
  ],
  description:
    "Southern Oregon Continuous Gutters Inc. installs custom-fit continuous gutters and seamless gutter systems built for Southern Oregon storms.",
  ctas: {
    primary: "Call Paul: 541-821-4258",
    secondary: "Request a Quote",
    phoneShort: "Call"
  }
} as const;

export type SiteData = typeof siteData;
