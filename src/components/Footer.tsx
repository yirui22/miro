import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-display text-xl font-bold text-foreground">Glow</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Visual-first beauty discovery powered by AI. Find your perfect stylist today.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Discover</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Visual Search</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Browse Stylists</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Trending Looks</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Categories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Professionals</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Join as Stylist</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Portfolio Tools</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 Glow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
