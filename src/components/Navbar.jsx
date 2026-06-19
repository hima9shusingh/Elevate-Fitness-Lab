import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.js';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gym-black/80 backdrop-blur-lg border-b border-black/10 dark:border-white/10 shadow-md py-3' 
        : 'bg-white/40 dark:bg-gym-black/40 backdrop-blur-md border-b border-black/5 dark:border-white/5 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/elevate-logo.svg" alt="Elevate Fitness Lab Logo" className="w-10 h-10" />
            <span className="font-display text-2xl tracking-wider uppercase text-gym-black dark:text-white">
              Elevate <span className="text-gym-orange hidden sm:inline">Fitness</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gym-black dark:text-white hover:text-gym-orange dark:hover:text-gym-orange transition-colors duration-200 uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gym-black dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <a href="#pricing" className="bg-gym-orange text-white px-6 py-2 rounded-sm font-display tracking-wider hover:bg-orange-600 transition-colors uppercase">
              Join Now
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 text-gym-black dark:text-white">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gym-black dark:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gym-black/95 backdrop-blur-lg border-b border-black/10 dark:border-white/10 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-semibold text-gym-black dark:text-white hover:text-gym-orange dark:hover:text-gym-orange hover:bg-black/5 dark:hover:bg-white/5 rounded-md uppercase tracking-wider transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center mt-4 bg-gym-orange text-white px-6 py-3 rounded-sm font-display tracking-wider hover:bg-orange-600 uppercase"
              >
                Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
