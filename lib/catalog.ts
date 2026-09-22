
const CATALOG: StoreCatalog = {
  "merchant": "Fix these UI quality issues. Keep the same product concept, structure, and design language.\nReturn FULL multi-file sources for every file that still exists.\nCurrent QA score: 24/100 — 2 live/static issues\n\nIssues to fix:\n1. [warning/design] More than 8 distinct text-* sizes — pick a display/body scale and stay on it\n2. [error/render] Live preview root is empty — × — ×\n3. [error/render] × — ×\n4. [warning/structure] H1 present in source but not visible in live DOM\n\nRequirements: real useState where needed, no lorem, no TypeScript types, no imports, entry Component().\nDo not claim the preview compiles. The platform Babel-checks the result after you return. Never write “preview now compiles cleanly” or similar — if a tag is still open, close it. Hyphenated keys like 'canvas-tote': <svg> belong in const ICONS = { ... }, not as bare statements.",
  "brand": "Fix these UI quality issues. Keep the same product concept, structure, and design language.\nReturn FULL multi-file sources for every file that still exists.\nCurrent QA score: 24/100 — 2 live/static issues\n\nIssues to fix:\n1. [warning/design] More than 8 distinct text-* sizes — pick a display/body scale and stay on it\n2. [error/render] Live preview root is empty — × — ×\n3. [error/render] × — ×\n4. [warning/structure] H1 present in source but not visible in live DOM\n\nRequirements: real useState where needed, no lorem, no TypeScript types, no imports, entry Component().\nDo not claim the preview compiles. The platform Babel-checks the result after you return. Never write “preview now compiles cleanly” or similar — if a tag is still open, close it. Hyphenated keys like 'canvas-tote': <svg> belong in const ICONS = { ... }, not as bare statements.",
  "description": "Field goods for people who still write things down. One catalog, human storefront and agent profile.",
  "policies": {
    "privacy": "/policies/privacy",
    "refund": "/policies/refund",
    "shipping": "/policies/shipping"
  },
  "products": [
    {
      id: "ember-roast-beans",
      sku: "EMBER-ROAST-",
      title: "Ember Roast Beans",
      description: "Small-batch roasted specialty coffee beans",
      images: [],
      price: 1800,
      currency: "usd",
      inventory: 24,
      gtin: "2000654768529",
      brand: "Copperline Coffee"
    },
    {
      id: "cloud-nine-mug",
      sku: "CLOUD-NINE-M",
      title: "Cloud Nine Mug",
      description: "Handcrafted ceramic mug for slow mornings",
      images: [],
      price: 2400,
      currency: "usd",
      inventory: 24,
      gtin: "2000511017131",
      brand: "Copperline Coffee"
    },
    {
      id: "trail-brew-kit",
      sku: "TRAIL-BREW-K",
      title: "Trail Brew Kit",
      description: "Complete portable pour-over brewing kit",
      images: [],
      price: 4200,
      currency: "usd",
      inventory: 24,
      gtin: "2000617695106",
      brand: "Copperline Coffee"
    }
  ]
} as StoreCatalog;

const PRODUCTS: StoreProduct[] = CATALOG.products;

function getProduct(id: string): StoreProduct | null {
  const key = String(id || "").toLowerCase();
  return (
    PRODUCTS.find(
      (p) =>
        p.id === id ||
        p.sku.toLowerCase() === key ||
        p.gtin === id
    ) || null
  );
}

function searchProducts(query?: string): StoreProduct[] {
  const q = String(query || "")
    .trim()
    .toLowerCase();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter((p) =>
    [p.title, p.description, p.brand, p.sku, p.id].join(" ").toLowerCase().includes(q)
  );
}

function formatMoney(cents: number, currency = "usd"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}

export default function CATALOG() {
  return null;
}
