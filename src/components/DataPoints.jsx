function DataPoints() {
  const stats = [
    { value: "+38%", label: "lift in AI search visibility" },
    { value: "2.1x", label: "more product mentions in answers" },
    { value: "+24%", label: "increase in PDP traffic" },
    { value: "<7 days", label: "to launch with Shopify" },
  ];

  return (
    <section className="py-20 sm:py-24 border-y border-white/10 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6 text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-slate-300 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DataPoints;
