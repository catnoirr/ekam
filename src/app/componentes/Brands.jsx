'use client';
import { useEffect, useRef } from 'react';

const Brands = () => {
  const brands = [
    { id: 1, image: '/brands/Customer-Photos-1.webp' },
    { id: 2, image: '/brands/Customer-Photos-2.webp' },
    { id: 3, image: '/brands/Customer-Photos-3.webp' },
    { id: 4, image: '/brands/Customer-Photos-4.webp' },
    { id: 5, image: '/brands/Customer-Photos-5.webp' },
    { id: 6, image: '/brands/Customer-Photos-6.webp' },
    { id: 7, image: '/brands/Customer-Photos-7.webp' },
    { id: 8, image: '/brands/Customer-Photos-8.webp' },
    { id: 9, image: '/brands/Customer-Photos-9.webp' },
    { id: 10, image: '/brands/Customer-Photos-10.webp' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Brands Who Have <span className="text-pink-600">Trusted Us</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {/* First set of brands */}
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex-none w-48 h-48"
              >
                <img
                  src={brand.image}
                  alt={`Brand ${brand.id}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
            {/* Duplicate set for seamless scrolling */}
            {brands.map((brand) => (
              <div
                key={`duplicate-${brand.id}`}
                className="flex-none w-48 h-48"
              >
                <img
                  src={brand.image}
                  alt={`Brand ${brand.id}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
