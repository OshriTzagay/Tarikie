import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="רקע עם ספרים עתיקים"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 border border-gold/20 rounded-full hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-24 h-24 border border-gold/10 rounded-full hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex items-center justify-center gap-5"
          >
            <span className="inline-block font-heading text-2xl md:text-3xl font-bold text-gold tracking-wider mb-3">
              {t('hero.brand')}
            </span>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30">
              {/* <Sparkles className="h-4 w-4 text-gold" /> */}
              <span className="text-gold text-sm font-medium">{t('hero.tagline')}</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-cream leading-tight tracking-tight"
          >
            {t('hero.title')}
            <br />
            <span className="text-gradient-gold">{t('hero.titleHighlight')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-cream/80 mb-6 max-w-2xl mx-auto font-body leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-cream/60 mb-10 max-w-xl mx-auto font-body"
          >
            {t('hero.features')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">{t('hero.startButton')}</a>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <a href="#process">{t('hero.howButton')}</a>
            </Button>
          </motion.div>

          {/* Scroll Indicator - Below buttons */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 inline-flex"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-1"
            >
              <ChevronDown className="h-8 w-8 text-gold drop-shadow-lg" />
              <span className="text-xs text-gold/80 font-body whitespace-nowrap">{t('hero.scrollDown')}</span>
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
