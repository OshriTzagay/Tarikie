import { motion } from "framer-motion";
import { Heart, Target, Shield, Clock, HandHeart, Link } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ValuesSection() {
  const { t } = useTranslation();

  const values = [
    {
      icon: Heart,
      title: t("values.value1.title"),
      description: t("values.value1.description"),
    },
    {
      icon: Target,
      title: t("values.value2.title"),
      description: t("values.value2.description"),
    },
    {
      icon: Shield,
      title: t("values.value3.title"),
      description: t("values.value3.description"),
    },
    {
      icon: Clock,
      title: t("values.value4.title"),
      description: t("values.value4.description"),
    },
    {
      icon: HandHeart,
      title: t("values.value5.title"),
      description: t("values.value5.description"),
    },
    {
      icon: Link,
      title: t("values.value6.title"),
      description: t("values.value6.description"),
    },
  ];
  return (
    <section id="values" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body text-gold tracking-widest uppercase mb-4 block">
            {t("values.badge")}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {t("values.title")}
          </h2>
          <div className="w-20 h-0.5 bg-gradient-gold mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("values.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group"
            >
              <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-xl hover:border-gold/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-gold transition-all duration-300">
                  <value.icon className="h-6 w-6 text-gold group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
