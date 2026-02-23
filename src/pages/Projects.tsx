import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye, Code2, Smartphone, Globe, Database, ShoppingCart, Users } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with user authentication, product management, shopping cart, payment integration, and admin dashboard.',
    image: '/placeholder.svg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    category: 'Full Stack',
    icon: ShoppingCart,
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'A collaborative project management tool with real-time updates, team workspaces, kanban boards, and progress tracking.',
    image: '/placeholder.svg',
    technologies: ['React', 'Laravel', 'MySQL', 'WebSockets'],
    category: 'Web Application',
    icon: Users,
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations and dark theme.',
    image: '/placeholder.svg',
    technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    category: 'Frontend',
    icon: Globe,
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Inventory Management API',
    description: 'RESTful API for inventory tracking with authentication, role-based access control, and comprehensive documentation.',
    image: '/placeholder.svg',
    technologies: ['ASP.Net', 'C#', 'SQL Server', 'JWT'],
    category: 'Backend',
    icon: Database,
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 5,
    title: 'Mobile Banking App UI',
    description: 'Sleek mobile banking interface design with intuitive navigation, transaction history, and account management features.',
    image: '/placeholder.svg',
    technologies: ['React Native', 'TypeScript', 'Expo'],
    category: 'Mobile',
    icon: Smartphone,
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Real Estate Listing Platform',
    description: 'Property listing website with advanced search filters, map integration, virtual tours, and agent contact system.',
    image: '/placeholder.svg',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
    category: 'Full Stack',
    icon: Code2,
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Web Application', 'Mobile'];

const Projects = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="My Work"
            title="Featured Projects"
            description="A showcase of my recent work, from full-stack applications to creative frontend designs."
          />

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  category === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-primary/50" />
                  </div>
                  {project.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  )}
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Eye className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-secondary text-foreground flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="glass-card rounded-2xl p-8 md:p-12 inline-block">
              <h3 className="text-2xl font-display font-bold mb-4">
                Want to see more?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Check out my GitHub profile for more projects, open-source contributions, and experiments.
              </p>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Button className="gap-2">
                  <Github className="w-5 h-5" />
                  View GitHub Profile
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
