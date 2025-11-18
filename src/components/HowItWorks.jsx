import { ListChecks, Search, MessageSquare } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Connect & scan",
    desc: "Link your Shopify store. We analyze your catalog and current visibility on AI assistants.",
  },
  {
    icon: MessageSquare,
    title: "Optimize answers",
    desc: "Generate AI-ready product descriptions and FAQs that map to how people actually ask.",
  },
  {
    icon: ListChecks,
    title: "Publish & track",
    desc: "Ship changes with one click and monitor rankings, mentions, and product discovery.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="py-20 sm:py-24 border-t border-white/10 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">How StoreRank works</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">Simple steps to improve visibility across ChatGPT-style engines.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
