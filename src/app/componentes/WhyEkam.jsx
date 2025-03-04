'use client'
import { useState, useEffect } from 'react';
import { FaHandshake, FaHeadset } from 'react-icons/fa';
import { MdTimer, MdStars } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const WhyEkam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setDirection(1);
        setCurrentSlide((prevSlide) => 
          prevSlide === features.length - 1 ? 0 : prevSlide + 1
        );
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex justify-center mb-8">
        <div className="flex items-center bg-white/50 backdrop-blur-sm rounded-full p-2 shadow-lg">
          {features.map((_, index) => (
            <div key={index} className="relative flex items-center">
              <div 
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm
                  transition-all duration-500
                  ${currentSlide === index 
                    ? 'bg-blue-600 text-white scale-110' 
                    : currentSlide > index
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-400'
                  }
                `}
              >
                {index + 1}
              </div>
              {index < features.length - 1 && (
                <div className="w-12 h-1 mx-1">
                  <div className="h-full bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-500"
                      style={{ 
                        width: currentSlide > index 
                          ? '100%' 
                          : currentSlide === index 
                            ? '50%' 
                            : '0%' 
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
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
            Why Choose Ekam?
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
            Experience excellence in printing services tailored to your unique requirements
          </p>
        </motion.div>

        <div className="relative group">
          {/* Step Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {renderStepIndicator()}
          </motion.div>

          {/* Navigation Arrows */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <BsChevronLeft className="w-6 h-6 text-gray-800" />
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <BsChevronRight className="w-6 h-6 text-gray-800" />
          </motion.button>

          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 w-full h-full"
              >
                {features.map((feature, index) => {
                  const Icon = feature.Icon;
                  if (index !== currentSlide) return null;
                  
                  return (
                    <div key={index} className="h-full w-full px-6">
                      <div className={`h-full w-full rounded-3xl bg-gradient-to-br ${feature.bgGradient} p-12 flex flex-col items-center justify-center space-y-8`}>
                        <motion.div 
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="relative"
                        >
                          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-75 blur-lg"></div>
                          <div className={`relative bg-white p-6 rounded-full shadow-xl ${feature.iconColor}`}>
                            <Icon className="w-16 h-16" />
                          </div>
                        </motion.div>
                        
                        <motion.h3 
                          initial={{ x: 50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="text-3xl font-bold text-gray-900"
                        >
                          {feature.title}
                        </motion.h3>
                        
                        <motion.p 
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
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
        </div>
      </div>
    </section>
  );
};

export default WhyEkam;
