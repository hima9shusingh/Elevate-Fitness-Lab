import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (height && weight && height > 0 && weight > 0) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      
      if (bmiValue < 18.5) setCategory('Underweight');
      else if (bmiValue >= 18.5 && bmiValue < 24.9) setCategory('Normal');
      else if (bmiValue >= 25 && bmiValue < 29.9) setCategory('Overweight');
      else setCategory('Obese');
    } else {
      setBmi(null);
      setCategory('');
    }
  }, [height, weight]);

  const getCategoryColor = () => {
    switch (category) {
      case 'Underweight': return 'text-blue-500';
      case 'Normal': return 'text-green-500';
      case 'Overweight': return 'text-yellow-500';
      case 'Obese': return 'text-red-500';
      default: return 'text-gym-orange';
    }
  };

  return (
    <section className="py-24 bg-gym-white dark:bg-gym-black transition-colors duration-300 relative overflow-hidden">
      {/* Background styling for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gym-orange/5 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row bg-white dark:bg-gym-charcoal rounded-sm shadow-2xl overflow-hidden border border-gray-200 dark:border-white/5">
          
          <div className="w-full md:w-1/2 p-10 bg-gym-charcoal dark:bg-gym-black text-white flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-display uppercase tracking-wider mb-4"
            >
              Calculate Your <span className="text-gym-orange">BMI</span>
            </motion.h2>
            <p className="text-gray-400 mb-8">
              Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. Use this calculator to check your category.
            </p>
            
            {bmi && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/5 p-6 rounded-sm border border-white/10"
              >
                <div className="text-center">
                  <div className="text-sm uppercase tracking-widest text-gray-400 mb-2">Your BMI is</div>
                  <div className="text-6xl font-display text-white mb-2">{bmi}</div>
                  <div className={`text-lg uppercase tracking-wider font-semibold ${getCategoryColor()}`}>
                    {category}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <label htmlFor="height" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                  Height (cm)
                </label>
                <input 
                  type="number" 
                  id="height" 
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-gym-black border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-gym-black dark:text-white focus:outline-none focus:border-gym-orange transition-colors"
                  placeholder="e.g. 175"
                />
              </div>
              
              <div>
                <label htmlFor="weight" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                  Weight (kg)
                </label>
                <input 
                  type="number" 
                  id="weight" 
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-gym-black border border-gray-200 dark:border-white/10 rounded-sm px-4 py-3 text-gym-black dark:text-white focus:outline-none focus:border-gym-orange transition-colors"
                  placeholder="e.g. 70"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
