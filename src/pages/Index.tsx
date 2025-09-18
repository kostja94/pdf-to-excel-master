import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <UseCases />
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <Testimonials />
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
