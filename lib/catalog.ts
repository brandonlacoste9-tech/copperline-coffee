import type { StoreCatalog, StoreProduct } from "./commerce-types";

export const CATALOG: StoreCatalog = {
  "merchant": "Copperline Coffee",
  "brand": "Copperline Coffee",
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

export const PRODUCTS: StoreProduct[] = CATALOG.products;

export function getProduct(id: string): StoreProduct | null {
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

export function searchProducts(query?: string): StoreProduct[] {
  const q = String(query || "")
    .trim()
    .toLowerCase();
  if (!q) return PRODUCTS;
  return PRODUCTS.filter((p) =>
    [p.title, p.description, p.brand, p.sku, p.id].join(" ").toLowerCase().includes(q)
  );
}

export function formatMoney(cents: number, currency = "usd"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(cents / 100);
}
