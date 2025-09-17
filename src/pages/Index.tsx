import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ConverterLinks from "@/components/ConverterLinks";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ConverterLinks />
        <section id="features">
          <Features />
        </section>
        <UseCases />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
