'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const brands = [
  {
    id: 1,
    name: 'Oracle',
    image: '/brands/oracle.png'
  },
  {
    id: 2,
    name: 'Tata Power',
    image: '/brands/tata-power.png'
  },
  {
    id: 3,
    name: 'TCS',
    image: '/brands/tcs.png'
  },
  {
    id: 4,
    name: 'TEDx',
    image: '/brands/tedx.png'
  },
  {
    id: 5,
    name: 'Vadilal',
    image: '/brands/vadilal.png'
  }
];

const Brand = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Trusted By Countless <span className="text-cyan-500">Brands</span>
          </h2>
          <p className="text-gray-600 text-lg">
            500 Clients | 1000+ Happy Customer
          </p>
        </div>

        <div className="brand-slider">
          <Slider {...settings}>
            {brands.map((brand) => (
              <div key={brand.id} className="px-4">
                <div className="flex items-center justify-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={200}
                    height={80}
                    className="object-contain h-20"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .brand-slider .slick-track {
          display: flex;
          align-items: center;
        }
        .brand-slider .slick-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default Brand;
