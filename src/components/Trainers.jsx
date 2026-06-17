import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Trainers = () => {
  const trainers = [
    {
      name: 'Marcus Thorne',
      specialty: 'Head Strength Coach',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1374&auto=format&fit=crop',
    },
    {
      name: 'Sarah Jenkins',
      specialty: 'CrossFit Specialist',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1374&auto=format&fit=crop',
    },
    {
      name: 'David Chen',
      specialty: 'Nutrition & Wellness',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop',
    },
    {
      name: 'Elena Rostova',
      specialty: 'Yoga Instructor',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop',
    }
  ];

  return (
    <section className="py-24 bg-gym-white dark:bg-gym-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display uppercase tracking-wide dark:text-white"
            >
              Meet Our <span className="text-gym-orange">Trainers</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-gray-600 dark:text-gray-400"
            >
              Learn from the best. Our certified experts are here to guide, motivate, and push you to achieve your peak performance.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block border-b-2 border-gym-orange text-gym-orange uppercase tracking-wider font-semibold pb-1 hover:text-orange-600 hover:border-orange-600 transition-colors"
          >
            View All Trainers
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-200 dark:bg-gym-charcoal">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-gym-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-display uppercase tracking-wide text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-gym-orange text-sm uppercase tracking-widest font-semibold mb-4">
                  {trainer.specialty}
                </p>
                
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <a href="#" className="text-white hover:text-gym-orange transition-colors">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-white hover:text-gym-orange transition-colors">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 md:hidden w-full border-2 border-gym-orange text-gym-orange py-3 uppercase tracking-wider font-semibold hover:bg-gym-orange hover:text-white transition-colors"
        >
          View All Trainers
        </motion.button>

      </div>
    </section>
  );
};

export default Trainers;
