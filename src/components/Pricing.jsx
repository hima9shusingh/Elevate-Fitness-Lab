import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const membershipPlans = [
    {
      name: 'Basic',
      price: '₹999',
      period: '/mo',
      desc: 'Perfect for beginners just starting out.',
      features: [
        'Access to gym equipment',
        'Locker room access',
        '1 Free group class per week',
        'Basic fitness assessment'
      ],
      highlighted: false
    },
    {
      name: 'Pro',
      price: '₹1999',
      period: '/mo',
      desc: 'Most popular for dedicated fitness enthusiasts.',
      features: [
        'All Basic features',
        'Unlimited group classes',
        'Access to sauna & spa',
        'Personalized workout plan',
        '1 PT session per month'
      ],
      highlighted: true
    },
    {
      name: 'Elite',
      price: '₹2999',
      period: '/mo',
      desc: 'For advanced and high performance training.',
      features: [
        'All Pro features',
        'Unlimited PT sessions',
        'Custom nutrition plan',
        'Exclusive VIP lounge access',
        'Guest passes (4/month)'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gym-charcoal transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display uppercase tracking-wide dark:text-white"
          >
            Membership <span className="text-gym-orange">Plans</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Review our flexible membership tiers below. Select a plan to begin.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {membershipPlans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white dark:bg-gym-black rounded-sm border p-8 transition-transform duration-300 ${
                plan.highlighted 
                  ? 'border-gym-orange shadow-2xl scale-105 md:-translate-y-4 z-10' 
                  : 'border-gray-200 dark:border-white/10 hover:-translate-y-2'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gym-orange text-white px-4 py-1 rounded-sm text-sm uppercase tracking-widest font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display uppercase tracking-wider dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end justify-center gap-1 mb-4">
                  <span className="text-5xl font-display text-gym-orange">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 pb-1">{plan.period}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gym-orange shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-sm font-display uppercase tracking-wider text-lg transition-colors ${
                plan.highlighted 
                  ? 'bg-gradient-to-r from-gym-orange to-orange-600 text-white hover:from-orange-600 hover:to-orange-700' 
                  : 'bg-gray-100 dark:bg-gym-charcoal text-gym-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
