import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
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
              {t("footer.brand")}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t("footer.tagline")}
            </p>
          </motion.div>

          <div className="w-24 h-0.5 bg-gradient-gold mb-6" />

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#hero" className="text-muted-foreground hover:text-gold transition-colors">
              {t("footer.home")}
            </a>
            <a href="#about" className="text-muted-foreground hover:text-gold transition-colors">
              {t("footer.about")}
            </a>
            <a href="#process" className="text-muted-foreground hover:text-gold transition-colors">
              {t("footer.process")}
            </a>
            <a href="#gallery" className="text-muted-foreground hover:text-gold transition-colors">
              {t("footer.gallery")}
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-gold transition-colors">
              {t("footer.testimonials")}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-gold transition-colors">
              {t("footer.contact")}
            </a>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {currentYear} {t("footer.brand")}. {t("footer.rights")}. 
            <span className="flex items-center gap-1">
              {t("footer.builtWith")}
              <Heart className="h-4 w-4 text-gold fill-gold" />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
