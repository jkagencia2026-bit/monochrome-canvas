import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-1/4 top-0 bottom-0 w-px bg-border origin-top hidden md:block"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-1/4 top-0 bottom-0 w-px bg-border origin-top hidden md:block"
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/3 left-0 right-0 h-px bg-border origin-left"
        />
      </div>

      {/* Corner decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute top-8 left-8 w-16 h-16 hidden md:block"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-foreground" />
        <div className="absolute top-0 left-0 h-full w-px bg-foreground" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute top-8 right-8 w-16 h-16 hidden md:block"
      >
        <div className="absolute top-0 right-0 w-full h-px bg-foreground" />
        <div className="absolute top-0 right-0 h-full w-px bg-foreground" />
      </motion.div>

      <div className="container-custom relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-caption text-muted-foreground mb-6"
        >
          Agência Criativa 360°
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-display mb-8"
        >
          <span className="block">Criamos</span>
          <span className="block italic">experiências</span>
          <span className="block">memoráveis</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-body-large text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Soluções completas em comunicação visual, branding e produção de conteúdo 
          para marcas que buscam excelência em múltiplos segmentos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a href="#portfolio" className="btn-primary">
            <span>Ver Portfólio</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
