/* PROTOTYPE — throwaway sample dataset. ~12 rows so the filter feels real.
 * Schema mirrors research/05 (affiliate + link_health blocks) so the SAME shape drives both
 * the client-side filter island AND the statically generated long-tail pages.
 * ASTRO MAPPING: this becomes data/products.json, loaded at build via getStaticPaths()
 * for the long-tail pages and imported into the tool island for client-side filtering.
 *
 * fit: "native" (mfr-made for this platform) | "direct" (third-party direct-fit) | "adapter"
 * affiliate_enabled:false + affiliate_url:null is the pre-monetization default. */

window.PRODUCTS = [
  { id: "m18-fan-jobsite", name: "M18 Jobsite Fan", brand: "Milwaukee", platform: "Milwaukee M18",
    category: "Fans", fit: "native", battery_included: false, icon: "🌀", price_band: "$99–129",
    affiliate: { asin: "B0XXXXX01", affiliate_url: null, link_type: "amazon", affiliate_enabled: false,
      requires_disclosure: true, commission_rate: 0.03 },
    link_health: { last_verified_date: "2026-09-01", last_verified_alive: true, verification_interval_days: 30 } },

  { id: "ryobi-misting-fan", name: "ONE+ Misting Bucket-Top Fan", brand: "Ryobi", platform: "Ryobi One+",
    category: "Fans", fit: "native", battery_included: false, icon: "💨", price_band: "$59–79",
    affiliate: { asin: "B0XXXXX02", affiliate_url: null, link_type: "amazon", affiliate_enabled: false,
      requires_disclosure: true, commission_rate: 0.03 },
    link_health: { last_verified_date: "2026-09-01", last_verified_alive: true, verification_interval_days: 30 } },

  { id: "dewalt-coffee-3rd", name: "Portable Espresso Maker (DeWalt adapter)", brand: "OutdoorBrew", platform: "DeWalt 20V MAX",
    category: "Coffee makers", fit: "adapter", adapter: "DeWalt-to-barrel adapter #A12", battery_included: false, icon: "☕",
    price_band: "$70–95",
    affiliate: { asin: "B0XXXXX03", affiliate_url: null, link_type: "amazon", affiliate_enabled: false,
      requires_disclosure: true, commission_rate: 0.03 },
    link_health: { last_verified_date: "2026-09-01", last_verified_alive: true, verification_interval_days: 30 } },

  { id: "m18-inflator", name: "M18 Compact Inflator", brand: "Milwaukee", platform: "Milwaukee M18",
    category: "Inflators", fit: "native", battery_included: false, icon: "🎈", price_band: "$79–99",
    affiliate: { asin: "B0XXXXX04", affiliate_url: null, link_type: "amazon", affiliate_enabled: false,
      requires_disclosure: true, commission_rate: 0.03 },
    link_health: { last_verified_date: "2026-09-01", last_verified_alive: true, verification_interval_days: 30 } },

  { id: "dewalt-fan-20v", name: "20V MAX Jobsite Fan", brand: "DeWalt", platform: "DeWalt 20V MAX",
    category: "Fans", fit: "native", battery_included: false, icon: "🌀", price_band: "$119–149",
    affiliate: { asin: "B0XXXXX05", affiliate_url: null, link_type: "amazon", affiliate_enabled: false,
      requires_disclosure: true, commission_rate: 0.03 },
    link_health: { last_verified_date: "2026-09-01", last_verified_alive: true, verification_interval_days: 30 } },

  { id: "hart-20v-fan", name: "HART 20V Portable Fan", brand: "HART", platform: "HART 20V",
    category: "Fans", fit: "native", battery_included: false, icon: "🌀", price_band: "$39–49",
    affiliate: { asin: "B0XXXXX06", affiliate_url: null, link_type: "amazon", affiliate_enabled: false,
      requires_disclosure: true, commission_rate: 0.03 },
    link_health: { last_verified_date: "2026-09-01", last_verified_alive: true, verification_interval_days: 30 } },

  { id: "m18-vacuum", name: "M18 Compact Vacuum", brand: "Milwaukee", platform: "Milwaukee M18",
    category: "Vacuums", fit: "native", battery_included: false, icon: "🧹", price_band: "$99–139",
    affiliate: { asin: "B0XXXXX07", affiliate_url: null, link_type: "amazon", affiliate_enabled: false,
      requires_disclosure: true, commission_rate: 0.03 },
    link_health: { last_verified_date: "2026-09-01", last_verified_alive: true, verification_interval_days: 30 } },

  { id: "ryobi-glue-gun", name: "ONE+ Cordless Glue Gun", brand: "Ryobi", platform: "Ryobi One+",
    category: "Glue guns", fit: "native", battery_included: false, icon: "🔫", price_band: "$29–39",
    affiliate: { asin: "B0XXXXX08", affiliate_url: null, link_type: "amazon", affiliate_enabled: false,
      requires_disclosure: true, commission_rate: 0.03 },
    link_health: { last_verified_date: "2026-09-01", last_verified_alive: true, verification_interval_days: 30 } },

  { id: "makita-chainsaw-mini", name: "LXT Mini Chainsaw (direct-fit)", brand: "TopSaw", platform: "Makita LXT",
    category: "Chainsaws", fit: "direct", battery_included: false, icon: "🪚", price_band: "$55–75",
    affiliate: { asin: "B0XXXXX09", affiliate_url: null, link_type: "amazon", affiliate_enabled: false,
      requires_disclosure: true, commission_rate: 0.03 },
    link_health: { last_verified_date: "2026-09-01", last_verified_alive: true, verification_interval_days: 30 } },

  { id: "dewalt-power-station", name: "20V Portable Power Station", brand: "DeWalt", platform: "DeWalt 20V MAX",
    category: "Power stations", fit: "native", battery_included: false, icon: "🔋", price_band: "$149–199",
    affiliate: { asin: "B0XXXXX10", affiliate_url: null, link_type: "amazon", affiliate_enabled: false,
      requires_disclosure: true, commission_rate: 0.03 },
    link_health: { last_verified_date: "2026-09-01", last_verified_alive: true, verification_interval_days: 30 } },

  { id: "m18-misting-fan", name: "M18 Misting Fan", brand: "Milwaukee", platform: "Milwaukee M18",
    category: "Fans", fit: "native", battery_included: false, icon: "💨", price_band: "$109–139",
    affiliate: { asin: "B0XXXXX11", affiliate_url: null, link_type: "amazon", affiliate_enabled: false,
      requires_disclosure: true, commission_rate: 0.03 },
    link_health: { last_verified_date: "2026-09-01", last_verified_alive: true, verification_interval_days: 30 } },

  { id: "kobalt-24v-fan", name: "Kobalt 24V Hybrid Fan", brand: "Kobalt", platform: "Kobalt 24V",
    category: "Fans", fit: "native", battery_included: false, icon: "🌀", price_band: "$49–69",
    affiliate: { asin: "B0XXXXX12", affiliate_url: null, link_type: "amazon", affiliate_enabled: false,
      requires_disclosure: true, commission_rate: 0.03 },
    link_health: { last_verified_date: "2026-09-01", last_verified_alive: true, verification_interval_days: 30 } },
];
