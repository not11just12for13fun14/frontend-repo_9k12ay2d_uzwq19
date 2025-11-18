import { Menu, Store } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center shadow ring-1 ring-white/20">
            <Store className="h-5 w-5 text-white" />
          </div>
          <span className="text-white font-semibold tracking-tight">StoreRank</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/80">
          <a href="#how" className="hover:text-white transition">How it works</a>
          <a href="#use-cases" className="hover:text-white transition">Use cases</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#pricing" className="hidden sm:inline-flex px-3 py-2 text-sm rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition">View pricing</a>
          <a href="#cta" className="inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow hover:opacity-90 transition">Start free trial</a>
          <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-white/10 text-white/80">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
