import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

import gastronomy1 from '@/assets/portfolio/gastronomy-1.jpg';
import events1 from '@/assets/portfolio/events-1.jpg';
import services1 from '@/assets/portfolio/services-1.jpg';
import personalDev1 from '@/assets/portfolio/personal-dev-1.jpg';

const videos = [
  {
    id: 1,
    title: 'Restaurante Noir - Bastidores',
    duration: '2:45',
    thumbnail: gastronomy1,
  },
  {
    id: 2,
    title: 'Gala ACME 2024 - Cobertura Completa',
    duration: '5:12',
    thumbnail: events1,
  },
  {
    id: 3,
    title: 'Nexus Consulting - Manifesto',
    duration: '1:30',
    thumbnail: services1,
  },
  {
    id: 4,
    title: 'Método Evolução - Depoimentos',
    duration: '3:20',
    thumbnail: personalDev1,
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
            Vídeos em <span className="italic">destaque</span>
          </h2>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden mb-6">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 
                           group-hover:scale-105 transition-all duration-700"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 md:w-20 md:h-20 border border-primary-foreground 
                             flex items-center justify-center bg-primary/80 backdrop-blur-sm
                             group-hover:bg-primary transition-colors duration-500"
                  >
                    <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground fill-current ml-1" />
                  </motion.div>
                </div>
                {/* Duration badge */}
                <span className="absolute bottom-4 right-4 px-3 py-1 bg-background/90 
                               backdrop-blur-sm text-sm font-sans">
                  {video.duration}
                </span>
              </div>
              <h3 className="text-xl font-serif group-hover:italic transition-all duration-300">
                {video.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
