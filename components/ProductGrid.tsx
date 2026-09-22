export default function ProductGrid({ products, onSelect, formatMoney, ICONS }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-200">
      {products.map((product, index) => (
        <div key={product.id} onClick={() => onSelect(product)} className="bg-white group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden bg-zinc-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              {ICONS[product.id]}
            </div>
            <div className="absolute top-4 left-4 text-[10px] tracking-[0.2em] tabular-nums text-zinc-500">
              {String(index + 1).padStart(2, '0')}
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); onSelect(product); }}
              className="absolute bottom-4 right-4 px-4 py-1.5 text-xs tracking-[0.16em] uppercase border border-zinc-900 bg-white hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Quick add
            </button>
          </div>
          <div className="p-5 flex justify-between items-baseline">
            <div>
              <div className="font-medium">{product.title}</div>
              <div className="text-sm text-zinc-500">{product.description}</div>
            </div>
            <div className="font-mono text-sm tabular-nums">{formatMoney(product.price)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
