'use client';

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LeadershipCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const leaders = [
    { image: "https://wemeestore.com/wp-content/uploads/2025/01/On-Time-Delivery-Granted.webp" },
    { image: "https://wemeestore.com/wp-content/uploads/2025/01/Expert-Team-To-Assist-You.webp" },
    { image: "https://wemeestore.com/wp-content/uploads/2025/01/Trusted-300-Brands.webp" },
    { image: "https://wemeestore.com/wp-content/uploads/2025/01/Top-Rated-Printing-Service.webp" },
  ];

  return (
    <div className="mx-auto px-4 text-center">
      <div className="bg-[#fafeff] py-5">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Ekam</h2>
      <p className="text-lg font-regular text-gray-700 mb-4 max-w-xs mx-auto">We provide printing services that will suit your specific needs.</p>
      </div>
      <div className="max-w-5xl mx-auto">
        <Slider {...settings}>
          {leaders.map((leader, index) => (
            <div key={index} className="px-2">
              <div className="relative w-48 h-60 mx-auto overflow-hidden">
                <Image src={leader.image} alt={leader.name} fill className="object-cover" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LeadershipCarousel;
