'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ModalDrawer from './ModalDrawer'

const products = [
    {
        id: 1,
        title: "ROUNDNECK T-SHIRTS",
        description: "Classic comfort meets style",
        image: "/products/roundedneck.png",
        link: "/products/roundneck"
    },
    {
        id: 2,
        title: "COLLAR T-SHIRTS",
        description: "Professional polo collection",
        image: "/products/collar.png",
        link: "/products/collar"
    },
    {
        id: 3,
        title: "HOODIES / JACKETS",
        description: "Stay warm in style",
        image: "/products/hoodie.png",
        link: "/products/hoodies"
    },
    {
        id: 4,
        title: "CORPORATE SHIRTS",
        description: "Business ready apparel",
        image: "/products/corporate.png",
        link: "/products/corporate"
    },
    {
        id: 5,
        title: "SPORTS JERSEY",
        description: "Performance sportswear",
        image: "/products/sports.png",
        link: "/products/sports"
    },
    {
        id: 6,
        title: "CAPS",
        description: "Stylish headwear collection",
        image: "/products/caps.png",
        link: "/products/caps"
    },
    {
        id: 7,
        title: "BRANDED APPARELS",
        description: "Custom branded clothing",
        image: "/products/branded.png",
        link: "/products/branded"
    },
    {
        id: 8,
        title: "DRINKWARE",
        description: "Premium drink accessories",
        image: "/products/drinkware.png",
        link: "/products/drinkware"
    },
    {
        id: 9,
        title: "CORPORATE GIFT SET",
        description: "Premium drink accessories",
        image: "/products/coporate-gift-set.png",
        link: "/products/giftset"
    },
    {
        id: 10,
        title: "DIARIES & PENS",
        description: "Premium drink accessories",
        image: "/products/pens.png",
        link: "/products/diaries"
    },
   
    {
        id: 11,
        title: "DESK ORGANIZERS",
        description: "Premium drink accessories",
        image: "/products/desk.png",
        link: "/products/desk-accessories"
    },
    {
        id: 12,
        title: "SMART GADGETS",
        description: "Premium drink accessories",
        image: "/products/smart-gadget.png",
        link: "/products/smart-gadgets"
    },
    {
        id: 13,
        title: "TECH GADGETS",
        description: "Premium drink accessories",
        image: "/products/gadgets.png",
        link: "/products/tech-gadgets"
    },
    {
        id: 14,
        title: "BAGS & LUGGAGE",
        description: "Premium drink accessories",
        image: "/products/bags.png",
        link: "/products/bags"
    },
    {
        id: 15,
        title: "PERSONALIZED PRODUCTS",
        description: "Premium drink accessories",
        image: "/products/products.png",
        link: "/products/products"
    },
]

const Product = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (e, product) => {
        e.preventDefault(); // Prevent the default link behavior
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">
                        Top Selling <span className="text-pink-600">Products</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover our premium collection of customizable products for your brand
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-yellow-500 mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <Link 
                            href={product.link} 
                            key={product.id}
                            onClick={(e) => handleProductClick(e, product)}
                            className="group relative bg-white rounded-3xl border border-pink-300 overflow-hidden shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="aspect-[3/3] relative overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Hover Overlay Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white/90 text-sm mb-2 line-clamp-2">
                                        {product.description}
                                    </p>
                                    <div className="inline-flex items-center text-white font-medium text-sm">
                                        Explore Now
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Card Title */}
                            <div className="p-5">
                                <h3 className="font-semibold text-base text-gray-800 group-hover:text-cyan-600 transition-colors duration-300">
                                    {product.title}
                                </h3>
                            </div>

                            {/* Decorative Element */}
                            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                    ))}
                </div>

                {/* WhatsApp Help Button */}
                {/* <div className="fixed bottom-6 left-6 z-50">
                    <Link 
                        href="https://wa.me/your_number_here" 
                        className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors shadow-lg hover:shadow-xl"
                    >
                        <Image
                            src="/whatsapp-icon.png"
                            alt="WhatsApp"
                            width={24}
                            height={24}
                        />
                        <span className="font-medium">Need A Help?</span>
                    </Link>
                </div> */}
            </div>

            {/* Modal */}
            <ModalDrawer 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
                selectedProduct={selectedProduct}
            />
        </section>
    )
}

export default Product
