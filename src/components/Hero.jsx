import { motion } from 'framer-motion';
import { ArrowRight, Play, Users, Dumbbell } from 'lucide-react';
import heroImg from '../assets/images/hero.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gym-black text-white pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gym-orange/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-gym-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,0,0.08),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gym-orange/30 bg-gym-orange/10 text-gym-orange text-xs md:text-sm uppercase tracking-[0.2em] font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-gym-orange animate-pulse" />
              Elevate Fitness Lab
            </motion.div>

            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-wide leading-[0.95] mb-6 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Train With <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-orange to-orange-400">Purpose</span>.<br />
              Transform With <span className="text-transparent bg-clip-text bg-gradient-to-r from-gym-orange to-orange-400">Discipline</span>.
            </motion.h1>

            <motion.p
              className="text-gym-gray text-base md:text-lg max-w-xl mb-10 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Train in an environment built for progression, with modern equipment and experienced coaches.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#pricing" 
                className="bg-gym-orange text-white px-8 py-4 rounded-sm font-display text-xl uppercase tracking-wider hover:bg-white hover:text-gym-black border border-gym-orange hover:border-white transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(255,107,0,0.25)] hover:shadow-none"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-sm font-display text-xl uppercase tracking-wider hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 fill-current" />
                View Plans
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center lg:justify-end w-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.15),transparent_60%)] pointer-events-none blur-2xl" />

            <div className="relative w-full max-w-[420px] aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <motion.div
                className="relative w-full h-full rounded-sm overflow-hidden border border-white/10 shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <img
                  src={heroImg}
                  alt="Premium Athlete Training"
                  className="w-full h-full object-cover object-center"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-gym-black/40 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute inset-0 border border-white/10 rounded-sm m-3 pointer-events-none" />
              </motion.div>

              <motion.div
                className="absolute -top-6 -left-6 backdrop-blur-md bg-gym-charcoal/80 border border-white/10 p-4 rounded-sm shadow-2xl flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="w-10 h-10 rounded-full bg-gym-orange/10 flex items-center justify-center text-gym-orange">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-2xl text-white leading-none">1K+</div>
                  <div className="text-[10px] text-gym-gray uppercase tracking-widest font-semibold mt-0.5">Active Members</div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -right-6 backdrop-blur-md bg-gym-charcoal/80 border border-white/10 p-4 rounded-sm shadow-2xl flex items-center gap-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="w-10 h-10 rounded-full bg-gym-orange/10 flex items-center justify-center text-gym-orange">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-2xl text-white leading-none">50+</div>
                  <div className="text-[10px] text-gym-gray uppercase tracking-widest font-semibold mt-0.5">Expert Coaches</div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-white/40 text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <div className="w-full h-1/2 bg-gym-orange absolute top-0 animate-scroll-down" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
