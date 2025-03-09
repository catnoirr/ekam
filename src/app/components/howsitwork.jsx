import React from 'react'

export default function howsitwork() {
  return (
    <div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Custom Design</h3>
            <p className="text-sm text-gray-600">Upload your own designs or let our team create something unique for you</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Bulk Orders</h3>
            <p className="text-sm text-gray-600">Perfect for corporate events, team uniforms, and promotional merchandise</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Quality Assured</h3>
            <p className="text-sm text-gray-600">Premium materials and expert craftsmanship for lasting quality</p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">How It Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-semibold">1</div>
              <h3 className="text-base font-semibold mb-1">Fill Details</h3>
              <p className="text-sm text-gray-600">Complete the form below</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-semibold">2</div>
              <h3 className="text-base font-semibold mb-1">Upload Design</h3>
              <p className="text-sm text-gray-600">Share your design</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-semibold">3</div>
              <h3 className="text-base font-semibold mb-1">Get Quote</h3>
              <p className="text-sm text-gray-600">Receive pricing</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-semibold">4</div>
              <h3 className="text-base font-semibold mb-1">Production</h3>
              <p className="text-sm text-gray-600">Create products</p>
            </div>
          </div>
        </div>
    </div>
  )
}
