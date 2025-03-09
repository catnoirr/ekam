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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className=" flex items-center justify-center  py-12 px-4">
    <motion.div 
        className="w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        variants={itemVariants}
          className="p-6 md:p-8 border-b border-gray-100"
      >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-4">
              <div className=" h-16  overflow-hidden">
            <img src="/newlogo.png" alt="WeMee Logo" className="w-full h-full object-cover" />
          </div>
          <div>
                <div className="flex items-center gap-2">
                  <img src="/google.png" alt="Google" className="h-5" />
                  <motion.span className="text-2xl font-bold text-gray-800">
                {rounded}
              </motion.span>
            </div>
                <div className="flex items-center gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.span
                  key={star}
                  whileHover={{ scale: 1.2 }}
                      className="text-lg"
                  style={{ color: star <= Math.round(4.7) ? '#FFD700' : '#E0E0E0' }}
                >
                  ★
                </motion.span>
              ))}
            </div>
          </div>
        </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:ml-auto">
              <p className="text-gray-600 text-sm font-medium">519 verified reviews</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open('https://g.page/r/CfWj7DtvVBF9EAE/review', '_blank')}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap"
          >
            Write a Review
          </motion.button>
            </div>
        </div>
      </motion.div>

        <div className="grid md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        <motion.div 
          variants={itemVariants}
            className="p-6 md:p-8 md:col-span-3"
        >
            <h3 className="text-sm font-semibold text-gray-700 mb-4">Rating Distribution</h3>
            <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((stars) => (
              <motion.div 
                key={stars}
                className="flex items-center gap-3"
                onHoverStart={() => setIsHovered(stars)}
                onHoverEnd={() => setIsHovered(null)}
              >
                  <div className="w-8 text-sm font-medium text-gray-600">
                    {stars}★
                </div>
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stars === 5 ? 75 : stars === 4 ? 15 : stars === 3 ? 7 : stars === 2 ? 2 : 1}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ 
                      backgroundColor: isHovered === stars ? '#FFD700' : '#FFC107',
                      opacity: isHovered === stars ? 1 : 0.8
                    }}
                  />
                </div>
                  <div className="w-12 text-right text-sm font-medium text-gray-500">
                  {stars === 5 ? '75%' : stars === 4 ? '15%' : stars === 3 ? '7%' : stars === 2 ? '2%' : '1%'}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={itemVariants}
            className="p-6 md:p-8 md:col-span-2 flex items-center justify-center"
        >
          <img 
            src="/illustration.png" 
            alt="Review illustration" 
              className="max-w-[200px] w-full h-auto"
          />
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
};

export default Review;
