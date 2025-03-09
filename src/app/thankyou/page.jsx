'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import CatalogModal from '../components/CatalogModal'

export default function ThankYou() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="h-1 bg-blue-600" />
      
      <main className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white shadow-sm rounded-xl p-8">
          {/* Success Icon */}
          <div className="mb-8 text-center">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-2xl font-semibold text-gray-900 mb-3">
              Thank You for Your Enquiry
            </h1>
            <p className="text-gray-600">
              We appreciate your interest in Ekam Corporate Gifting Company.<br />
              Our team will review your request and respond within 24 hours.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 mb-8">
            <h2 className="text-sm font-medium text-gray-500 text-center uppercase tracking-wide">
              Need immediate assistance?
            </h2>
            <div className="grid sm:grid-cols-1 gap-4">
              <a href="tel:+919773347222" 
                className="flex items-center p-4 rounded-lg border border-gray-100 hover:border-blue-100 hover:bg-blue-50 transition-colors group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="ml-3 text-gray-600 group-hover:text-blue-600">+91 97733 47222</span>
              </a>
              
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              View Catalogue
            </button>
            <Link href="https://wa.me/+919773347222"
              className="flex items-center justify-center px-5 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-2 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ekam Corporate Gifting. All rights reserved.
        </footer>
      </main>

      {/* Catalog Modal */}
      <CatalogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        catalogData={{
          pageCount: 12,
          description: "Explore our complete collection of corporate gifting solutions and customized clothing options."
        }}
      />
    </div>
  )
}

// Add these styles to your globals.css or equivalent
const styles = `
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
`;
