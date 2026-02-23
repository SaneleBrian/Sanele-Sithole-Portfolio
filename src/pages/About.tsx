import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar,
  Download,
  Heart,
  Coffee,
  Code,
  Music,
  Gamepad2,
  BookOpen,
  Lightbulb,
  Target,
  Rocket,
  Zap
} from 'lucide-react';

const timeline = [
  {
    type: 'work',
    title: 'Junior Developer',
    organization: 'Xpert Decision System (PTY) LTD',
    period: '2025 - Present',
    description: 'Building web applications using React, TypeScript, Nodejs, ASP.Net Core/MVC, .Net Framework and various modern technologies.',
    icon: Briefcase,
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'ABT Telecoms (PTY) LTD',
    period: '2023 - 2025',
    description: 'Worked with multiple clients on custom websites and web applications JavaScript, Node.js, PHP, Laravel, HTML, CSS, Python, Django .',
    icon: Briefcase,
  },
  {
    type: 'education',
    title: 'National Diploma: Information Technology(Software Technology)',
    organization: 'Tshwane University of Technology',
    period: '2019 - 2022',
    description: 'Studied software development, algorithms, and system design.',
    icon: GraduationCap,
  },
  {
    type: 'education',
    title: 'National Senior Certificate',
    organization: 'KwaNotshelwa High School',
    period: '2018',
    description: 'Studied my matric specializing in Mathematics & Science',
    icon: GraduationCap,
  },
];

const interests = [
  { icon: Code, name: 'Coding', description: 'Building side projects' },
  { icon: Music, name: 'Music', description: 'Listening & creating' },
  { icon: Coffee, name: 'Coffee', description: 'Fuel for creativity' },
  { icon: Gamepad2, name: 'Gaming', description: 'Strategy & RPGs' },
  { icon: BookOpen, name: 'Learning', description: 'Tech blogs & courses' },
  { icon: Heart, name: 'Community', description: 'Tech mentorship' },
];

const funFacts = [
  { emoji: '☕', fact: 'Powered by 2 cups of coffee daily' },
  { emoji: '🌙', fact: 'Night owl - best code after midnight' },
  { emoji: '🐛', fact: 'Fixed a bug once by adding a semicolon' },
  { emoji: '🎮', fact: 'Like gaming on my free time' },
  { emoji: '📚', fact: 'Read documentation for fun (sometimes)' },
  { emoji: '🎵', fact: 'Lo-fi beats = productivity boost' },
];

const devPhilosophy = [
  {
    icon: Lightbulb,
    title: 'Clean Code First',
    description: 'Write code that your future self will thank you for. Readable, maintainable, elegant.',
  },
  {
    icon: Target,
    title: 'User-Centric Design',
    description: 'Every line of code should serve the end user. If it doesn\'t improve UX, reconsider it.',
  },
  {
    icon: Rocket,
    title: 'Continuous Learning',
    description: 'Technology evolves daily. Stay curious, stay humble, keep building.',
  },
  {
    icon: Zap,
    title: 'Ship Fast, Iterate Faster',
    description: 'Perfect is the enemy of good. Launch, gather feedback, improve.',
  },
];

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Get To Know Me"
            title="About Me"
            description="The story behind the code - my journey, philosophy, and what makes me tick."
          />

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            {/* Image/Avatar Section */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl border-2 border-primary/20 transform -rotate-6" />
                <div className="relative rounded-3xl overflow-hidden glow-effect">
                  <div className="aspect-square w-80 bg-gradient-to-br from-secondary to-card rounded-3xl flex items-center justify-center">
                    <div className="text-center">
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

                {/* Location Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -left-4 bottom-8 glass-card rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">South Africa 🇿🇦</span>
                  </div>
                </motion.div>

                {/* Status Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -right-4 top-8 glass-card rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'hsl(142, 71%, 45%)' }} />
                    <span className="text-sm font-medium">Open to Work</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold">
                Hey there! I'm <span className="text-primary">Sanele</span> 👋
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate <span className="text-foreground font-medium">Full-Stack Developer</span> from Johannesburg, South Africa with <span className="text-primary font-semibold">3+ years</span> of 
                  experience turning ideas into reality through code. My journey into tech started with curiosity 
                  about how websites work, and now I'm obsessed with building them.
                </p>
                <p>
                 I specialize in crafting clean, responsive, and performant user interfaces with <span className="text-foreground font-medium">React, TypeScript, TailwindCSS, and modern JavaScript,</span> 
                 while powering robust backends using <span className="text-foreground font-medium"> ASP.NET Core, .Net Framework, C#, C++, Python, Django, Laravel, & PHP</span>.
                 Whether delivering pixel-perfect frontends, architecting secure <span className="text-foreground font-medium">REST, SOAP, GraphQL APIs</span>, or solving real-world problems through projects like Motion Sensor Security Systems, CRM platforms,
                 and nationwide telecom monitoring tools — I bring strong problem-solving, attention to detail, and a genuine commitment to creating impactful, high-quality solutions.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source,
                  or helping aspiring developers in my community. I believe in the power of sharing knowledge! 🚀
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
                <Link to="/contact">
                  <Button variant="outline" className="gap-2 group">
                    Let's Chat
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Developer Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                💡 My Philosophy
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                How I Approach Development
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {devPhilosophy.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-xl p-6 text-center group hover:border-primary/50 transition-all"
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                🎉 Fun Facts
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Random Things About Me
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {funFacts.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-xl p-5 flex items-center gap-4 group hover:border-primary/50 transition-all"
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.fact}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                📍 My Journey
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Experience & Education
              </h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex flex-col lg:flex-row gap-6 ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1">
                      <div className={`glass-card rounded-2xl p-6 hover:border-primary/50 transition-all ${
                        index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                      }`}>
                        <div className={`flex items-center gap-3 mb-3 ${
                          index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                        }`}>
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center lg:hidden">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{item.title}</h4>
                            <p className="text-primary text-sm">{item.organization}</p>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                        <div className={`flex items-center gap-2 text-muted-foreground text-xs ${
                          index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                        }`}>
                          <Calendar className="w-4 h-4" />
                          {item.period}
                        </div>
                      </div>
                    </div>

                    {/* Center Icon (Desktop) */}
                    <div className="hidden lg:flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center z-10">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                🎯 Beyond Code
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Interests & Hobbies
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass-card rounded-xl p-5 text-center group hover:border-primary/50 transition-all"
                >
                  <interest.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-sm mb-1">{interest.name}</h4>
                  <p className="text-muted-foreground text-xs">{interest.description}</p>
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
            <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Like what you see? 🤝
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
