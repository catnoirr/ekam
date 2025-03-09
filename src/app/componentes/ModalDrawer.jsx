'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
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

const inputStyles = "w-full border border-gray-300 rounded-3xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all";
const radioStyles = "peer sr-only";
const radioLabelStyles = "w-full text-center px-3 py-2 text-sm border border-gray-300 rounded-3xl cursor-pointer peer-checked:bg-pink-500 peer-checked:text-white peer-checked:border-transparent hover:bg-gray-50 transition-all";
const submitButtonStyles = "w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-3xl font-medium hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300";

const ModalDrawer = ({ isOpen, onClose, selectedProduct }) => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const initialFormState = {
    fullName: '',
    mobileNumber: '',
    location: '',
    companyName: '',
    jobTitle: '',
    quantity: '',
    productRequirement: '',
    note: '',
    isNew: true
  };
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        productRequirement: selectedProduct.title
      }));
    }
  }, [selectedProduct]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      // Clear form fields
      setFormData(initialFormState);
      // Close modal
      onClose();
      // Redirect to thank you page
      router.push('/thankyou');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const variants = {
    mobile: {
      initial: { y: '100%' },
      animate: { y: 0 },
      exit: { y: '100%' },
    },
    desktop: {
      initial: { opacity: 0, scale: 0.95, y: 20 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.95, y: 20 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={isMobile ? variants.mobile.initial : variants.desktop.initial}
            animate={isMobile ? variants.mobile.animate : variants.desktop.animate}
            exit={isMobile ? variants.mobile.exit : variants.desktop.exit}
            transition={{ 
              type: "spring",
              damping: 30,
              stiffness: 300,
              duration: 0.3
            }}
            className={`fixed ${
              isMobile 
                ? 'bottom-0 left-0 right-0 max-h-[90vh]' 
                : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[90vh] w-full max-w-2xl'
            } bg-white rounded-t-[20px] md:rounded-[20px] z-50 shadow-2xl flex flex-col overflow-hidden`}
          >
            {/* Fixed Header */}
            <div className="flex-shrink-0 bg-white px-6 py-4 border-b border-gray-100 flex justify-between items-center rounded-t-[20px]">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Printing Beyond Limits</h2>
                {selectedProduct && (
                  <p className="text-sm text-gray-500 mt-1">Selected: {selectedProduct.title}</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <span className="sr-only">Close</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:none]">
              <div className="px-6 py-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={inputStyles}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Mobile Number *</label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        className={inputStyles}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Location *</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className={inputStyles}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">Company Name *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className={inputStyles}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Job Title *</label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className={inputStyles}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-3">Quantity Required *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                      {['25-50', '50-100', '100-200', '200-500', 'Above 500'].map((quantity) => (
                        <label key={quantity} className="relative">
                          <input
                            type="radio"
                            name="quantity"
                            value={quantity}
                            checked={formData.quantity === quantity}
                            onChange={handleInputChange}
                            className={radioStyles}
                            required
                          />
                          <div className={radioLabelStyles}>
                            {quantity}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Product Requirement *</label>
                    <select 
                      name="productRequirement"
                      value={formData.productRequirement}
                      onChange={handleInputChange}
                      className={inputStyles}
                      required
                    >
                      <option value="">Select a product</option>
                      {products.map(product => (
                        <option key={product.id} value={product.title}>
                          {product.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">Note</label>
                    <textarea
                      name="note"
                      value={formData.note}
                      onChange={handleInputChange}
                      className={inputStyles}
                      rows="4"
                      placeholder="Add any additional requirements or specifications..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`${submitButtonStyles} ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''} relative`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </div>
                    ) : (
                      'SUBMIT'
                    )}
                  </button>
                </form>

                <div className="mt-8 space-y-4 text-center pb-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm">Our expert team will reach out to you within 24 hours.</p>
                  <p className="text-gray-600 text-sm">For a quick response, please contact us directly.</p>
                  <a
                    href="https://wa.me/your-number"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-2.5 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalDrawer;
