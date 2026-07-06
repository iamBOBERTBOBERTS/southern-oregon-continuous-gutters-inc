export const siteData = {
  businessName: "Southern Oregon Continuous Gutters Inc.",
  ownerName: "Paul Chitwood",
  phoneNumber: "541-770-5785",
  phoneHref: "tel:+15417705785",
  alternatePhoneNumber: "541-821-4258",
  licenseNumber: "64538",
  establishedYear: "1990",
  incorporationDate: "1998-01-07",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://southernoregoncontinuousgutters.com",
  serviceArea: "Medford and Southern Oregon",
  locality: "Medford, Oregon",
  region: "Rogue Valley",
  services: [
    "Seamless gutter installation",
    "Continuous gutter replacement",
    "Gutter repair",
    "Gutter maintenance",
    "Downspouts",
    "Roofline water control"
  ],
  seoServices: [
    "seamless gutter installation",
    "continuous gutter replacement",
    "gutter repair",
    "gutter maintenance",
    "downspouts",
    "roofline water control"
  ],
  description:
    "Southern Oregon Continuous Gutters Inc. installs, replaces, repairs, and maintains seamless gutter systems and downspouts for Medford and Southern Oregon homes.",
  ctas: {
    primary: "Call 541-770-5785",
    secondary: "Request an On-Site Estimate",
    phoneShort: "Call"
  }
} as const;

export type SiteData = typeof siteData;
