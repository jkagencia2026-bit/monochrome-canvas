import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import teamImage from '@/assets/team.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre" className="section-padding" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-caption text-muted-foreground mb-4"
            >
              Sobre nós
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-headline mb-8"
            >
              Uma agência que transforma visões em{' '}
              <span className="italic">realidade visual</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-body-large text-muted-foreground">
                Há 2 anos, a JK Marketing tem sido referência em soluções 
                criativas completas. Nossa abordagem 360° garante que cada projeto 
                receba atenção integral — do conceito à execução final.
              </p>
              <p className="text-body text-muted-foreground">
                Trabalhamos com marcas de diversos segmentos, sempre com o mesmo 
                compromisso: entregar excelência visual que comunica, conecta e 
                converte. Nossa equipe multidisciplinar combina estratégia, design 
                e produção para criar experiências que deixam marca.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 grid grid-cols-3 gap-8"
            >
              {[
                { number: '50+', label: 'Projetos' },
                { number: '35+', label: 'Clientes' },
                { number: '2', label: 'Anos' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <span className="block text-3xl md:text-4xl font-serif mb-1">
                    {stat.number}
                  </span>
                  <span className="text-caption text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={teamImage}
                alt="Nossa equipe criativa em ação"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-border -z-10 hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
