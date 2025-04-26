import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import ForgeKids from "./components/ForgeKids";
import WhyForge from "./components/WhyForge";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mt-14 mb-10 space-y-8 md:max-w-9/10 lg:max-w-6xl mx-auto">
      <Header />
      <main className="space-y-8">
        <Hero />
        <Highlights />
        <ForgeKids />
        <WhyForge />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
