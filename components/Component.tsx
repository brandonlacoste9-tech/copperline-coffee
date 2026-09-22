"use client";
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductDetail from "./ProductDetail";
import ProductGrid from "./ProductGrid";
export default function Component() {
  const [selected, setSelected] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const PRODUCTS = [
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
  ];

  const ICONS = {
    "ember-roast-beans": <svg viewBox="0 0 96 96" className="w-20 h-20 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="1.25"><circle cx="48" cy="48" r="22"/><path d="M36 42c4-6 16-6 20 0"/><path d="M30 58h36"/></svg>,
    "cloud-nine-mug": <svg viewBox="0 0 96 96" className="w-20 h-20 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="1.25"><rect x="28" y="24" width="32" height="44" rx="2"/><path d="M60 34h8c3 0 5 3 5 6v12c0 3-2 6-5 6h-8"/></svg>,
    "trail-brew-kit": <svg viewBox="0 0 96 96" className="w-20 h-20 text-zinc-800" fill="none" stroke="currentColor" strokeWidth="1.25"><path d="M30 30l18 36 18-36"/><circle cx="48" cy="70" r="4"/></svg>
  };

  function formatMoney(cents: any) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cents / 100);
  }

  function getChannel() {
    if (typeof window === 'undefined') return 'human';
    const params = (typeof window === "undefined" ? new URLSearchParams() : (typeof window === "undefined" ? new URLSearchParams() : (typeof window === "undefined" ? new URLSearchParams() : new URLSearchParams(window.location.search))));
    return params.get('channel') || 'human';
  }

  const filtered = PRODUCTS.filter((p: any) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuy = async (sku: any, quantity: any) => {
    const channel = getChannel();
    const result = await (window as any).createCheckoutSession?.({ sku, quantity, channel: channel });
    if (result?.url) {
      window.location.href = result.url;
    } else {
      alert('Checkout attaches on eject');
    }
    setCartCount((c: any) => c + quantity);
    setSelected(null);
  };

  const handleNewsletter = (e: any) => {
    e.preventDefault();
    setNewsletterSuccess(true);
    setTimeout(() => setNewsletterSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-9 flex items-center text-xs tracking-[0.2em] uppercase border-b-2 border-[#E24A2A]">
          Free shipping on orders over $50
        </div>
      </div>

      <Header onSearch={setSearchTerm} cartCount={cartCount} searchTerm={searchTerm} />

      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-20 pb-16">
        <h1 className="text-6xl md:text-7xl font-semibold tracking-[-0.04em] leading-none">
          Copperline Coffee.<br />Specialty coffee beans and brewing gear<span className="text-[#E24A2A]">.</span>
        </h1>
      </section>

      <div id="catalog" className="max-w-7xl mx-auto px-6 md:px-8 pb-8 text-xs tracking-[0.2em] uppercase text-zinc-500">
        03 OBJECTS / 01 COLLECTION
      </div>

      <section id="shop" className="store-contrast w-full bg-zinc-950 text-zinc-50 py-20 md:py-28">
        <div className="store-contrast-inner mx-auto max-w-7xl px-6 md:px-8">
          <ProductGrid
            products={filtered}
            onSelect={setSelected}
            formatMoney={formatMoney}
            ICONS={ICONS}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-8 py-20 border-b">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-2">Fresh daily</div>
            <div className="text-lg tracking-[-0.02em]">Small-batch roasted every morning.</div>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-2">Hand selected</div>
            <div className="text-lg tracking-[-0.02em]">Sourced from the best farms.</div>
          </div>
          <div>
            <div className="text-xs tracking-[0.2em] uppercase mb-2">Built to last</div>
            <div className="text-lg tracking-[-0.02em]">Gear made for daily ritual.</div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 grid grid-cols-3 text-center text-xs tracking-[0.16em] uppercase border-b">
        <div>Free shipping over $50</div>
        <div>30-day returns</div>
        <div>Made to last</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <form onSubmit={handleNewsletter} className="max-w-sm">
          <div className="text-xs tracking-[0.2em] uppercase mb-3">Stay in the know</div>
          <div className="flex">
            <input type="email" placeholder="Email address" className="flex-1 border border-zinc-300 px-4 py-3 text-sm" required />
            <button type="submit" className="border border-l-0 border-zinc-900 px-6 text-xs tracking-[0.16em] uppercase hover:bg-zinc-900 hover:text-white">Subscribe</button>
          </div>
          {newsletterSuccess && <div className="text-xs mt-2 text-emerald-600">Thanks — you’re on the list.</div>}
        </form>
      </div>

      <Footer />

      <ProductDetail
        product={selected}
        onClose={() => setSelected(null)}
        formatMoney={formatMoney}
        ICONS={ICONS}
        onBuy={handleBuy}
      />
    </div>
  );
}
