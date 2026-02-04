import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

import gastronomy1 from '@/assets/portfolio/gastronomy-1.jpg';
import events1 from '@/assets/portfolio/events-1.jpg';
import services1 from '@/assets/portfolio/services-1.jpg';
import personalDev1 from '@/assets/portfolio/personal-dev-1.jpg';
import medicine1 from '@/assets/portfolio/medicine-1.jpg';
import nutrition1 from '@/assets/portfolio/nutrition-1.jpg';

const reels = [
  {
    id: 1,
    title: 'Bastidores Gastronomia',
    thumbnail: gastronomy1,
  },
  {
    id: 2,
    title: 'Cobertura de Evento',
    thumbnail: events1,
  },
  {
    id: 3,
    title: 'Manifesto Corporativo',
    thumbnail: services1,
  },
  {
    id: 4,
    title: 'Depoimentos',
    thumbnail: personalDev1,
  },
  {
    id: 5,
    title: 'Clínica Médica',
    thumbnail: medicine1,
  },
  {
    id: 6,
    title: 'Nutrição & Saúde',
    thumbnail: nutrition1,
  },
];

const Videos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="videos" className="section-padding" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-caption text-muted-foreground mb-4">Produções audiovisuais</p>
          <h2 className="text-headline">
            Reels em <span className="italic">destaque</span>
          </h2>
        </motion.div>

        {/* Reels Grid - Vertical format like Instagram Reels */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {reels.map((reel, index) => (
            <motion.article
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Vertical aspect ratio like Reels (9:16) */}
              <div className="relative aspect-[9/16] overflow-hidden rounded-lg">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 
                           group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 border border-primary-foreground 
                             flex items-center justify-center bg-primary/80 backdrop-blur-sm
                             rounded-full"
                  >
                    <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                  </motion.div>
                </div>
                
                {/* Title at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-sm font-sans font-medium text-foreground leading-tight">
                    {reel.title}
                  </h3>
                </div>
                
                {/* Reels icon indicator */}
                <div className="absolute top-3 right-3">
                  <svg 
                    className="w-5 h-5 text-foreground" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
