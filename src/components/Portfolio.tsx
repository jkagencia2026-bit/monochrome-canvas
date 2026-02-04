import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Portfolio images - Gastronomia
import gastronomy1 from '@/assets/portfolio/gastronomy-1.jpg';
import gastronomy2 from '@/assets/portfolio/gastronomy-2.jpg';
import gastronomy3 from '@/assets/portfolio/gastronomy-3.jpg';
import gastronomy4 from '@/assets/portfolio/gastronomy-4.jpg';
import gastronomy5 from '@/assets/portfolio/gastronomy-5.jpg';
import gastronomy6 from '@/assets/portfolio/gastronomy-6.jpg';
import gastronomy7 from '@/assets/portfolio/gastronomy-7.jpg';
import gastronomy8 from '@/assets/portfolio/gastronomy-8.jpg';
import gastronomy9 from '@/assets/portfolio/gastronomy-9.jpg';
// Other categories
import medicine1 from '@/assets/portfolio/medicine-1.jpg';
import nutrition1 from '@/assets/portfolio/nutrition-1.jpg';
import services1 from '@/assets/portfolio/services-1.jpg';
import personalDev1 from '@/assets/portfolio/personal-dev-1.jpg';
import events1 from '@/assets/portfolio/events-1.jpg';

interface Category {
  id: string;
  name: string;
  coverImage: string;
  images: string[];
}

const categories: Category[] = [
  {
    id: 'gastronomia',
    name: 'Gastronomia',
    coverImage: gastronomy1,
    images: [gastronomy1, gastronomy2, gastronomy3, gastronomy4, gastronomy5, gastronomy6, gastronomy7, gastronomy8, gastronomy9],
  },
  {
    id: 'medicina',
    name: 'Medicina',
    coverImage: medicine1,
    images: Array(10).fill(medicine1),
  },
  {
    id: 'nutricao',
    name: 'Nutrição',
    coverImage: nutrition1,
    images: Array(10).fill(nutrition1),
  },
  {
    id: 'servicos',
    name: 'Serviços',
    coverImage: services1,
    images: Array(10).fill(services1),
  },
  {
    id: 'desenvolvimento-pessoal',
    name: 'Desenvolvimento Pessoal',
    coverImage: personalDev1,
    images: Array(10).fill(personalDev1),
  },
  {
    id: 'eventos',
    name: 'Eventos',
    coverImage: events1,
    images: Array(10).fill(events1),
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const openCarousel = (category: Category) => {
    setSelectedCategory(category);
    setCurrentImageIndex(0);
  };

  const closeCarousel = () => {
    setSelectedCategory(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedCategory) {
      setCurrentImageIndex((prev) => 
        prev === selectedCategory.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedCategory) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedCategory.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <section id="portfolio" className="section-padding bg-secondary" ref={ref}>
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-caption text-muted-foreground mb-4">Nosso trabalho</p>
            <h2 className="text-headline">
              Projetos <span className="italic">selecionados</span>
            </h2>
          </motion.div>

          {/* Category Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openCarousel(category)}
                className="group cursor-pointer"
              >
                <div className="image-hover-zoom image-hover-contrast aspect-[4/5] mb-6 relative">
                  <img
                    src={category.coverImage}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Photo count badge */}
                  <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 text-sm">
                    {category.images.length} fotos
                  </div>
                </div>
                <h3 className="text-xl font-serif group-hover:italic transition-all duration-300">
                  {category.name}
                </h3>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Modal */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-md flex items-center justify-center"
          >
            {/* Close button */}
            <button
              onClick={closeCarousel}
              className="absolute top-6 right-6 z-10 p-3 bg-muted hover:bg-accent transition-colors"
              aria-label="Fechar"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Category title */}
            <div className="absolute top-6 left-6 z-10">
              <p className="text-caption text-muted-foreground mb-1">
                {currentImageIndex + 1} / {selectedCategory.images.length}
              </p>
              <h3 className="text-2xl font-serif">{selectedCategory.name}</h3>
            </div>

            {/* Main image */}
            <div className="w-full h-full flex items-center justify-center px-20 py-24">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={selectedCategory.images[currentImageIndex]}
                  alt={`${selectedCategory.name} - Foto ${currentImageIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-full max-h-full object-contain"
                />
              </AnimatePresence>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-muted hover:bg-accent transition-colors"
              aria-label="Foto anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-muted hover:bg-accent transition-colors"
              aria-label="Próxima foto"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Thumbnail strip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90vw] pb-2">
              {selectedCategory.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 overflow-hidden transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'ring-2 ring-foreground opacity-100' 
                      : 'opacity-50 hover:opacity-75'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
