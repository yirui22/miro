import { motion } from "framer-motion";
import { Upload, Search, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-beauty.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beauty inspiration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-soft-blush px-4 py-1.5 text-sm font-medium text-accent mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Beauty Discovery
            </span>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-foreground mb-6">
              Show us what
              <br />
              you want.
              <br />
              <span className="text-gradient-warm italic">We'll find who</span>
              <br />
              <span className="text-gradient-warm italic">can do it.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 font-body leading-relaxed">
              Upload any inspiration photo. Our AI matches you with local stylists 
              who've done similar work — see their portfolios, prices, and book instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              <Upload className="w-5 h-5" />
              Upload Inspiration
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              <Search className="w-5 h-5" />
              Browse Stylists
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            Join 10,000+ beauty lovers discovering their perfect stylist
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
