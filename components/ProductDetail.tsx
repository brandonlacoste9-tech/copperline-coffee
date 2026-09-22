export default function ProductDetail({ product, onClose, formatMoney, ICONS, onBuy }) {
  const [qty, setQty] = useState(1);
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white w-full max-w-5xl grid md:grid-cols-2 overflow-hidden" onClick={e => e.stopPropagation()}>
        <div className="aspect-[4/5] md:aspect-auto bg-zinc-100 flex items-center justify-center relative">
          {ICONS[product.id]}
          <button onClick={onClose} className="absolute top-4 right-4 text-xs tracking-[0.16em] uppercase">Close</button>
        </div>
        <div className="p-8 md:p-12 flex flex-col">
          <div className="flex-1">
            <div className="uppercase tracking-[0.2em] text-xs text-zinc-500 mb-2">{product.brand}</div>
            <h2 className="text-4xl tracking-[-0.04em] font-semibold mb-4">{product.title}</h2>
            <div className="font-mono text-xl mb-6">{formatMoney(product.price)}</div>
            <p className="text-zinc-600 leading-relaxed mb-8">{product.description}</p>
            <div className="text-xs tracking-[0.16em] text-zinc-500 space-y-1 mb-8">
              <div>GTIN {product.gtin}</div>
              <div>SKU {product.sku}</div>
            </div>
          </div>
          <div className="flex items-center gap-4 border-t pt-6">
            <div className="flex border border-zinc-200">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2">-</button>
              <div className="px-6 py-2 tabular-nums border-x">{qty}</div>
              <button onClick={() => setQty(qty + 1)} className="px-4 py-2">+</button>
            </div>
            <button onClick={() => onBuy(product.sku, qty)} className="flex-1 py-3 text-xs tracking-[0.16em] uppercase border border-zinc-900 hover:bg-zinc-900 hover:text-white">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
