'use client'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useState, useEffect } from 'react';

const Review = () => {
  const [isHovered, setIsHovered] = useState(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest * 10) / 10);
  
  useEffect(() => {
    const controls = animate(count, 4.7, {
      duration: 1.5,
      ease: "easeOut"
    });
    return controls.stop;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="flex items-center justify-center py-4  px-4 min-h-[400px]">
      <motion.div 
        className="w-full max-w-6xl bg-white rounded-3xl shadow-lg p-6 md:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          {/* Left Section - Logo and Rating */}
          <div className="flex flex-col    md:items-start md:text-left md:w-1/4 ">
          <div className="flex md:items-start md:text-left justify-between   gap-4 py-4">

         
            <div className="w-30 h-30 md:w-24 md:h-24 rounded-xl overflow-hidden bg-white shadow-sm mb-4">
              <img src="/newlogo.png" alt="WeMee Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="mb-4 ">
              <img src="/googlelogo.png" alt="Google" className="h-16 mb-2" />
              <div className="flex items-center gap-2 mb-1">
                <motion.span className="text-3xl font-medium text-gray-800">
                  {rounded}
                </motion.span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.span
                      key={star}
                      className="text-2xl"
                      style={{ color: star <= Math.round(4.7) ? '#FFD700' : '#E0E0E0' }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
              </div>
              <span className="text-xl text-gray-700 ">Excellent</span>
              <p className="text-gray-500 text-sm mt-1">540 Reviews</p>
            </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://g.page/r/CfWj7DtvVBF9EAE/review', '_blank')}
              className="w-full md:w-auto bg-blue-500 text-white px-8 py-3 rounded-full text-base font-medium hidden md:block"
            >
              Leave Review
            </motion.button>
          </div>

          {/* Middle Section - Rating Distribution */}
          <div className="w-full md:w-2/4 mt-8 md:mt-4 space-y-3">
            {[5, 4, 3, 2, 1].map((stars) => (
              <motion.div 
                key={stars}
                className="flex items-center gap-4"
                onHoverStart={() => setIsHovered(stars)}
                onHoverEnd={() => setIsHovered(null)}
              >
                <div className="flex items-center gap-1 w-24">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="text-sm"
                      style={{ color: star <= stars ? '#FFD700' : '#E0E0E0' }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ 
                      width: `${stars === 5 ? 75 : stars === 4 ? 15 : stars === 3 ? 7 : stars === 2 ? 2 : 1}%`
                    }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ 
                      backgroundColor: '#FFD700',
                      opacity: isHovered === stars ? 1 : 0.8
                    }}
                  />
                </div>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open('https://g.page/r/CfWj7DtvVBF9EAE/review', '_blank')}
              className="w-full md:w-auto bg-blue-500 text-white px-8 py-3 rounded-full text-base font-medium block md:hidden mt-6"
            >
              Leave Review
            </motion.button>
          </div>

          {/* Right Section - Illustration */}
          <div className="hidden md:flex md:w-1/4 items-center justify-center">
            <img 
              src="/illustration.png" 
              alt="Review illustration" 
              className="w-full max-w-[200px] h-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Review;
