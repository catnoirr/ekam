'use client'
import { useState, useEffect } from 'react';
import { FaHandshake, FaHeadset } from 'react-icons/fa';
import { MdTimer, MdStars } from 'react-icons/md';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const WhyEkam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const features = [
    {
      title: "Trusted 300+ Brands",
      Icon: FaHandshake,
      description: "Building lasting partnerships through exceptional quality and reliability",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600"
    },
    {
      title: "On Time Delivery",
      Icon: MdTimer,
      description: "Precision timing meets quality execution for all your printing needs",
      bgGradient: "from-emerald-500/10 to-green-500/10",
      iconColor: "text-emerald-600"
    },
    {
      title: "Expert Support Team",
      Icon: FaHeadset,
      description: "24/7 dedicated support from our experienced professionals",
      bgGradient: "from-purple-500/10 to-violet-500/10",
      iconColor: "text-purple-600"
    },
    {
      title: "Premium Quality Service",
      Icon: MdStars,
      description: "Setting industry standards with our top-rated printing solutions",
      bgGradient: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-600"
    }
  ];

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === features.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Why Choose WeMee?
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Experience excellence in printing services tailored to your unique requirements
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <BsChevronLeft className="w-6 h-6 text-gray-800" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <BsChevronRight className="w-6 h-6 text-gray-800" />
          </motion.button>

          {/* Carousel */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
              >
                {features.map((feature, index) => {
                  const Icon = feature.Icon;
                  if (index !== currentSlide) return null;
                  
                  return (
                    <div key={index} className="h-full w-full px-6">
                      <div className={`h-full w-full rounded-3xl bg-gradient-to-br ${feature.bgGradient} p-12 flex flex-col items-center justify-center space-y-8`}>
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring" }}
                          className="relative"
                        >
                          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-75 blur-lg"></div>
                          <div className={`relative bg-white p-6 rounded-full shadow-xl ${feature.iconColor}`}>
                            <Icon className="w-16 h-16" />
                          </div>
                        </motion.div>
                        
                        <motion.h3 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-3xl font-bold text-gray-900"
                        >
                          {feature.title}
                        </motion.h3>
                        
                        <motion.p 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-xl text-gray-700 max-w-2xl text-center leading-relaxed"
                        >
                          {feature.description}
                        </motion.p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEkam;
