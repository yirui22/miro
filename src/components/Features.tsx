import { motion } from "framer-motion";
import { Search, Star, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Visual Search",
    description:
      "Upload any photo — our AI identifies the technique, complexity, and style to match you with the right pro.",
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description:
      "Multi-dimensional ratings with before & after photos. See real results from real clients.",
  },
  {
    icon: Shield,
    title: "Vetted Professionals",
    description:
      "Every stylist is verified with certifications, portfolio reviews, and consistent quality checks.",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description:
      "See real-time availability and book in seconds. No DMs, no phone tag, no back-and-forth.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-warm italic">Glow</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Everything you need to find your perfect beauty professional, all in one place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-background border border-border hover:shadow-elevated hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-soft-blush flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
