function UseCases() {
  const cases = [
    {
      title: "Category capture",
      desc: "Rank when shoppers ask broad queries like ‘best protein powder’ or ‘eco yoga mats’.",
    },
    {
      title: "Answer coverage",
      desc: "Show up for questions about ingredients, materials, sizing, shipping, and returns.",
    },
    {
      title: "Product comparisons",
      desc: "Win when AI assistants compare you to competitors and recommend top picks.",
    },
    {
      title: "Branded queries",
      desc: "Control how AI describes your brand values, guarantees, and policies.",
    },
  ];

  return (
    <section id="use-cases" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Proven ecommerce use cases</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">Concrete ways StoreRank drives product discovery and sales.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((c, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <h3 className="text-white font-semibold">{c.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCases;
