import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { href: "#hero", label: t('nav.home') },
    { href: "#about", label: t('nav.about') },
    { href: "#process", label: t('nav.process') },
    { href: "#gallery", label: t('nav.gallery') },
    { href: "#testimonials", label: t('nav.testimonials') },
    { href: "#contact", label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'he' ? 'am' : 'he';
    i18n.changeLanguage(newLang);
  };

  // Update document direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handleNavClick = (href: string) => {
    const isHomePage = location.pathname === "/";
    
    if (!isHomePage) {
      // אם לא בדף הבית, נווט לדף הבית ואז גלול
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // אם בדף הבית, פשוט גלול
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => handleNavClick("#hero")}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-baseline gap-1 cursor-pointer"
          >
            <span className="font-heading text-2xl md:text-3xl font-bold text-gold tracking-wide">
              {t('hero.brand')}
            </span>
            <span className="text-xs md:text-sm text-muted-foreground font-body">
              {i18n.language === 'he' ? 'ספרי מורשת' : 'የውርስ መጽሐፍት'}
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="font-body text-sm font-medium text-foreground/70 hover:text-gold transition-colors relative group tracking-wide"
              >
                {link.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            {/* <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="group"
            >
              <Languages className={`h-4 w-4 ${i18n.language === 'he' ? 'ml-1' : 'mr-1'} text-gold transition-transform group-hover:rotate-12`} />
              <span className="text-sm font-medium">{i18n.language === 'he' ? t('language.amharic') : t('language.hebrew')}</span>
            </Button> */}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="group"
            >
              <Languages className="h-5 w-5 text-gold transition-transform group-hover:rotate-12" />
            </Button>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="font-body text-base font-medium text-foreground/80 hover:text-gold transition-colors py-3 border-b border-border/30 last:border-b-0 text-right"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
