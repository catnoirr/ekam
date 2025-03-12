'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Bhagyashree Gaikwad",
    image: "/r1.jpg",
    rating: 5,
    text: "Excellent printing quality and customer service. They handled my urgent request professionally. Highly recommend their services!"
  },
  {
    id: 2,
    name: "Melbin Alexander",
    image: "/brands/Customer-Photos-8.webp",
    rating: 5,
    text: "First time ordering custom T-shirts with logos. Seamless experience, excellent service, and professional handling of our request!"
  },
  {
    id: 3,
    name: "Sangram Jaiswal",
    image: "/mug.jpg",
    rating: 5,
    text: "Great custom mug printing at affordable rates. Perfect quality and service. Highly recommended for all your printing needs!"
  },
  {
    id: 4,
    name: "Neha Kavade",
    image: "/cpas.jpg",
    rating: 5,
    text: "Affordable custom caps with perfect logo embroidery. Highly recommend Ekam for all printing services."
  },
  // Adding more testimonials for pagination demo
  {
    id: 5,
    name: "John Smith",
    image: "/brands/Customer-Photos-2.webp",
    rating: 5,
    text: "Amazing service and quality! The team was very professional and delivered exactly what we needed."
  },
  {
    id: 6,
    name: "Sarah Johnson",
    image: "/bottle.jpg",
    rating: 5,
    text: "Outstanding custom merchandise with impressive attention to detail. Highly recommend for quality and service."
  },
  {
    id: 7,
    name: "Mike Brown",
    image: "/tshirt.jpg",
    rating: 5,
    text: "Fantastic team! Very responsive and timely delivery. Highly recommend for their professionalism and quality service."
  },
  {
    id: 8,
    name: "Emily Davis",
    image: "/hoodie.jpg",
    rating: 5,
    text: "Exceptional print quality and service. Exceeded expectations. Highly recommend for all your printing needs!"
  }
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setTestimonialsPerPage(4);
      } else if (window.innerWidth >= 640) {
        setTestimonialsPerPage(2);
      } else {
        setTestimonialsPerPage(1);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-black">Testimonials</h2>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-black">What Our Clients Say !</h1>
          <div className="text-xl sm:text-2xl font-semibold text-[#11b1e2]">Let's Check</div>
        </div>

        <div className="relative px-4 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {currentTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 mx-auto w-full max-w-sm"
              >
                <div className="w-[240px] h-[200px] mb-3 sm:mb-4 mx-auto">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s testimonial`}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">{testimonial.name}</h3>
                <div className="flex mb-2 sm:mb-3">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-4">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-12 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonials"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D1C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-12 bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonials"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#00D1C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
