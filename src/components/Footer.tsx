import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-gold mb-3 tracking-wide">
              טָריקֶה
            </h3>
            <p className="text-muted-foreground text-sm">
              ספרי אילן יוחסין למשפחות
            </p>
          </motion.div>

          <div className="w-24 h-0.5 bg-gradient-gold mb-6" />

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#hero" className="text-muted-foreground hover:text-gold transition-colors">
              בית
            </a>
            <a href="#about" className="text-muted-foreground hover:text-gold transition-colors">
              מי אנחנו
            </a>
            <a href="#process" className="text-muted-foreground hover:text-gold transition-colors">
              תהליך העבודה
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-gold transition-colors">
              עבודות
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-gold transition-colors">
              המלצות
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-gold transition-colors">
              צור קשר
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {currentYear} טָריקֶה. כל הזכויות שמורות. 
            <span className="flex items-center gap-1">
              נבנה באהבה
              <Heart className="h-4 w-4 text-gold fill-gold" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
