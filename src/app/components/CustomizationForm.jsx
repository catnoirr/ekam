export default function CustomizationForm({ formData, handleInputChange, handleSubmit, isSubmitting, inputStyles, submitButtonStyles }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Start Your Custom Order</h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Fill in the details below to get started</p>
      </div>
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

        <button
          type="submit"
          disabled={isSubmitting}
          className={`${submitButtonStyles} ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Customization Request'}
        </button>
      </form>
    </div>
  );
} 