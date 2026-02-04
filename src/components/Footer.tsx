import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl"
          >
            JK MARKETING
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {['Sobre', 'Portfólio', 'Serviços', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-caption text-muted-foreground hover:text-foreground 
                         transition-colors link-underline"
              >
                {item}
              </a>
            ))}
          </motion.nav>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            © 2024 JK Marketing. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
