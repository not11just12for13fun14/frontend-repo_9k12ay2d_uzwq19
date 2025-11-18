import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import DataPoints from "./components/DataPoints";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_0%_0%,rgba(59,130,246,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_100%_10%,rgba(56,189,248,0.08),transparent)]" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <UseCases />
        <DataPoints />
        <Pricing />
        <FAQ />
        <footer className="py-12 text-center text-slate-400 text-sm">© {new Date().getFullYear()} StoreRank — Improve visibility on AI search</footer>
      </main>
    </div>
  );
}

export default App;
