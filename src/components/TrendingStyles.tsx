import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import styleBalayage from "@/assets/style-balayage.jpg";
import styleNails from "@/assets/style-nails.jpg";
import styleMakeup from "@/assets/style-makeup.jpg";
import styleCurls from "@/assets/style-curls.jpg";
import styleSkincare from "@/assets/style-skincare.jpg";
import stylePixie from "@/assets/style-pixie.jpg";

const trendingStyles = [
  { image: styleBalayage, label: "Caramel Balayage", category: "Hair Color", saves: "2.4k" },
  { image: styleNails, label: "Minimal Nail Art", category: "Nails", saves: "1.8k" },
  { image: styleMakeup, label: "Warm Glam", category: "Makeup", saves: "3.1k" },
  { image: stylePixie, label: "Platinum Pixie", category: "Hair Cut", saves: "1.5k" },
  { image: styleSkincare, label: "Glass Skin", category: "Skincare", saves: "2.9k" },
  { image: styleCurls, label: "Styling Tools", category: "Hair Care", saves: "1.2k" },
];

const TrendingStyles = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
              Trending Now
            </h2>
            <p className="text-muted-foreground text-lg">
              The most-saved looks this week
            </p>
          </div>
          <button className="hidden md:inline-flex text-primary font-medium hover:underline underline-offset-4">
            View all →
          </button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {trendingStyles.map((style, index) => (
            <motion.div
              key={style.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 0 || index === 3 ? "md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${index === 0 || index === 3 ? "aspect-[3/4]" : "aspect-square"}`}>
                <img
                  src={style.image}
                  alt={style.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Save button */}
                <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-background">
                  <Heart className="w-4 h-4 text-accent" />
                </button>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block text-xs font-medium bg-primary/90 text-primary-foreground px-2 py-0.5 rounded-full mb-1.5">
                    {style.category}
                  </span>
                  <h3 className="text-primary-foreground font-display font-semibold text-lg">
                    {style.label}
                  </h3>
                  <p className="text-primary-foreground/80 text-xs flex items-center gap-1">
                    <Heart className="w-3 h-3 fill-current" /> {style.saves} saves
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingStyles;
