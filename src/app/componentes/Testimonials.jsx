'use client'
import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Bhagyashree Gaikwad",
    image: "/brands/Customer-Photos-9.webp",
    rating: 5,
    text: "Their service is upto mark. I approached them for an urgent print and they came up as life saviors. I loved their cooperation as well as aura of communicating with their customers. Keep going guys, may you achieve great heights."
  },
  {
    id: 2,
    name: "Melbin Alexander",
    image: "/brands/Customer-Photos-8.webp",
    rating: 5,
    text: "It was our first experience working with them. We placed an order for logo printing on custom T-shirts for our company, and the whole experience was exceptionally seamless."
  },
  {
    id: 3,
    name: "Sangram Jaiswal",
    image: "/brands/Customer-Photos-5.webp",
    rating: 5,
    text: "WeMee offers exceptional custom mug printing services at affordable rates! We recently customise mugs with logo, and they did it perfectly, just the way we wanted. We're happy with their quality and service. If you're looking for reliable and professional mug printing, WeMee is highly recommended for all your custom printing needs!"
  },
  {
    id: 4,
    name: "Neha Kavade",
    image: "/brands/Customer-Photos-3.webp",
    rating: 5,
    text: "We customise caps from WeMee at affordable rates. We order them to embroider logo on caps and they did it perfectly as we want. we our happy with their service and will place our next from them. We highly recommend WeMee for all printing service."
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
    image: "/brands/Customer-Photos-7.webp",
    rating: 5,
    text: "Exceptional work on our custom merchandise. The attention to detail was impressive."
  },
  {
    id: 7,
    name: "Mike Brown",
    image: "/brands/Customer-Photos-1.webp",
    rating: 5,
    text: "Great experience working with the team. They were responsive and delivered on time."
  },
  {
    id: 8,
    name: "Emily Davis",
    image: "/brands/Customer-Photos-6.webp",
    rating: 5,
    text: "The quality of the prints exceeded our expectations. Highly recommended!"
  }
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialsPerPage = 4;
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
          <h1 className="text-4xl font-bold mb-4">What Our Clients Say !</h1>
          <div className="text-2xl font-semibold text-[#00D1C1]">Let's Check</div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s testimonial`}
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm line-clamp-4">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6 text-[#00D1C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none z-10 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6 text-[#00D1C1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
