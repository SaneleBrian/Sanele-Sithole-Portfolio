import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Linkedin,
  Instagram,
  Github,
  MessageCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sitholesanelee@gmail.com',
    href: 'mailto:sitholesanelee@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(064) 666-4311',
    href: 'tel:+27646664311',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'South Africa',
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Mon - Fri, 9AM - 5PM',
  },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sanele-sithole-1a7516257/', label: 'LinkedIn', color: 'hover:text-blue-500' },
  { icon: Instagram, href: 'https://www.instagram.com/sanele_stholee/', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: Github, href: 'https://github.com/SaneleBrian', label: 'GitHub', color: 'hover:text-foreground' },
  { icon: MessageCircle, href: 'https://web.whatsapp.com/+27646664311', label: 'WhatsApp', color: 'hover:text-green-500' },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_42wwt4v',
        'template_1qb88qa',
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'ldfn9WN0Ozt8W9F5D'
      );

      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            label="Get In Touch"
            title="Contact Me"
            description="Have a project in mind or looking for a Developer you could hire? I'd love to hear from you."
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-secondary/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8 text-center border-primary/30"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 mb-4">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-medium">Available for Projects</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">
                  Let's Build Something Amazing
                </h4>
                <p className="text-muted-foreground text-sm">
                  I'm currently accepting new projects and would love to hear about yours.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
