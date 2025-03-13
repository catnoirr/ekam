"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { db, storage } from "../../firebase";
import { collection, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

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

const inputStyles =
  "w-full border border-gray-300 rounded-3xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm hover:border-blue-300 text-black";
const radioStyles = "peer sr-only";
const radioLabelStyles =
  "w-full text-center px-3 py-2.5 text-sm font-medium border border-gray-300 rounded-3xl cursor-pointer peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-blue-600 peer-checked:text-white peer-checked:border-transparent hover:bg-gray-50 hover:border-blue-300 transition-all duration-300 text-black";
const submitButtonStyles =
  "w-full bg-black text-white py-3.5 rounded-3xl font-medium hover:from-blue-600 hover:to-blue-700 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-blue-500/25";

export default function Home() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [designFile, setDesignFile] = useState(null);
  const [designPreview, setDesignPreview] = useState(null);

  const initialFormState = {
    fullName: "",
    mobileNumber: "",
    location: "",
    companyName: "",
    jobTitle: "",
    quantity: "",
    productRequirement: "",
    note: "",
    customizationDetails: "",
    colors: "",
    sizes: "",
    isNew: true,
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDesignFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setDesignPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const timestamp = Date.now();
      const customDocId = `customization${timestamp}`;
      let designFileUrl = null;

      // Upload design file if it exists
      if (designFile) {
        const storageRef = ref(storage, `designs/${customDocId}/${designFile.name}`);
        await uploadBytes(storageRef, designFile);
        designFileUrl = await getDownloadURL(storageRef);
      }

      const docRef = doc(db, "Customizations", customDocId);
      await setDoc(docRef, {
        ...formData,
        designIncluded: !!designFile,
        designFileUrl,
        timestamp: serverTimestamp(),
        submittedAt: new Date().toISOString(),
        approved: false,
        status: "pending",
      });

      // Clear form fields
      setFormData(initialFormState);
      setDesignFile(null);
      setDesignPreview(null);

      // Redirect to thank you page
      router.push("/thankyou");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 bg-clip-text  bg-gradient-to-r from-blue-600 to-blue-800">
            Custom Product Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your ideas into reality with our premium customization services
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Start Your Custom Order
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Fill in the details below to get started
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Full Name <span className="text-blue-500">*</span>
                  </label>
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
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Mobile Number <span className="text-blue-500">*</span>
                  </label>
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
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Location <span className="text-blue-500">*</span>
                  </label>
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
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Company Name <span className="text-blue-500">*</span>
                  </label>
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
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Job Title <span className="text-blue-500">*</span>
                </label>
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
                <label className="block text-gray-700 text-sm font-medium mb-3">
                  Quantity Required <span className="text-blue-500">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {["1-10", "10-25", "25-50", "50-100", "Above 100"].map(
                    (quantity) => (
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
                        <div className={radioLabelStyles}>{quantity}</div>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Product Type <span className="text-blue-500">*</span>
                </label>
                <select
                  name="productRequirement"
                  value={formData.productRequirement}
                  onChange={handleInputChange}
                  className={inputStyles}
                  required
                >
                  <option value="">Select a product</option>
                  {products.map((product) => (
                    <option key={product.id} value={product.title}>
                      {product.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Colors Required
                </label>
                <input
                  type="text"
                  name="colors"
                  value={formData.colors}
                  onChange={handleInputChange}
                  placeholder="e.g., Red, Blue, Black"
                  className={inputStyles}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Sizes Required
                </label>
                <input
                  type="text"
                  name="sizes"
                  value={formData.sizes}
                  onChange={handleInputChange}
                  placeholder="e.g., S, M, L, XL"
                  className={inputStyles}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Customization Details
                </label>
                <textarea
                  name="customizationDetails"
                  value={formData.customizationDetails}
                  onChange={handleInputChange}
                  className={inputStyles}
                  rows="3"
                  placeholder="Describe your customization requirements..."
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Upload Design
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-2xl transition-all duration-300 hover:border-blue-400 bg-white/50 backdrop-blur-sm group">
                  <div className="space-y-2 text-center">
                    {designPreview ? (
                      <div className="space-y-3">
                        <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={designPreview}
                            alt="Design preview"
                            layout="fill"
                            objectFit="contain"
                            className="transition-transform duration-300 group-hover:scale-105"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              setDesignFile(null);
                              setDesignPreview(null);
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 m-1 hover:bg-red-600 transition-colors shadow-lg"
                          >
                            ✕
                          </button>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">
                          Selected file: {designFile?.name}
                        </p>
                      </div>
                    ) : (
                      <>
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400 group-hover:text-blue-500 transition-colors duration-300"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer bg-white/50 rounded-lg px-3 py-2 font-medium text-blue-600 hover:text-blue-500 hover:bg-blue-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 transition-all duration-300">
                            <span>Upload a file</span>
                            <input
                              type="file"
                              className="sr-only"
                              accept="image/*"
                              onChange={handleFileChange}
                            />
                          </label>
                          <p className="pl-1 pt-2">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  className={inputStyles}
                  rows="4"
                  placeholder="Any additional requirements or specifications..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`${submitButtonStyles} ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  "Submit Customization Request"
                )}
              </button>
            </form>

            <div className="mt-12 space-y-6 text-center">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 py-1 bg-white/80 backdrop-blur-sm text-gray-500 rounded-full border border-gray-200">
                    Or
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-base">
                Need immediate assistance? Contact us directly.
              </p>
              <a
                href="https://wa.me/your-number"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-green-500/25 font-medium"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
