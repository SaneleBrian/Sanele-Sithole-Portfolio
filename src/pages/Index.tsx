import { motion } from 'framer-motion';
import { Download, ArrowRight, Star, Briefcase, Award, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import TypingText from '@/components/ui/TypingText';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import TechStackSection from '@/components/home/TechStackSection';
import AchievementsSection from '@/components/home/AchievementsSection';

const featuredServices = [
  { 
    title: 'Web Development', 
    description: 'Building responsive, high-performance websites with modern frameworks.',
    icon: Code2 
  },
  { 
    title: 'Software Development', 
    description: 'Custom software solutions tailored to your business needs.',
    icon: Briefcase 
  },
  { 
    title: 'Full Stack Development', 
    description: 'End-to-end application development from database to UI.',
    icon: Award 
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block text-muted-foreground text-lg"
                >
                  Hello, I Am
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
                >
                  Sanele Sithole
                  <br />
                  <span className="text-gradient">
                    <TypingText words={['Designer', 'Developer', 'Coder', 'Creator']} />
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground text-lg max-w-lg leading-relaxed"
                >
                  Crafting exceptional digital experiences with a passion for clean code, 
                  innovative solutions, and pixel-perfect design. Let's build something amazing together.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <Button size="lg" className="gap-2 group">
                    Hire Me
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </motion.div>

              {/* Quick Stats Inline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-8 pt-4"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">3+</p>
                  <p className="text-muted-foreground text-sm">Years Exp.</p>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-muted-foreground text-sm">Projects</p>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-muted-foreground text-sm">Satisfaction</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Decorative Rings */}
                <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 transform rotate-6 animate-pulse" />
                <div className="absolute inset-0 rounded-3xl border border-primary/10 transform -rotate-3" />
                
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden glow-effect">
                  <div className="aspect-[3/4] w-80 md:w-96 bg-gradient-to-br from-secondary to-card rounded-3xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <motion.div 
                        animate={{ 
                          boxShadow: ['0 0 20px hsl(var(--primary) / 0.3)', '0 0 40px hsl(var(--primary) / 0.5)', '0 0 20px hsl(var(--primary) / 0.3)']
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-40 h-40 mx-auto rounded-full bg-primary/20 flex items-center justify-center mb-4 border-2 border-primary/30"
                      >
                        <span className="text-6xl font-display font-bold text-primary">SS</span>
                      </motion.div>
                      <p className="text-xl font-semibold">Sanele Sithole</p>
                      <p className="text-muted-foreground">Full-Stack Developer</p>
                    </div>
                  </div>
                </div>

                {/* Experience Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -right-4 top-1/4 glass-card rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">3+</p>
                      <p className="text-muted-foreground text-sm">Years Exp.</p>
                    </div>
                  </div>
                </motion.div>

                {/* Projects Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute -left-4 bottom-1/4 glass-card rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">10+</p>
                      <p className="text-muted-foreground text-sm">Projects</p>
                    </div>
                  </div>
                </motion.div>

                {/* Available Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card rounded-full px-4 py-2 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'hsl(142, 71%, 45%)' }} />
                    <span className="text-sm font-medium">Available for Work</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Scroll */}
      <TechStackSection />

      {/* Featured Services Preview */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              What I Do
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Services I Offer
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card rounded-2xl p-8 group hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/services">
              <Button variant="outline" className="gap-2 group">
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-20 -right-20 w-40 h-40 border border-primary/20 rounded-full"
              />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Let's Work <span className="text-gradient">Together</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Have a project in mind? Let's discuss how we can bring your vision to life
                with cutting-edge technology and creative solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gap-2 group">
                    Get In Touch
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button size="lg" variant="outline" className="gap-2">
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
