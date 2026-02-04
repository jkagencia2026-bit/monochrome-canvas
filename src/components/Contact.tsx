import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contato" className="section-padding" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-caption text-muted-foreground mb-4">Vamos conversar</p>
            <h2 className="text-headline mb-8">
              Pronto para <span className="italic">transformar</span> sua marca?
            </h2>
            <p className="text-body-large text-muted-foreground mb-12">
              Entre em contato conosco para discutir seu próximo projeto. 
              Estamos prontos para criar algo extraordinário juntos.
            </p>

            <div className="space-y-6 mb-12">
              <a 
                href="mailto:jkagencia2026@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center
                             group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                  <Mail className="w-5 h-5 group-hover:text-background transition-colors" />
                </div>
                <div>
                  <p className="text-caption text-muted-foreground mb-1">E-mail</p>
                  <p className="link-underline">jkagencia2026@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center
                             group-hover:bg-foreground group-hover:border-foreground transition-all duration-300">
                  <Phone className="w-5 h-5 group-hover:text-background transition-colors" />
                </div>
                <div>
                  <p className="text-caption text-muted-foreground mb-1">WhatsApp</p>
                  <p className="link-underline">+55 11 99999-9999</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-caption text-muted-foreground mb-1">Localização</p>
                  <p>Cuiabá, MT | Vilhena, RO</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border flex items-center justify-center
                         hover:bg-foreground hover:border-foreground hover:text-background 
                         transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-border flex items-center justify-center
                         hover:bg-foreground hover:border-foreground hover:text-background 
                         transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="text-caption text-muted-foreground block mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-minimal"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-caption text-muted-foreground block mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-minimal"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="text-caption text-muted-foreground block mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-minimal min-h-[150px] resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full group">
                <span className="flex items-center justify-center gap-2">
                  Enviar mensagem
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 
                                         group-hover:-translate-y-1" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
