import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookSpread1 from "@/assets/book-spread-1.jpg";
import bookSpread2 from "@/assets/book-spread-2.jpg";

const projects = [
  {
    id: 1,
    title: "ספר מורשת משפחתי",
    description: "ספר מפואר המתעד את ההיסטוריה העשירה של המשפחה בעיצוב מסורתי",
    image: bookCover1,
    category: "כריכה",
  },
  {
    id: 2,
    title: "אילן יוחסין משפחת טיים ואבטש יסאיס",
    description: "תיעוד שורשים וקשרים משפחתיים לאורך הדורות",
    image: bookCover2,
    category: "עמודים פנימיים",
  },
  {
    id: 3,
    title: "אילן יוחסין משפחת אננייה מנמנו",
    description: "ספר אלגנטי בסגנון מודרני עם צבעים חמים",
    image: bookSpread1,
    category: "כריכה",
  },
  {
    id: 4,
    title: "אילן יוחסין משפחת זיאמר",
    description: "תולדות טיים זיאמר איששו ווכה שרה",
    image: bookSpread2,
    category: "עמודים פנימיים",
  },
];

export function GallerySection() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-card relative">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
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
            {t('gallerySection.badge')}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            {t('gallerySection.title')}
          </h2>
          <div className="w-20 h-0.5 bg-gradient-gold mx-auto mb-8" />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('gallerySection.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
              onClick={() => {
                navigate(`/book/${project.id}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-elegant transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-book">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 right-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/20 text-gold rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-cream mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-cream/70">
                    {project.description}
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
