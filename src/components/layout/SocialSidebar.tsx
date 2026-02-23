import { motion } from 'framer-motion';
import { Linkedin, Instagram, Github, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: MessageCircle, href: 'https://wa.me/', label: 'WhatsApp' },
];

const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
    >
      <div className="w-px h-16 bg-border mx-auto" />
      {socialLinks.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 + index * 0.1 }}
          whileHover={{ scale: 1.2, x: 5 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
      <div className="w-px h-16 bg-border mx-auto" />
    </motion.div>
  );
};

export default SocialSidebar;
