import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ label, title, description, centered = true }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
