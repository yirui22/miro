import { motion } from "framer-motion";
import { Camera, Cpu, Eye, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Upload Your Inspo",
    description: "Snap a photo or paste a link from Instagram or Pinterest — any look you love.",
  },
  {
    icon: Cpu,
    title: "AI Matches You",
    description: "Our AI analyzes technique, color, and style to find stylists who've done similar work.",
  },
  {
    icon: Eye,
    title: "Explore Portfolios",
    description: "Browse before & afters, read reviews, compare prices, and check availability.",
  },
  {
    icon: CalendarCheck,
    title: "Book Instantly",
    description: "Found the one? Book your appointment in seconds — no back-and-forth.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-hero-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            From inspiration to appointment in four simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center group"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-soft-blush mb-6 group-hover:shadow-glow transition-shadow duration-300">
                <step.icon className="w-8 h-8 text-primary" />
              </div>

              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center mx-auto mb-0 relative">
                {index + 1}
              </div>

              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
