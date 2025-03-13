'use client';
import { useEffect, useRef } from 'react';

const Brands = () => {
  const brands = [
    { id: 1, image: '/brand1.jpg' },
    { id: 2, image: '/brand2.jpg' },
    { id: 3, image: '/brand3.jpg' },
    { id: 4, image: '/brand4.jpg' },
    { id: 5, image: '/brand5.jpeg' },
    { id: 6, image: '/brand6.jpg' },
    { id: 7, image: '/brand7.jpg' },
    { id: 8, image: '/brand8.png' },
    { id: 9, image: '/brand9.jpg' },
    { id: 10, image: '/brand10.jpg' },
    { id: 11, image: '/brand11.jpg' },
    { id: 12, image: '/brand12.jpg' },

  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Brands Who Have <span className="text-red-600">Trusted Us</span>
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
                  className="w-full h-full object-contain  rounded-lg shadow-md"
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
                  className="w-full h-full object-contain rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .animate-scroll {
          animation: scroll 7s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Brands;
