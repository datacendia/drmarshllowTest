/**
 * All storefront copy in one typed file: fill this and the site renders.
 * Mirrors the rl-templates `_base` convention. In the build phase the
 * editable parts (hero, story, trust strip) move into a Payload global so
 * Evelyn can change them without a deploy.
 */
export const site = {
  brand: {
    name: "DrMarshllow",
    descriptor: "Enamel pins",
  },

  draftNote: "First draft · pin illustrations, names and prices are placeholders",

  nav: [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],

  hero: {
    eyebrow: "Enamel pins for doctors",
    titleLines: ["Small pins", "for long shifts"],
    body: "Tiny marshmallow doctors for your lanyard, from your first JMO rotation to your last night shift.",
    cta: "Shop the pins",
    secondaryCta: "Build your lanyard",
  },

  trust: [
    { icon: "truck", title: "Posted from Australia", body: "Tracked and standard options" },
    { icon: "heart", title: "Quality enamel pins", body: "Made to survive long shifts" },
    { icon: "shield", title: "Secure checkout", body: "Cards, Apple Pay & Google Pay" },
    { icon: "gift", title: "Made for doctors", body: "Gift a JMO (or yourself!)" },
  ],

  collection: {
    eyebrow: "Our collection",
    title: "Meet the Doctors",
    body: "White coats, tiny stethoscopes and very big eyes. Every pin comes on an illustrated card, ready to wear or gift.",
  },

  nextDrop: {
    label: "Next drop",
    title: "A new specialty",
    body: "Which specialty gets a marshmallow next? Be the first to know.",
  },

  story: {
    title: "More than just a pin",
    body: "DrMarshllow started with one marshmallow in a white coat, a small reminder that the people who look after everyone else deserve a bit of looking after too. Every pin is a dose of joy for long shifts, tough rotations and 3 a.m. pages.",
    signoff: "Stay kind. Stay caffeinated. ♡",
  },

  lanyard: {
    eyebrow: "Coming next",
    title: "Build your lanyard",
    body: "Drag your favourite marshmallows onto a lanyard, add your name and role, then share it with your team, or add the whole lanyard to your cart in one tap.",
    steps: ["Pick your pins", "Add your name and role", "Share it, or buy the lot"],
    badge: "Interactive in the next draft",
  },

  social: {
    title: "Follow the marshmallow",
    body: "New drops, behind-the-scenes and ward-round humour.",
    links: [
      { platform: "tiktok", handle: "@DrMarshllow", href: "https://www.tiktok.com/@drmarshllow" },
      { platform: "instagram", handle: "@DrMarshllow", href: "https://www.instagram.com/drmarshllow/" },
    ],
  },

  shop: {
    eyebrow: "The collection",
    title: "Shop the pins",
    body: "Every marshmallow comes on an illustrated backing card, ready to pin or gift.",
    bulkTitle: "Ordering for a whole team?",
    bulkBody: "Welcome packs for a JMO unit, prizes for a med society, gifts for a rotation. Ask about bulk pricing.",
    bulkCta: "Ask about bulk orders",
  },

  product: {
    shippingNote: "Posted from Australia in a padded mailer. Shipping is calculated at checkout.",
    photoNote: "Illustration · real photos coming",
    relatedTitle: "More marshmallows",
  },

  about: {
    eyebrow: "About",
    title: "Made for doctors",
    paragraphs: [
      "DrMarshllow makes enamel pins for doctors: tiny marshmallows in white coats, designed to live on lanyards and survive long shifts.",
      "[Evelyn's story goes here: who's behind DrMarshllow, why a marshmallow, and the shift that started it all.]",
      "New specialties drop regularly. Follow @DrMarshllow to see what's next.",
    ],
  },

  contact: {
    eyebrow: "Say hello",
    title: "Get in touch",
    body: "Questions about an order, a collab idea, or just want to say hi? Send a message. Every one gets read.",
    bulkTitle: "Bulk orders",
    bulkBody: "Welcome packs for a JMO unit, prizes for a med society or gifts for a whole rotation. Tell us how many and we'll put a quote together.",
    topics: ["General question", "Help with an order", "Bulk order", "Collab"],
    sentNote: "Thanks! (Draft preview: this form connects in the build phase.)",
  },

  cart: {
    title: "Your cart",
    empty: "Your cart is feeling a little empty",
    browse: "Browse the pins",
    shippingNote: "Shipping is calculated at checkout.",
    checkout: "Checkout",
    checkoutNote: "Draft preview: secure Stripe checkout (cards, Apple Pay, Google Pay) connects in the build phase.",
  },

  footer: {
    legal: ["Shipping", "Returns", "Privacy"],
    tagline: "Cute pins. Long shifts. ♡",
  },

  /**
   * Night Shift Mode copy. Shown instead of the day lines whenever
   * isNightShift() (src/lib/shift.ts) says it's nights.
   */
  night: {
    /** Keep in sync with the window in isNightShift(). */
    windowLabel: "10 p.m.–7 a.m.",
    draftNote: "First draft · night shift mode is on · pin illustrations, names and prices are placeholders",
    hero: {
      eyebrow: "Night shift edition",
      titleLines: ["For the", "3 a.m. crew"],
      body: "Quiet moment on nights? The Night Shift Marshllow is only on sale until 7 a.m. If you've got one, you earned it.",
      secondaryCta: "Meet the night pin",
    },
    pinHref: "/shop/night-shift-marshllow",
    collectionTitle: "Meet the night crew",
    storySignoff: "Stay kind. Go home safe. ♡",
    cartEmpty: "Nothing in here but cold coffee",
    footerTagline: "Go home safe. ♡",
    nightOnlyBadge: "Night only · 10 p.m.–7 a.m.",
    lockedNote: "This one only comes out on night shift. Back at 10 p.m.",
    toggleLabel: "Night shift mode",
    lightsDown: "Lights down. Night shift mode is on.",
    handover: "Handover done. Go home and sleep. ♡",
  },
} as const
