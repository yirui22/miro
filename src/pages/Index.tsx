import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import TrendingStyles from "@/components/TrendingStyles";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <Hero />
      <HowItWorks />
      <TrendingStyles />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
