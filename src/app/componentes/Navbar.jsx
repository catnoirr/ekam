'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiPhone } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs'
import { useRouter, usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const categories = [
    'Corporate Gifts Set',
    'Corporate Shirts',
    'Polo T-Shirts',
    'Roundneck T-Shirts',
    'Hoodie',
    'Sports Jersey',
    'Drinkware',
    'Personalised Products',
    'Cap'
  ]

  const handleMobileMenuClick = () => {
    setIsOpen(!isOpen);
    // Close categories when closing the menu
    if (!isOpen) {
      setIsCategoryOpen(false);
    }
  };

  const handleMobileCategoryClick = (e) => {
    e.preventDefault();
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCategoryClick = (e, category) => {
    e.preventDefault();
    setIsLoading(true);

    // If not on home page, first navigate to home page
    if (pathname !== '/') {
      router.push('/');
      // Wait for navigation to complete
      setTimeout(() => {
        const productsSection = document.querySelector('#products');
        if (productsSection) {
          const navbarHeight = 64;
          const targetPosition = productsSection.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
        setIsLoading(false);
      }, 500); // Wait for 500ms for navigation
    } else {
      // If already on home page, just scroll
      const productsSection = document.querySelector('#products');
      if (productsSection) {
        const navbarHeight = 64;
        const targetPosition = productsSection.offsetTop - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  };

  return (
    <div className="bg-white">
    <nav className="fixed left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl  text-white  bg-black shadow-md z-50 rounded-full mt-2">
      {/* Loading bar - visible when isLoading is true */}
      <div 
        className={`h-0.5 bg-blue-500 transition-transform duration-300 ease-in-out ${
          isLoading ? 'w-full' : 'w-0'
        }`} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="ekam Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-500">
             HOME

            </Link>
            <div className="relative group">
              <button
                className="text-white group-hover:text-blue-500 flex items-center"
              >
                EXPLORE CATEGORIES
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={(e) => handleCategoryClick(e, category)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
            </div>
            <Link href="/customize" className="text-white hover:text-blue-500">
              CUSTOME PRODUCT
            </Link>
            <Link href="/about" className="text-white hover:text-blue-500">
              ABOUT US
            </Link>
          </div>

          {/* Right Icons */}
            <div className="flex items-center space-x-4">
            <a 
              href="https://wa.me/+919773347222" 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 text-white hover:text-green-500"
            >
              <BsWhatsapp className="h-5 w-5" />
              <span className="font-medium">Chat with us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuClick}
              className="text-white hover:text-blue-500"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-200 rounded-b-2xl shadow-lg overflow-hidden">
            <div className="max-h-[80vh] overflow-y-auto">
              <div className="px-4 py-3 space-y-2">
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-gray-700 hover:text-blue-500 rounded-lg hover:bg-gray-50"
                >
                  HOME
                </Link>
                {/* Mobile Categories */}
                <div className="space-y-1">
                  <button
                    onClick={handleMobileCategoryClick}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-gray-700 hover:text-blue-500 rounded-lg hover:bg-gray-50"
                  >
                    <span>EXPLORE CATEGORIES</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isCategoryOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isCategoryOpen && (
                    <div className="pl-4 space-y-1 bg-gray-50 rounded-lg py-2 mx-2">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={(e) => {
                            handleCategoryClick(e, category);
                            setIsOpen(false);
                            setIsCategoryOpen(false);
                          }}
                          className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-500 rounded-lg hover:bg-gray-100"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/customize"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-gray-700 hover:text-blue-500 rounded-lg hover:bg-gray-50"
                >
                  CUSTOMIZE PRODUCT
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 text-gray-700 hover:text-blue-500 rounded-lg hover:bg-gray-50"
                >
                  ABOUT US
                </Link>
                {/* Mobile WhatsApp Link */}
                <a 
                  href="https://wa.me/+919773347222" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-2.5 text-gray-700 hover:text-green-500 rounded-lg hover:bg-gray-50"
                >
                  <BsWhatsapp className="h-5 w-5" />
                  <span className="font-medium">Chat with us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </div>
  )
}

export default Navbar
