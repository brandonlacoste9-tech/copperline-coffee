export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-y-12">
        <div>
          <div className="font-semibold mb-2">Copperline Coffee</div>
          <div className="text-zinc-500">Specialty coffee beans and brewing gear</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 text-zinc-500">
          <a href="/policies/shipping" className="hover:text-zinc-900">Shipping</a>
          <a href="/policies/refund" className="hover:text-zinc-900">Returns</a>
          <a href="/policies/privacy" className="hover:text-zinc-900">Privacy</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-12 pt-8 border-t text-xs text-zinc-400">© Copperline Coffee</div>
    </footer>
  );
}
