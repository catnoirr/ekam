'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

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

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="WeMee Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/customization" className="text-gray-700 hover:text-blue-500">
              CUSTOMIZATION
            </Link>
            <div className="relative group">
              <button
                className="text-gray-700 group-hover:text-blue-500 flex items-center"
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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
            </div>
            <Link href="/testimonials" className="text-gray-700 hover:text-blue-500">
              TESTIMONIALS
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-500">
              ABOUT US
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-500">
              <FiSearch className="h-5 w-5" />
            </button>
            <Link href="/account" className="text-gray-700 hover:text-blue-500">
              <FiUser className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-blue-500 relative">
              <FiShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500"
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/customization"
                className="block px-3 py-2 text-gray-700 hover:text-blue-500"
              >
                CUSTOMIZATION
              </Link>
              {/* Mobile Categories */}
              <div className="space-y-1">
                <button
                  className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-blue-500"
                >
                  EXPLORE CATEGORIES
                  <svg
                    className="w-4 h-4 transition-transform"
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
                  <div className="pl-6 space-y-1">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-500"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
              </div>
              <Link
                href="/testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-blue-500"
              >
                TESTIMONIALS
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-500"
              >
                ABOUT US
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
