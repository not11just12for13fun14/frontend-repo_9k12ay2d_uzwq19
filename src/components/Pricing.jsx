function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      per: "forever",
      features: [
        "Connect Shopify",
        "Scan up to 100 products",
        "Basic AI search insights",
      ],
      cta: "Start free",
    },
    {
      name: "Growth",
      price: "$99",
      per: "/mo",
      features: [
        "Unlimited products",
        "AI-optimized answers",
        "Rank tracking & mentions",
        "Priority support",
      ],
      highlight: true,
      cta: "Start 14-day trial",
    },
    {
      name: "Scale",
      price: "Custom",
      per: "",
      features: [
        "Multi-store & markets",
        "Advanced reporting",
        "SSO & permissions",
        "Dedicated manager",
      ],
      cta: "Contact sales",
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-2 text-slate-300">Pick a plan that fits your growth stage. Upgrade anytime.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border ${p.highlight ? 'border-cyan-400/40 ring-1 ring-cyan-400/30' : 'border-white/10'} bg-slate-800/40 p-6 flex flex-col`}>
              <div className="flex-1">
                <div className="text-slate-200/90 text-sm font-medium">{p.name}</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <div className="text-4xl font-bold text-white">{p.price}</div>
                  <div className="text-slate-300">{p.per}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#cta" className={`mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium ${p.highlight ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white' : 'border border-white/10 text-slate-200 hover:bg-white/5'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
