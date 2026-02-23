import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen, Rocket, Target, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'Top Performer',
    description: 'Recognized as top performer in web development bootcamp',
  },
  {
    icon: Award,
    title: 'Microsoft Certified',
    description: 'Azure Fundamentals & .NET Developer Certification',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learner',
    description: 'Completed 50+ online courses on modern web technologies',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Consistently deliver projects ahead of schedule',
  },
];

const currentlyLearning = [
  { name: 'AWS Cloud Architecture', progress: 65 },
  { name: 'GraphQL & Apollo', progress: 40 },
  { name: 'Docker & Kubernetes', progress: 50 },
  { name: 'Machine Learning Basics', progress: 25 },
];

const AchievementsSection = () => {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Target className="w-4 h-4 inline mr-2" />
                Achievements
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Milestones & Recognition
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-card rounded-xl p-5 group hover:border-primary/50 transition-all"
                >
                  <achievement.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold mb-1">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Currently Learning */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Zap className="w-4 h-4 inline mr-2" />
                Always Growing
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Currently Learning
              </h3>
            </div>

            <div className="space-y-6">
              {currentlyLearning.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-5"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-primary font-semibold">{item.progress}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
