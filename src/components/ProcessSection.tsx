import { motion } from "framer-motion";
import { Users, Mic, BookOpen, CheckCircle, PenTool, Gift } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ProcessSection() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Users,
      number: t("process.step1.number"),
      title: t("process.step1.title"),
      description: t("process.step1.description"),
    },
    {
      icon: Mic,
      number: t("process.step2.number"),
      title: t("process.step2.title"),
      description: t("process.step2.description"),
    },
    {
      icon: BookOpen,
      number: t("process.step3.number"),
      title: t("process.step3.title"),
      description: t("process.step3.description"),
    },
    {
      icon: CheckCircle,
      number: t("process.step4.number"),
      title: t("process.step4.title"),
      description: t("process.step4.description"),
    },
    {
      icon: PenTool,
      number: t("process.step5.number"),
      title: t("process.step5.title"),
      description: t("process.step5.description"),
    },
    {
      icon: Gift,
      number: t("process.step6.number"),
      title: t("process.step6.title"),
      description: t("process.step6.description"),
    },
  ];
  return (
    <section id="process" className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
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
            {t("process.badge")}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {t("process.title")}
          </h2>
          <div className="w-20 h-0.5 bg-gradient-gold mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("process.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-background border border-border rounded-xl p-8 h-full shadow-elegant hover:shadow-gold transition-all duration-500 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-4 right-6 font-heading text-5xl font-bold text-gold/20">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                
                <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
