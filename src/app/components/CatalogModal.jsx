import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const catalogItems = [
  {
    title: "Roundneck T-shirt Catalogue",
    image: "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393642.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
    file: "/catalogs/roundneck.pdf"
  },
  {
    title: "Polo T-shirts Catalogue",
    image: "https://img.freepik.com/premium-photo/polo-shirt-design-young-man-black-polo-shirt-isolated_324842-59.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
    file: "/catalogs/polo.pdf"
  },
  {
    title: "Hoodie & Jackets",
    image: "https://img.freepik.com/free-photo/black-sweater-apparel-shoot-with-design-space_53876-102943.jpg",
    file: "/catalogs/hoodie.pdf"
  },
  {
    title: "Sports Jersey Catalogue",
    image: "https://img.freepik.com/free-photo/cheerful-young-sports-man-using-mobile-phone-listening-music_171337-8215.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
    file: "/catalogs/sports.pdf"
  },
  {
    title: "Corporate Shirt Catalogue",
    image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-casual-shirt-clothes-fashion-man_158538-5023.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
    file: "/catalogs/corporate.pdf"
  },
  {
    title: "Cap Catalogue",
    image: "https://img.freepik.com/free-psd/cap-mockup_1310-495.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
    file: "/catalogs/cap.pdf"
  },
  {
    title: "Corporate Gift Set",
    image: "https://img.freepik.com/free-psd/corporate-identity-branding-mockup_1389-894.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
    file: "/catalogs/giftset.pdf"
  },
  {
    title: "Drinkware Catalogue",
    image: "https://img.freepik.com/free-vector/realistic-monochrome-mug-collection_52683-70000.jpg?uid=R154017377&ga=GA1.1.995517755.1740478319&semt=ais_hybrid",
    file: "/catalogs/drinkware.pdf"
  }
];

export default function CatalogModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-5xl h-[90vh] z-50"
          >
            <div className="bg-white rounded-xl shadow-2xl h-full flex flex-col">
              {/* Header - Fixed */}
              <div className="border-b border-gray-100 px-6 py-4 flex items-center justify-between bg-white rounded-t-xl">
                <h3 className="text-xl font-semibold text-gray-900">
                  Ekam Catalogues
                </h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full">
                <style jsx global>{`
                  /* Webkit browsers like Chrome, Safari */
                  .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                  }
                  
                  .scrollbar-thin::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  
                  .scrollbar-thin::-webkit-scrollbar-thumb {
                    background-color: #E5E7EB;
                    border-radius: 9999px;
                  }

                  .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                    background-color: #D1D5DB;
                  }

                  /* Firefox */
                  .scrollbar-thin {
                    scrollbar-width: thin;
                    scrollbar-color: #E5E7EB transparent;
                  }
                `}</style>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catalogItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="aspect-[4/5] relative bg-gray-50">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400x500?text=Catalog+Image";
                          }}
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                        <a
                          href={item.file}
                          download
                          className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download PDF
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer - Fixed */}
              <div className="border-t border-gray-100 px-6 py-4 bg-gray-50 rounded-b-xl">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Select a catalogue to download
                  </p>
                  <button
                    onClick={onClose}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 