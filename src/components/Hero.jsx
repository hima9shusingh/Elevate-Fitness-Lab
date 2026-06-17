import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop" 
          alt="Gym background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-gym-black to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gym-orange uppercase tracking-[0.3em] font-semibold text-sm md:text-base mb-4 block">
            Elevate Fitness Lab
          </span>
        </motion.div>

        <motion.h1 
          className="text-white font-display text-6xl md:text-8xl lg:text-9xl uppercase tracking-wider leading-none mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Rise Stronger <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-orange to-orange-400">
            Every Day
          </span>
        </motion.h1>

        <motion.p 
          className="text-gray-300 text-base md:text-xl max-w-2xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Join the premier fitness destination where state-of-the-art equipment meets expert guidance. Transform your body, elevate your mind, and unlock your true potential.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#pricing" className="bg-gym-orange text-white px-8 py-4 rounded-sm font-display text-xl uppercase tracking-wider hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 group">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm font-display text-xl uppercase tracking-wider hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
            <Play className="w-5 h-5 fill-current" />
            View Plans
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-white/50 text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-gym-orange absolute top-0 animate-scroll-down" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
