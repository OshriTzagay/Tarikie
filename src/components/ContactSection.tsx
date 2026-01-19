import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "וואטסאפ",
    value: "054-123-4567",
    href: "https://wa.me/972541234567",
    primary: true,
  },
  {
    icon: Phone,
    label: "טלפון",
    value: "054-123-4567",
    href: "tel:+972541234567",
  },
  {
    icon: Mail,
    label: "אימייל",
    value: "info@tarikie.com",
    href: "mailto:info@tarikie.com",
  },
];

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "ההודעה נשלחה!",
      description: "נחזור אליך בהקדם.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gold rounded-full blur-3xl" />
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
            צרו קשר
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            בואו נתחיל
          </h2>
          <div className="w-20 h-0.5 bg-gradient-gold mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            רוצים לשמור את סיפור המשפחה שלכם? דברו איתנו
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card border border-border rounded-xl p-8 shadow-elegant">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-foreground">
                דרכי התקשרות
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.label === "וואטסאפ" ? "_blank" : undefined}
                    rel={method.label === "וואטסאפ" ? "noopener noreferrer" : undefined}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                      method.primary 
                        ? "bg-gradient-gold text-primary-foreground hover:opacity-90" 
                        : "bg-background hover:bg-gold/5 group"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      method.primary 
                        ? "bg-primary-foreground/20" 
                        : "bg-gold/10 group-hover:bg-gold/20"
                    }`}>
                      <method.icon className={`h-6 w-6 ${
                        method.primary ? "text-primary-foreground" : "text-gold"
                      }`} />
                    </div>
                    <div>
                      <p className={`text-sm ${method.primary ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                        {method.label}
                      </p>
                      <p className={`font-semibold text-lg ${
                        method.primary ? "text-primary-foreground" : "text-foreground"
                      }`}>
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-elegant">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" />
                <div>
                  <p className="font-medium text-foreground">שעות פעילות</p>
                  <p className="text-sm text-muted-foreground">
                    ראשון - חמישי: 09:00 - 18:00 | שישי: 09:00 - 13:00
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-xl p-8 shadow-elegant space-y-6"
            >
              <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">
                השאירו פרטים
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                מלאו את הפרטים ונחזור אליכם בהקדם
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    שם מלא *
                  </label>
                  <Input
                    placeholder="הכניסו את שמכם"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background border-border focus:border-gold"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    טלפון *
                  </label>
                  <Input
                    type="tel"
                    placeholder="050-000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="bg-background border-border focus:border-gold"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    ספרו לנו על המשפחה
                  </label>
                  <Textarea
                    placeholder="כמה אתם בני המשפחה? מאיפה הגעתם לארץ?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="bg-background border-border focus:border-gold resize-none"
                  />
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="h-4 w-4 ml-2" />
                שלחו פרטים
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
