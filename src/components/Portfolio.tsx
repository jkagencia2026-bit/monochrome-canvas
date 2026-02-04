import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Portfolio images
import gastronomy1 from '@/assets/portfolio/gastronomy-1.jpg';
import medicine1 from '@/assets/portfolio/medicine-1.jpg';
import nutrition1 from '@/assets/portfolio/nutrition-1.jpg';
import services1 from '@/assets/portfolio/services-1.jpg';
import personalDev1 from '@/assets/portfolio/personal-dev-1.jpg';
import events1 from '@/assets/portfolio/events-1.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Restaurante Noir',
    description: 'Identidade visual e fotografia gastronômica para restaurante fine dining',
    category: 'Gastronomia',
    image: gastronomy1,
  },
  {
    id: 2,
    title: 'Clínica Vitale',
    description: 'Branding completo e comunicação visual para clínica médica',
    category: 'Medicina',
    image: medicine1,
  },
  {
    id: 3,
    title: 'NutriBalance',
    description: 'Campanha fotográfica e materiais para consultório de nutrição',
    category: 'Nutrição',
    image: nutrition1,
  },
  {
    id: 4,
    title: 'Nexus Consulting',
    description: 'Rebranding e materiais corporativos para consultoria empresarial',
    category: 'Serviços',
    image: services1,
  },
  {
    id: 5,
    title: 'Método Evolução',
    description: 'Identidade visual e produção de conteúdo para coach de carreira',
    category: 'Desenvolvimento Pessoal',
    image: personalDev1,
  },
  {
    id: 6,
    title: 'Gala Anual ACME',
    description: 'Cobertura fotográfica e vídeo para evento corporativo de luxo',
    category: 'Eventos',
    image: events1,
  },
];

const categories = ['Todos', 'Gastronomia', 'Medicina', 'Nutrição', 'Serviços', 'Desenvolvimento Pessoal', 'Eventos'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

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

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="image-hover-zoom image-hover-contrast aspect-[4/5] mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-caption text-muted-foreground mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-serif mb-2 group-hover:italic transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {project.description}
                  </p>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-background"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-background/80 backdrop-blur-sm"
                aria-label="Fechar"
              >
                <X className="w-6 h-6" />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-[16/10] object-cover"
              />

              <div className="p-8 md:p-12">
                <p className="text-caption text-muted-foreground mb-3">
                  {selectedProject.category}
                </p>
                <h3 className="text-3xl md:text-4xl font-serif mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-body-large text-muted-foreground mb-8">
                  {selectedProject.description}
                </p>
                <div className="line-horizontal mb-8" />
                <p className="text-body text-muted-foreground">
                  Este projeto foi desenvolvido com foco na excelência visual e estratégia 
                  de comunicação integrada. Cada elemento foi cuidadosamente planejado para 
                  transmitir os valores da marca e conectar com seu público-alvo de forma 
                  autêntica e memorável.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Portfolio;
