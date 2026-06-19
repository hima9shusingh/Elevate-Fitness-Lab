import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    
    const promise = new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.promise(promise, {
      loading: 'Sending message...',
      success: 'Message sent successfully! We will get back to you soon.',
      error: 'Failed to send message. Please try again.',
    });

    promise.then(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gym-charcoal transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display uppercase tracking-wide dark:text-white"
          >
            Get in <span className="text-gym-orange">Touch</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Contact us directly using the form below or our active office coordinates.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          <motion.div 
            className="w-full lg:w-1/3 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-white dark:bg-gym-black rounded-sm border border-transparent dark:border-white/5 shadow-sm text-gym-orange">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg dark:text-white uppercase tracking-wider mb-1">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">123 Fitness Boulevard<br/>Metro City, MC 45678</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-white dark:bg-gym-black rounded-sm border border-transparent dark:border-white/5 shadow-sm text-gym-orange">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg dark:text-white uppercase tracking-wider mb-1">Phone</h4>
                <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567<br/>Mon-Fri, 8am-8pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-white dark:bg-gym-black rounded-sm border border-transparent dark:border-white/5 shadow-sm text-gym-orange">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg dark:text-white uppercase tracking-wider mb-1">Email</h4>
                <p className="text-gray-600 dark:text-gray-400">info@elevatefitnesslab.com<br/>support@elevatefitnesslab.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gym-black p-8 rounded-sm shadow-lg border border-transparent dark:border-white/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gym-charcoal border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-gym-black dark:text-white focus:outline-none focus:border-gym-orange transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-gym-charcoal border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-gym-black dark:text-white focus:outline-none focus:border-gym-orange transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-gym-charcoal border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-gym-black dark:text-white focus:outline-none focus:border-gym-orange transition-colors"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">Message *</label>
                <textarea 
                  id="message" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-gym-charcoal border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-gym-black dark:text-white focus:outline-none focus:border-gym-orange transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-gym-orange text-white py-4 rounded-sm font-display text-xl uppercase tracking-wider hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
