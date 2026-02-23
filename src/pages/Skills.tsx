import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 85},
      { name: 'Tailwindcss', level: 80},
      { name: 'Blazor', level: 85},
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'ASP.Net Core&MVC', level: 82 },
      { name: '.Net Framework', level: 80 },
      { name: 'Django', level: 80 },
      { name: 'Node.js', level: 85 },
      { name: 'PHP', level: 82 },
      { name: 'Laravel', level: 80 },
    ],
  },
  {
    title: 'Programming Languages',
    icon: Smartphone,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C#', level: 90 },
      { name: 'C++', level: 80 },
    ],
  },
  {
    title: 'Database & Storage',
    icon: Database,
    skills: [
      { name: 'Microsoft SQL Server', level: 90 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 95 },
      { name: 'MongoDB', level: 82 },
      { name: 'Oracle', level: 80 },
      { name: 'PL/SQL', level: 80 },
    ],
  },
];

const tools = [
  { name: 'Visual Studion & VS Code', category: 'IDE' },
  { name: 'Git & GitHub', category: 'Version Control' },
  { name: 'Figma & Canva', category: 'Design' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Jenkins & Vercel', category: 'Deployment' },
  { name: 'Postman & SOAPUI', category: 'API Testing' },
  { name: 'Jira', category: 'Project Management' },
  { name: 'Slack', category: 'Communication' },
];

const Skills = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="My Expertise"
            title="Skills & Technologies"
            description="A comprehensive overview of my technical skills and the technologies I work with daily."
          />

          {/* Skill Categories */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-bar-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + skillIndex * 0.05 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Tools & Platforms
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Software I Use Daily
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card rounded-xl p-6 text-center group hover:border-primary/50 transition-all cursor-default"
                >
                  <p className="font-semibold group-hover:text-primary transition-colors">
                    {tool.name}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">{tool.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 glass-card rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Soft Skills</h3>
                </div>
                <ul className="space-y-3">
                  {['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Adaptability'].map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Languages</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    { lang: 'English', level: 'Fluent' },
                    { lang: 'Zulu', level: 'Native' },
                    { lang: 'Pedi', level: 'Conversational' },
                    { lang: 'Tsonga', level: 'Conversational' },
                  ].map((item) => (
                    <li key={item.lang} className="flex items-center justify-between">
                      <span className="flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>{item.lang}</span>
                      </span>
                      <span className="text-muted-foreground text-sm">{item.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
