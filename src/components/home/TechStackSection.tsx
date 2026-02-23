import { motion } from 'framer-motion';

const technologies = [
  { name: 'React', color: 'hsl(193, 95%, 68%)' },
  { name: 'Node.js', color: 'hsl(104, 40%, 52%)' },
  { name: 'TypeScript', color: 'hsl(211, 60%, 48%)' },
  { name: 'MongoDB', color: 'hsl(120, 53%, 40%)' },
  { name: 'Laravel', color: 'hsl(0, 79%, 63%)' },
  { name: 'Python', color: 'hsl(207, 51%, 44%)' },
  { name: 'C#', color: 'hsl(265, 60%, 55%)' },
  { name: 'MySQL', color: 'hsl(198, 71%, 43%)' },
  { name: 'ASP.NET Core', color: 'hsl(220, 70%, 50%)' },
  { name: 'ASP.NET MVC', color: 'hsl(215, 65%, 45%)' },
  { name: 'Tailwind CSS', color: 'hsl(190, 85%, 55%)' },
  { name: 'Django', color: 'hsl(146, 50%, 35%)' },
  { name: 'Microsoft SQL Server', color: 'hsl(0, 70%, 45%)' },
  { name: 'PHP', color: 'hsl(270, 40%, 50%)' },
  { name: 'C++', color: 'hsl(230, 60%, 55%)' },
];

const TechStackSection = () => {
  return (
    <section className="py-12 border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider">
            Technologies I Work With
          </p>
        </motion.div>

        {/* Scrolling Tech Stack */}
        <div className="relative">
          <div className="flex animate-scroll-x gap-12 py-4">
            {[...technologies, ...technologies].map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 px-6 py-3 glass-card rounded-full shrink-0 cursor-pointer group"
              >
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
                <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
