import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Palette, 
  Camera, 
  Video, 
  Megaphone, 
  PenTool, 
  Globe,
  Sparkles,
  Users
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Branding & Identidade',
    description: 'Criação e desenvolvimento de marcas memoráveis com identidade visual completa.',
  },
  {
    icon: Camera,
    title: 'Fotografia Profissional',
    description: 'Ensaios fotográficos, produtos, gastronomia e retratos corporativos.',
  },
  {
    icon: Video,
    title: 'Produção de Vídeo',
    description: 'Vídeos institucionais, comerciais, documentários e cobertura de eventos.',
  },
  {
    icon: PenTool,
    title: 'Design Gráfico',
    description: 'Materiais impressos, embalagens, apresentações e peças publicitárias.',
  },
  {
    icon: Globe,
    title: 'Presença Digital',
    description: 'Websites, landing pages e estratégia de conteúdo para redes sociais.',
  },
  {
    icon: Megaphone,
    title: 'Estratégia de Comunicação',
    description: 'Planejamento estratégico, posicionamento de marca e campanhas integradas.',
  },
  {
    icon: Sparkles,
    title: 'Produção de Eventos',
    description: 'Concepção visual, cenografia e cobertura completa de eventos corporativos.',
  },
  {
    icon: Users,
    title: 'Consultoria Criativa',
    description: 'Assessoria especializada para decisões de marca e comunicação.',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="servicos" className="section-padding bg-primary text-primary-foreground" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-caption opacity-60 mb-4">O que fazemos</p>
          <h2 className="text-headline">
            Nossos <span className="italic">serviços</span>
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group bg-primary p-8 hover:bg-primary-foreground hover:text-primary 
                       transition-colors duration-500 cursor-default"
            >
              <service.icon 
                className="w-8 h-8 mb-6 stroke-[1.5] opacity-60 group-hover:opacity-100 
                         transition-opacity duration-300" 
              />
              <h3 className="text-lg font-serif mb-3 group-hover:italic transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
