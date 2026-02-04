import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: 'A Lumière transformou completamente a identidade visual do nosso restaurante. O trabalho foi impecável, desde a fotografia até os materiais de comunicação.',
    author: 'Marina Costa',
    role: 'Proprietária, Restaurante Noir',
  },
  {
    id: 2,
    content: 'Profissionalismo excepcional. Eles entenderam nossa visão e entregaram muito além do esperado. Nossa clínica nunca teve uma imagem tão profissional.',
    author: 'Dr. Ricardo Mendes',
    role: 'Diretor, Clínica Vitale',
  },
  {
    id: 3,
    content: 'O vídeo institucional que a Lumière produziu elevou nossa empresa a outro patamar. Recebemos elogios de clientes e parceiros constantemente.',
    author: 'Paulo Ferreira',
    role: 'CEO, Nexus Consulting',
  },
  {
    id: 4,
    content: 'Uma equipe que realmente entende de branding. O reposicionamento da minha marca foi fundamental para alcançar novos patamares na minha carreira.',
    author: 'Carla Duarte',
    role: 'Coach, Método Evolução',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="depoimentos" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-caption text-muted-foreground mb-4">Depoimentos</p>
          <h2 className="text-headline mb-16">
            O que <span className="italic">dizem</span> sobre nós
          </h2>

          <div className="relative">
            <Quote className="w-12 h-12 mx-auto mb-8 opacity-10" />

            <div className="min-h-[280px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-subheadline mb-8 italic leading-relaxed">
                    "{testimonials[current].content}"
                  </p>
                  <div className="line-horizontal max-w-[60px] mx-auto mb-6" />
                  <p className="font-serif text-lg">{testimonials[current].author}</p>
                  <p className="text-caption text-muted-foreground mt-1">
                    {testimonials[current].role}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 border border-border hover:border-foreground hover:bg-foreground 
                         hover:text-background transition-all duration-300"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 transition-all duration-300 ${
                      index === current ? 'bg-foreground w-6' : 'bg-border'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 border border-border hover:border-foreground hover:bg-foreground 
                         hover:text-background transition-all duration-300"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
