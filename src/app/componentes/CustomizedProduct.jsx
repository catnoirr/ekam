'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ModalDrawer from  './ModalDrawer'

const CustomizedProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const products = [
    {
      id: 1,
      image: 'https://img.freepik.com/premium-photo/man-is-painting-lion-shirt-that-says-tiger_981168-13942.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid',
      title: 'Custom Apparel',
      description: 'Express yourself with personalized clothing',
      category: 'Fashion'
    },
    {
      id: 2,
      image: 'https://img.freepik.com/free-photo/close-up-hand-painting-with-sponge_23-2148754065.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid',
      title: 'Accessories',
      description: 'Add your personal touch to everyday items',
      category: 'Lifestyle'
    },
    {
      id: 3,
      image: 'https://img.freepik.com/premium-photo/embroidered-sport-cap-embroidery-machine-close-up-picture_58717-256.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid',
      title: 'Home Decor',
      description: 'Make your space uniquely yours',
      category: 'Home'
    },
    {
      id: 4,
      image: 'https://img.freepik.com/premium-psd/plastic-bottle-mock-up_106544-107.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid ',
      title: 'Home Decor',
      description: 'Make your space uniquely yours',
      category: 'Home'
    },
    
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const categories = ['All', 'Fashion', 'Lifestyle', 'Home'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white text-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6 text-black"
          >
            Create Your <span className="text-blue-400">Perfect</span> Design
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-black mb-8"
          >
            Turn your imagination into reality with our customization tools
          </motion.p>
          
        
        </div>

        {/* Products Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
              className="group relative overflow-hidden rounded-2xl bg-gray-800"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                
                 
                 
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredId === product.id ? 0 : 20,
                      opacity: hoveredId === product.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div 
                      onClick={() => setIsOpen(true)}
                      className="inline-flex items-center gap-2 bg-[#00B4AA] hover:bg-[#009B92] px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Start Customizing
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <div className=" text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex flex-col items-center"
          >
            <p className="text-2xl font-medium text-white mb-6">
              Ready to bring your ideas to life?
            </p>
            <Link 
              href="https://maps.app.goo.gl/8r2vAQfpW4KFT8jp6"
              className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span>Visit Store</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
      <ModalDrawer 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedProduct={null}
      />
    </section>
  );
};

export default CustomizedProduct;