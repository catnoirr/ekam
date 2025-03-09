'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      name: 'Embroidery',
      image: '/services/embroidery.webp',
      description: 'Premium embroidery services for logos, designs, and custom patterns with exceptional detail and durability.',
      color: 'bg-blue-500'
    },
    {
      name: 'Vinyl Printing',
      image: '/services/vinyl.webp',
      description: 'High-quality vinyl printing perfect for custom t-shirts, signs, and promotional materials.',
      color: 'bg-pink-500'
    },
    {
      name: 'Screen Printing',
      image: '/services/screen.webp',
      description: 'Professional screen printing services ideal for bulk orders, team uniforms, and merchandise.',
      color: 'bg-yellow-400'
    },
    {
      name: 'Sublimation',
      image: '/services/sublimation.webp',
      description: 'Full-color sublimation printing for vibrant, long-lasting designs on various materials.',
      color: 'bg-blue-500'
    },
    {
      name: 'DTF Printing',
      image: '/services/dtf.webp',
      description: 'Direct-to-film printing technology for versatile and durable transfers on multiple fabric types.',
      color: 'bg-pink-500'
    },
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10  bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-red-500 font-semibold text-xl mb-1 block">
            Discover Our Services
          </span>
          <h2 className="text-3xl font-bold mb-1 text-black">
            Premium{' '}
            <span className="text-blue-600">
              Printing Solutions
            </span>
          </h2>
          <div className="w-1/4 h-1 mx-auto mb-6 bg-yellow-400 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
           Design to reality - Get a high quality printing solutions experience crafted just for you.
          </p>
        </div>

        <Slider {...settings} className="services-slider">
          {services.map((service, index) => (
            <div key={index} className="px-4 py-6">
              <div className="bg-white rounded-3xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 h-[500px] group">
                <div className="relative h-72">
                  <Image
                    src={service.image}
                    alt="images"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${service.color}/60`}></div>
                </div>
                <div className="p-8 relative">
                  <div className="absolute top-0 left-0 w-full h-16"></div>
                  <p className="text-black leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .services-slider .slick-slide {
          padding: 0 15px;
        }
      `}</style>
    </section>
  );
};

export default Services;
