"use client";
import { useState } from 'react';
import { db } from '../../firebase';
import { collection, setDoc, doc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

const products = [
    { id: 1, title: "ROUNDNECK T-SHIRTS" },
    { id: 2, title: "COLLAR T-SHIRTS" },
    { id: 3, title: "HOODIES / JACKETS" },
    { id: 4, title: "CORPORATE SHIRTS" },
    { id: 5, title: "SPORTS JERSEY" },
    { id: 6, title: "CAPS" },
    { id: 7, title: "BRANDED APPARELS" },
    { id: 8, title: "DRINKWARE" },
    { id: 9, title: "CORPORATE GIFT SET" },
    { id: 10, title: "DIARIES & PENS" },
    { id: 11, title: "DESK ORGANIZERS" },
    { id: 12, title: "SMART GADGETS" },
    { id: 13, title: "TECH GADGETS" },
    { id: 14, title: "BAGS & LUGGAGE" },
    { id: 15, title: "PERSONALIZED PRODUCTS" },
];

const Quote = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    location: '',
    companyName: '',
    jobTitle: '',
    quantity: '',
    productRequirement: '',
    note: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Create custom document ID with current timestamp
      const timestamp = Date.now();
      const customDocId = `enquiry${timestamp}`;
      
      // Create a new document with custom ID in the Enquiry collection
      const docRef = doc(db, 'Enquiry', customDocId);
      await setDoc(docRef, {
        ...formData,
        timestamp: serverTimestamp(),
        submittedAt: new Date().toISOString(),
        approved: false,
        status: 'pending'
      });
      
      console.log('Form submitted with ID:', customDocId);
      // Clear form
      setFormData({
        fullName: '',
        mobileNumber: '',
        location: '',
        companyName: '',
        jobTitle: '',
        quantity: '',
        productRequirement: '',
        note: ''
      });
      // Redirect to thank you page
      router.push('/thankyou');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? (checked ? value : prev[name]) : value
    }));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8 ">
        {/* Left side - Image and Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get A Quick Quote Now
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Fill out our form, and one of the team member will quickly get back to you with a great price.
          </p>
          
          {/* Why Choose Us Section */}
          <div className="mb-8 bg-white/50 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                <span className="text-sm text-gray-600">Premium Quality</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                <span className="text-sm text-gray-600">Quick Turnaround</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                <span className="text-sm text-gray-600">Bulk Orders</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                <span className="text-sm text-gray-600">Custom Branding</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/products/group.png" 
              alt="Corporate Gifting Solutions" 
              className="w-full rounded-lg "
            />
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-blue-100 via-pink-50 to-yellow-100 rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 rounded-xl border-0 bg-white/70 backdrop-blur-sm focus:bg-white text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-pink-500 transition-all duration-200 outline-none"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Mobile Number *</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  required
                  className="w-full px-4 py-3 rounded-xl border-0 bg-white/70 backdrop-blur-sm focus:bg-white text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-pink-500 transition-all duration-200 outline-none"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  required
                  className="w-full px-4 py-3 rounded-xl border-0 bg-white/70 backdrop-blur-sm focus:bg-white text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-pink-500 transition-all duration-200 outline-none"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  required
                  className="w-full px-4 py-3 rounded-xl border-0 bg-white/70 backdrop-blur-sm focus:bg-white text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-pink-500 transition-all duration-200 outline-none   "
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Job Title *</label>
                <input
                  type="text"
                  name="jobTitle"
                  required
                  className="w-full px-4 py-3 rounded-xl border-0 bg-white/70 backdrop-blur-sm focus:bg-white text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-pink-500 transition-all duration-200 outline-none"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Enter your job title"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-3">Quantity Required *</label>
                <div className="flex flex-wrap gap-4">
                  {['25-50', '50-100', '100-200', '200-500', 'Above 500'].map((range) => (
                    <label key={range} className="flex items-center">
                      <input
                        type="radio"
                        name="quantity"
                        value={range}
                        checked={formData.quantity === range}
                        onChange={handleChange}
                        className="w-4 h-4 text-pink-500 border-gray-300 focus:ring-pink-500 focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-gray-600">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Product Requirement *</label>
                <div className="relative">
                  <select
                    name="productRequirement"
                    required
                    className="w-full px-4 py-3 rounded-xl border-0 bg-white/70 backdrop-blur-sm focus:bg-white text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-pink-500 transition-all duration-200 appearance-none cursor-pointer"
                    value={formData.productRequirement}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select a product</option>
                    {products.map(product => (
                      <option 
                        key={product.id} 
                        value={product.title}
                        className="py-2"
                      >
                        {product.title}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Note</label>
                <textarea
                  name="note"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border-0 bg-white/70 backdrop-blur-sm focus:bg-white text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-pink-500 transition-all duration-200 outline-none"
                  value={formData.note}
                  onChange={handleChange}
                  placeholder="Add any additional notes here..."
                ></textarea>
              </div>

              <div className="space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-black text-white font-medium py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:from-cyan-600 hover:to-blue-600 transform hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing your request...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Get Quote Now</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </button>
                {isSubmitting && (
                  <p className="text-sm text-center text-gray-500 animate-pulse">
                    Please wait while we process your request...
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;
