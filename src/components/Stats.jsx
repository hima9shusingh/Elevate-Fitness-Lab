import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ end, duration = 2, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const endValue = parseInt(end, 10);
      if (start === endValue) return;

      const incrementTime = (duration * 1000) / endValue;
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === endValue) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-6xl font-display text-gym-orange mb-2">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
  const stats = [
    { id: 1, end: "1000", label: "Active Members" },
    { id: 2, end: "50", label: "Expert Trainers" },
    { id: 3, end: "10", label: "Years Experience" },
    { id: 4, end: "24", suffix: "/7", label: "Support" },
  ];

  return (
    <section className="py-16 bg-gym-charcoal dark:bg-gym-black border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-4"
            >
              <Counter end={stat.end} suffix={stat.suffix || "+"} />
              <div className="text-white/70 font-medium tracking-wide uppercase text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
