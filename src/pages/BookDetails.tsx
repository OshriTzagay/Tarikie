import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, Users, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookSpread1 from "@/assets/book-spread-1.jpg";
import bookSpread2 from "@/assets/book-spread-2.jpg";

interface Book {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  year: string;
  family: string;
  gallery: string[];
}

// Helper function to get book data with translations
const getBooksData = (t: (key: string) => string): Record<number, Book> => ({
  1: {
    id: 1,
    title: t('books.book1.title'),
    subtitle: t('books.book1.subtitle'),
    description: t('books.book1.description'),
    fullDescription: t('books.book1.fullDescription'),
    image: bookCover1,
    category: t('books.book1.category'),
    year: "2023",
    family: t('books.book1.family'),
    gallery: [bookCover1, bookSpread1, bookSpread2],
  },
  2: {
    id: 2,
    title: t('books.book2.title'),
    subtitle: t('books.book2.subtitle'),
    description: t('books.book2.description'),
    fullDescription: t('books.book2.fullDescription'),
    image: bookCover2,
    category: t('books.book2.category'),
    year: "2023",
    family: t('books.book2.family'),
    gallery: [bookCover2, bookSpread1, bookSpread2],
  },
  3: {
    id: 3,
    title: t('books.book3.title'),
    subtitle: t('books.book3.subtitle'),
    description: t('books.book3.description'),
    fullDescription: t('books.book3.fullDescription'),
    image: bookSpread1,
    category: t('books.book3.category'),
    year: "2024",
    family: t('books.book3.family'),
    gallery: [bookSpread1, bookCover1, bookCover2],
  },
  4: {
    id: 4,
    title: t('books.book4.title'),
    subtitle: t('books.book4.subtitle'),
    description: t('books.book4.description'),
    fullDescription: t('books.book4.fullDescription'),
    image: bookSpread2,
    category: t('books.book4.category'),
    year: "2024",
    family: t('books.book4.family'),
    gallery: [bookSpread2, bookCover2, bookCover1],
  },
});

export default function BookDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Get books with current language translations
  const books = getBooksData(t);
  const book = books[Number(id)];
  
  // Get other books for navigation
  const otherBooks = Object.values(books).filter(b => b.id !== Number(id));

  // ESC key handler for closing zoom
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedImage]);

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">{t('bookDetails.notFound')}</h1>
          <Button onClick={() => navigate("/")}>{t('bookDetails.backToHome')}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Book Cover */}
      <section className="relative pt-24 pb-8 bg-gradient-to-b from-card to-background overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button and Language Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex gap-3 flex-wrap"
          >
            <Button
              variant="outline"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const gallerySection = document.getElementById("gallery");
                  if (gallerySection) {
                    gallerySection.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
              className="group"
            >
              <ArrowRight className={`${i18n.language === 'he' ? 'mr-2' : 'ml-2'} h-4 w-4 transition-transform group-hover:translate-x-1`} />
              <span>{t('bookDetails.backToGallery')}</span>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Book Cover Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-book">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
            </motion.div>

            {/* Book Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block text-sm font-body text-gold tracking-widest uppercase mb-4">
                {t('bookDetails.projectLabel')}
              </span>
              
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-tight">
                {book.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 font-body">
                {book.subtitle}
              </p>

              <div className="w-20 h-0.5 bg-gradient-gold mb-8" />

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5 text-gold" />
                  <span className="font-body">{book.family}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5 text-gold" />
                  <span className="font-body">{book.year}</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                {book.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full Description Section */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-center text-foreground">
              {t('bookDetails.aboutBook')}
            </h2>
            <div className="w-20 h-0.5 bg-gradient-gold mx-auto mb-6" />
            
            <div className="prose max-w-none text-muted-foreground">
              {book.fullDescription.split('\n').filter((p, i) => i < 5 && p.trim()).map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="mb-3 leading-relaxed text-base font-body text-right"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section with Swiper */}
      <section className="py-10 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-foreground">
              {t('bookDetails.gallery')}
            </h2>
            <div className="w-20 h-0.5 bg-gradient-gold mx-auto mb-4" />
            <p className="text-lg text-muted-foreground font-body">
              {t('bookDetails.gallerySubtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ 
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="gallery-swiper"
              dir="rtl"
              loop={true}
            >
              {book.gallery.map((image, index) => (
                <SwiperSlide key={index}>
                  <div 
                    className="group relative overflow-hidden rounded-xl shadow-elegant hover:shadow-book transition-all duration-500 cursor-pointer h-full"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-card">
                      <img
                        src={image}
                        alt={`${book.title} - ${t('bookDetails.imageNumber')} ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
                    <div className={`absolute bottom-4 ${i18n.language === 'he' ? 'right-4' : 'left-4'} bg-gold/90 text-background px-3 py-1 rounded-full text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none`}>
                      {t('bookDetails.clickToZoom')}
                    </div>
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-xs font-body">
                      {index + 1} / {book.gallery.length}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button className="swiper-button-prev-custom p-4 rounded-full bg-gold hover:bg-gold/90 text-background transition-all duration-300 hover:scale-110 shadow-elegant disabled:opacity-50 disabled:cursor-not-allowed">
                <ChevronRight className="h-6 w-6" />
              </button>
              <span className="text-sm text-muted-foreground font-body">{t('bookDetails.swipeInstruction')}</span>
              <button className="swiper-button-next-custom p-4 rounded-full bg-gold hover:bg-gold/90 text-background transition-all duration-300 hover:scale-110 shadow-elegant disabled:opacity-50 disabled:cursor-not-allowed">
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox for Zoom */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-4 left-4 p-4 rounded-full bg-card/90 backdrop-blur-sm border-2 border-border hover:border-gold transition-all duration-300 hover:scale-110 z-10 shadow-elegant"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-7 w-7 text-foreground" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage}
              alt={t('bookDetails.imageAlt')}
              className="w-auto h-full max-w-[95vw] object-contain rounded-lg shadow-book"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm text-muted-foreground shadow-elegant">
              {t('bookDetails.closeZoom')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Other Books Navigation */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-foreground">
              {t('bookDetails.otherBooks')}
            </h2>
            <div className="w-20 h-0.5 bg-gradient-gold mx-auto mb-4" />
            <p className="text-lg text-muted-foreground font-body">
              {t('bookDetails.otherBooksSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {otherBooks.map((otherBook, index) => (
              <motion.div
                key={otherBook.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group cursor-pointer"
                onClick={() => {
                  navigate(`/book/${otherBook.id}`);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <div className="relative overflow-hidden rounded-xl shadow-elegant transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-book">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={otherBook.image}
                      alt={otherBook.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 right-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gold/20 text-gold rounded-full mb-2">
                      {otherBook.category}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-cream mb-1">
                      {otherBook.title}
                    </h3>
                    <p className="text-sm text-cream/70">
                      {otherBook.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-foreground">
              {t('bookDetails.createBook')}
            </h2>
            <p className="text-base text-muted-foreground mb-6 font-body">
              {t('bookDetails.createBookSubtitle')}
            </p>
            <Button
              size="lg"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
              className="bg-gold hover:bg-gold/90 text-background font-heading text-lg px-8 py-6"
            >
              {t('bookDetails.contactNow')}
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

