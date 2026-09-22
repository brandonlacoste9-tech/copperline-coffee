"use client";
export default function Header({ onSearch, cartCount, searchTerm }: Record<string, any>) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="font-semibold tracking-[-0.02em] text-xl">Copperline Coffee</a>
          <nav className="hidden md:flex items-center gap-6 text-sm tracking-[0.16em] uppercase">
            <a href="#shop" className="hover:text-zinc-500">Shop</a>
            <a href="#catalog" className="hover:text-zinc-500">Catalog</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-64 hidden md:block">
            <input
              type="text"
              value={searchTerm}
              onChange={(e: any) => onSearch(e.target.value)}
              placeholder="Search"
              className="w-full bg-zinc-50 border border-zinc-200 px-4 py-1.5 text-sm focus:outline-none focus:border-zinc-900"
            />
          </div>
          <button className="p-2" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
          <button className="p-2 relative" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 text-[10px] bg-zinc-900 text-white w-4 h-4 flex items-center justify-center tabular-nums">{cartCount}</span>
            )}
          </button>
          <a href="/admin/orders" className="text-xs tracking-[0.16em] uppercase border border-zinc-900 px-3 py-1.5 hover:bg-zinc-900 hover:text-white">Admin</a>
        </div>
      </div>
    </header>
  );
}
