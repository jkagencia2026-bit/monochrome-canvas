import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import reel1 from '@/assets/reels/reel-1.mov';
import reel2 from '@/assets/reels/reel-2.mp4';
import reel3 from '@/assets/reels/reel-3.mov';

const reels = [
  {
    id: 1,
    video: reel1,
  },
  {
    id: 2,
    video: reel2,
  },
  {
    id: 3,
    video: reel3,
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
        <div className="flex justify-center gap-6 flex-wrap">
          {reels.map((reel, index) => (
            <motion.article
              key={reel.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Vertical aspect ratio like Reels (9:16) */}
              <div className="relative w-[280px] aspect-[9/16] overflow-hidden rounded-lg bg-muted">
                <video
                  src={reel.video}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;
