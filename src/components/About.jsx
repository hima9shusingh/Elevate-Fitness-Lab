import { motion } from 'framer-motion';
import { Clock, Users, Dumbbell, Apple } from 'lucide-react';

const About = () => {
  const features = [
    { icon: <Clock className="w-6 h-6 text-gym-orange" />, title: '24/7 Access', desc: 'Train on your own schedule' },
    { icon: <Users className="w-6 h-6 text-gym-orange" />, title: 'Expert Trainers', desc: 'Guidance from professionals' },
    { icon: <Dumbbell className="w-6 h-6 text-gym-orange" />, title: 'Modern Equipment', desc: 'State-of-the-art machines' },
    { icon: <Apple className="w-6 h-6 text-gym-orange" />, title: 'Nutrition Plans', desc: 'Customized dietary advice' },
  ];

  return (
    <section id="about" className="py-24 bg-gym-white dark:bg-gym-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Column */}
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-sm overflow-hidden aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" 
                alt="Gym interior" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-2 border-gym-orange/30 m-4 rounded-sm" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 glass p-6 rounded-sm hidden md:block">
              <div className="text-gym-orange font-display text-4xl">10+</div>
              <div className="text-sm font-semibold uppercase tracking-wider dark:text-white">Years of<br/>Excellence</div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-display uppercase tracking-wide mb-6 dark:text-white">
              More than just a <span className="text-gym-orange">Gym</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              At Elevate Fitness Lab, we believe that fitness is not a hobby, but a way of life. Founded in 2014, our mission has always been to provide an environment where champions are forged. Whether you are a beginner or an elite athlete, our community and facilities are tailored to help you push beyond your limits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-3 bg-gray-100 dark:bg-gym-charcoal rounded-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg dark:text-white uppercase tracking-wide">{feature.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-gym-charcoal dark:bg-white text-white dark:text-gym-black px-8 py-3 rounded-sm font-display text-lg uppercase tracking-widest hover:bg-gym-orange dark:hover:bg-gym-orange dark:hover:text-white transition-colors"
            >
              Learn Our Story
            </motion.button>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
