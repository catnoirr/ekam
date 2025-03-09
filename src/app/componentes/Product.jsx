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
        image: "https://img.freepik.com/free-photo/simple-black-t-shirt-worn-by-man_53876-102772.jpg?uid=R154017377&ga=GA1.1.1669204415.1735993747&semt=ais_hybrid",
        link: "/products/roundneck"
    },
    {
        id: 2,
        title: "COLLAR T-SHIRTS",
        description: "Professional polo collection",
        image: "https://img.freepik.com/premium-photo/polo-shirt-design-young-man-black-polo-shirt-isolated_324842-59.jpg?uid=R154017377&ga=GA1.1.1669204415.1735993747&semt=ais_hybrid",
        link: "/products/collar"
    },
    {
        id: 3,
        title: "HOODIES / JACKETS",
        description: "Stay warm in style",
        image: "https://img.freepik.com/free-photo/young-person-wearing-hoodie-mockup_23-2149246216.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
        link: "/products/hoodies"
    },
    {
        id: 4,
        title: "CORPORATE SHIRTS",
        description: "Business ready apparel",
        image: "https://img.freepik.com/premium-photo/handsome-businessman_53419-3419.jpg?uid=R154017377&ga=GA1.1.1669204415.1735993747&semt=ais_hybrid",
        link: "/products/corporate"
    },
    {
        id: 5,
        title: "SPORTS JERSEY",
        description: "Performance sportswear",
        image: "https://img.freepik.com/free-photo/3-color-tshirt-template-design_1409-4398.jpg?uid=R154017377&ga=GA1.1.1669204415.1735993747&semt=ais_hybrid",
        link: "/products/sports"
    },
    {
        id: 6,
        title: "CAPS",
        description: "Stylish headwear collection",
        image: "https://img.freepik.com/premium-photo/stack-assorted-baseball-caps-white-background_93675-163140.jpg?uid=R154017377&ga=GA1.1.1669204415.1735993747&semt=ais_hybrid",
        link: "/products/caps"
    },
    {
        id: 7,
        title: "BRANDED APPARELS",
        description: "Custom branded clothing",
        image: "https://img.freepik.com/premium-photo/young-handsome-man-black-hoodie-zipper-posing-plain-wall_262099-162.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
        link: "/products/branded"
    },
    {
        id: 8,
        title: "DRINKWARE",
        description: "Premium drink accessories",
        image: "https://img.freepik.com/premium-psd/hand-hold-bottle-water-mockup_206643-32.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
        link: "/products/drinkware"
    },
    {
        id: 9,
        title: "CORPORATE GIFT SET",
        description: "Premium drink accessories",
        image: "https://img.freepik.com/premium-photo/gifts-black-golden-decorations-white-background-christmas-winter-new-year-concept_241749-183.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
        link: "/products/giftset"
    },
    {
        id: 10,
        title: "DIARIES & PENS",
        description: "Premium drink accessories",
        image: "https://img.freepik.com/free-photo/top-view-red-notebook-with-white-background_23-2148236793.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
        link: "/products/diaries"
    },
   
    {
        id: 11,
        title: "DESK ORGANIZERS",
        description: "Premium drink accessories",
        image: "https://img.freepik.com/free-photo/books-vase-vintage-camera-eyeglasses-pencil-holders-white-blank-paper-wooden-backdrop_23-2147979111.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
        link: "/products/desk-accessories"
    },
    {
        id: 12,
        title: "SMART GADGETS",
        description: "Premium drink accessories",
        image: "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309628.jpg?t=st=1741369628~exp=1741373228~hmac=dec178682216c4d479b63afe89a5b32a2d146ade2ad7dcb78806fcc78a713255&w=740",
        link: "/products/smart-gadgets"
    },
    {
        id: 13,
        title: "TECH GADGETS",
        description: "Premium drink accessories",
        image: "https://img.freepik.com/premium-photo/high-angle-view-digital-camera-table_1048944-23315823.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
        link: "/products/tech-gadgets"
    },
    {
        id: 14,
        title: "BAGS & LUGGAGE",
        description: "Premium drink accessories",
        image: "https://img.freepik.com/free-photo/travel-bags-ready-trip_23-2148232365.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
        link: "/products/bags"
    },
    {
        id: 15,
        title: "PERSONALIZED PRODUCTS",
        description: "Premium drink accessories",
        image: "https://img.freepik.com/free-photo/elevated-view-camera-lens-spiral-notebook-cellphone-personal-accessories-background_23-2147856120.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
        link: "/products/products"
    },
]

const Product = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [visibleProducts, setVisibleProducts] = useState(8);

    const handleProductClick = (e, product) => {
        e.preventDefault(); // Prevent the default link behavior
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleShowMore = () => {
        setVisibleProducts(products.length);
    };

    return (
        <>
            <div className="text-center mt-10" id="products">
                    <h2 className="text-3xl font-bold mb-4">
                        Explore Our <span className="text-red-600">Categories</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Your one-stop solution for all Printing needs.
                    </p>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-yellow-500 mx-auto mt-6 rounded-full"></div>
                </div>
            <div className="py-20 px-4 ">
                <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.slice(0, visibleProducts).map((product) => (
                        <Link 
                            href={product.link} 
                            key={product.id}
                            onClick={(e) => handleProductClick(e, product)}
                            className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
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
                                        Print Now
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

                    {visibleProducts < products.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={handleShowMore}
                                className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
                            >
                                <span>Show More</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5 animate-bounce group-hover:animate-bounce" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path 
                                        fillRule="evenodd" 
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                                        clipRule="evenodd" 
                                    />
                                </svg>
                            </button>
                        </div>
                    )}

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
            </div>
        </>
    )
}

export default Product
