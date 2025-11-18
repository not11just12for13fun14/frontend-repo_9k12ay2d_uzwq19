import { Sparkles } from "lucide-react";

function Hero() {
  return (
    <section id="hero" className="relative pt-28 pb-24 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(56,189,248,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_10%,rgba(59,130,246,0.12),transparent)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-200">
            <Sparkles className="h-3.5 w-3.5" />
            Built for AI search visibility
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Rank higher on AI assistants. Turn questions into product discovery.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300">
            StoreRank helps ecommerce brands win in generative engines like ChatGPT by optimizing your product content, answers, and presence — so shoppers find you first.
          </p>
          <div id="cta" className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow hover:opacity-90 transition">
              Start your free trial
            </a>
            <a href="#how" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5 transition">
              See how it works
            </a>
          </div>
          <p className="mt-3 text-sky-200/90 text-sm">
            Fast setup with Shopify. No code required.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
