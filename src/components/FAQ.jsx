function FAQ() {
  const faqs = [
    {
      q: "How quickly can we get live?",
      a: "Most brands launch in under a week. Connect Shopify, review the suggested optimizations, and publish in one click.",
    },
    {
      q: "Do we need developers to use this?",
      a: "No. Non-technical teams use StoreRank daily. We handle the AI and formatting for each assistant.",
    },
    {
      q: "Will this impact our SEO?",
      a: "Improvements focus on AI assistant visibility while preserving your on-site SEO. You control what gets published.",
    },
    {
      q: "How do you measure results?",
      a: "We track rankings, product mentions, and inbound traffic from AI engines, plus downstream PDP sessions.",
    },
    {
      q: "What about privacy and brand safety?",
      a: "We keep your data secure and only publish approved content. You can set guardrails for tone and claims.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Frequently asked questions</h2>
          <p className="mt-2 text-slate-300">Straight answers to common buyer questions.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
              <div className="text-white font-semibold">{f.q}</div>
              <div className="mt-2 text-slate-300 text-sm">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
