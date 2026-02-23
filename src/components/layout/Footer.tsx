import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Github, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: MessageCircle, href: 'https://wa.me/27646664311', label: 'WhatsApp' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-bold">
                Sanele <span className="text-primary">Sithole</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer crafting beautiful, user-friendly digital experiences.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>sitholesanelee@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>(064) 666-4311</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>South Africa</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe for latest updates and projects.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Go
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Sanele Sithole. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Crafted with <span className="text-primary">❤</span> in South Africa
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
