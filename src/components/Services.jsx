import { motion } from 'framer-motion';
import { Dumbbell, Activity, Heart, Target, Users, Apple } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Weight Training',
      desc: 'Build strength and muscle with our extensive free weights and resistance machines.',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Cardio',
      desc: 'Improve endurance with state-of-the-art treadmills, ellipticals, and rowing machines.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Yoga',
      desc: 'Enhance flexibility, balance, and mental clarity in our dedicated zen studios.',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1470&auto=format&fit=crop'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'CrossFit',
      desc: 'High-intensity functional training designed for all fitness levels.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Personal Training',
      desc: '1-on-1 coaching to help you reach your specific fitness goals faster.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop'
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: 'Nutrition Coaching',
      desc: 'Personalized meal plans and advice to complement your physical training.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1453&auto=format&fit=crop'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gym-charcoal transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display uppercase tracking-wide dark:text-white"
          >
            Our <span className="text-gym-orange">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Discover our comprehensive range of fitness programs and facilities designed to cater to your every need.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-gym-black rounded-sm overflow-hidden shadow-lg border border-transparent dark:border-white/5 hover:border-gym-orange/50 transition-all duration-300"
            >
              {/* Card Image Background (Hidden initially, shows on hover) */}
              <div className="absolute inset-0 z-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>

              <div className="relative z-10 p-8">
                <div className="w-16 h-16 bg-gym-orange/10 dark:bg-gym-orange/20 text-gym-orange rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display uppercase tracking-wider mb-3 dark:text-white group-hover:text-gym-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="mt-6 flex items-center text-gym-orange font-semibold uppercase tracking-wider text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Explore <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
