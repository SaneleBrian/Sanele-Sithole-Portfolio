import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Database, 
  ShoppingCart, 
  Search,
  ArrowRight,
  Check
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
    features: [
      'Responsive Design',
      'Fast Loading Speed',
      'SEO Optimized',
      'Cross-browser Compatible',
    ],
    price: 'From R5,000',
  },
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Beautiful, user-centered designs that combine aesthetics with functionality for an exceptional user experience.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Usability Testing',
    ],
    price: 'From R3,000',
  },
  {
    icon: Database,
    title: 'Web Hosting',
    description: 'Reliable and secure hosting solutions to keep your website running smoothly 24/7.',
    features: [
      'Cloud Hosting',
      '99.9% Uptime',
      'SSL Certificates',
      'Regular Backups',
    ],
    price: 'From R500/mo',
  },
  {
    icon: Smartphone,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs using modern technologies.',
    features: [
      'Desktop Applications',
      'Business Software',
      'System Integration',
      'Maintenance & Support',
    ],
    price: 'From R10,000',
  },
  {
    icon: Search,
    title: 'Software Testing',
    description: 'Comprehensive testing services to ensure your software is bug-free and performs optimally.',
    features: [
      'Unit Testing',
      'Integration Testing',
      'Performance Testing',
      'Quality Assurance',
    ],
    price: 'From R4,000',
  },
  {
    icon: ShoppingCart,
    title: 'Full Stack Development',
    description: 'End-to-end development solutions covering both frontend and backend with seamless integration.',
    features: [
      'Frontend Development',
      'Backend Development',
      'Database Design',
      'API Development',
    ],
    price: 'From R15,000',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We discuss your project requirements, goals, and vision to understand exactly what you need.',
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Creating a detailed project roadmap with timelines, milestones, and deliverables.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'Crafting beautiful, user-friendly designs that align with your brand and objectives.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'Building your solution with clean, efficient code and regular progress updates.',
  },
  {
    step: '05',
    title: 'Testing',
    description: 'Rigorous testing to ensure everything works perfectly across all devices and browsers.',
  },
  {
    step: '06',
    title: 'Launch',
    description: 'Deploying your project and providing support to ensure a smooth launch.',
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="What I Offer"
            title="Services & Solutions"
            description="Comprehensive digital solutions tailored to your business needs and goals."
          />

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 group hover:border-primary/50 transition-all flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <span className="text-primary font-semibold">{service.price}</span>
                  <Link to="/contact">
                    <Button variant="ghost" size="sm" className="gap-1 group/btn">
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                How I Work
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                My Development Process
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative glass-card rounded-xl p-6"
                >
                  <span className="text-5xl font-display font-bold text-primary/20 absolute top-4 right-4">
                    {step.step}
                  </span>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-muted-foreground text-lg mb-6">
              Ready to start your project? Let's discuss your requirements.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2 group">
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
