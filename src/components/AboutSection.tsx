import { motion } from "framer-motion";
import { Heart, Users, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";

export function AboutSection() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-body text-gold tracking-widest uppercase mb-4 block">
              {t('about.badge')}
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {t('about.title')}
            </h2>
            <div className="w-20 h-0.5 bg-gradient-gold mx-auto mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-center mb-16"
          >
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              {t('about.description')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.mission')}
            </p>
          </motion.div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                {t('values.heritage.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('values.heritage.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                {t('values.personal.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('values.personal.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                {t('values.quality.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('values.quality.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
