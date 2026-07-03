export const siteData = {
  businessName: "Southern Oregon Continuous Gutters Inc.",
  ownerName: "Paul Chitwood",
  phoneNumber: "541-821-4258",
  phoneHref: "tel:+15418214258",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://southernoregoncontinuousgutters.com",
  serviceArea: "Southern Oregon",
  services: [
    "Seamless gutter installation",
    "Continuous gutter replacement",
    "Gutter protection",
    "Downspouts",
    "Exterior water management"
  ],
  ctas: {
    primary: "Call 541-821-4258",
    secondary: "Request a Quote",
    phoneShort: "Call"
  }
} as const;

export type SiteData = typeof siteData;
