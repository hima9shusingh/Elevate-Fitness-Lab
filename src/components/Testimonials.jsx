import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Michael R.',
      role: 'Member since 2021',
      text: 'Elevate Fitness Lab completely changed my approach to fitness. The trainers are incredibly knowledgeable and the equipment is always top-notch.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Jessica T.',
      role: 'Member since 2022',
      text: 'The community here is unmatched. I look forward to every CrossFit session. It feels like a second family.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Alex M.',
      role: 'Member since 2023',
      text: 'Switched from a commercial gym to Elevate Fitness Lab and never looked back. The atmosphere makes you want to push harder.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop',
      rating: 5
    },
    {
      name: 'Samantha L.',
      role: 'Member since 2020',
      text: 'The personal training program helped me recover from an injury and get into the best shape of my life.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop',
      rating: 5
    }
  ];

  // Duplicate for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-gym-white dark:bg-gym-black overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-wide dark:text-white">
            MEMBER <span className="text-gym-orange">STORIES</span>
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden group py-4 cursor-grab active:cursor-grabbing">
          <div className="flex w-[800%] md:w-[400%] lg:w-[200%] animate-marquee">
            {duplicatedTestimonials.map((testimonial, idx) => (
              <div 
                key={idx} 
                className="w-full px-4 flex flex-col"
              >
                <div className="bg-white dark:bg-gym-charcoal p-8 rounded-sm border border-transparent dark:border-white/5 shadow-xl flex flex-col h-full hover:-translate-y-1 transition-transform duration-300">
                  
                  {/* Rating */}
                  <div className="flex text-gym-orange mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  {/* Text */}
                  <p className="text-gray-600 dark:text-gray-300 italic mb-8 flex-grow leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Member Info */}
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-gym-orange shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-gym-black dark:text-white uppercase tracking-wider text-sm mb-1">
                        {testimonial.name}
                      </h4>
                      <span className="text-xs text-gym-orange font-semibold uppercase tracking-widest">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
