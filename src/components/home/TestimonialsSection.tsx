import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'SIMON Mokoena',
    role: 'CEO, WE SOLVE IT (PTY) LTD',
    content: 'Sanele delivered an exceptional e-commerce platform for our business. His attention to detail and commitment to quality exceeded our expectations. Highly recommended!',
    rating: 5,
    avatar: 'SM',
  },
  {
    id: 2,
    name: 'Thandi Nkosi',
    role: 'Marketing Director, CLIENTELE',
    content: 'Working with Sanele was a pleasure. He understood our vision immediately and transformed it into a beautiful, functional website. Great communication throughout the project.',
    rating: 5,
    avatar: 'TN',
  },
  {
    id: 3,
    name: 'James van der Berg',
    role: 'Founder, DigitalCraft',
    content: 'Sanele\'s technical skills are impressive, but what sets him apart is his problem-solving ability. He doesn\'t just code – he thinks critically about the best solutions.',
    rating: 5,
    avatar: 'JV',
  },
];

const TestimonialsSection = () => {
  return (
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            What Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
