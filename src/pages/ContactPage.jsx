import { useState, useEffect } from 'react';
import GradientRing from '../components/ui/GradientRing';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};
    
    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    // Company validation
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\+\-\(\) ]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const simulateApiCall = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: 'Thank you for your message, ' + formData.firstName + '! We will be in touch soon.' });
      }, 2000);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        const response = await simulateApiCall();
        
        if (response.success) {
          setSubmitSuccess(true);
          setSubmitMessage(response.message);
          
          // Reset form after successful submission
          setTimeout(() => {
            setFormData({
              firstName: '',
              lastName: '',
              companyName: '',
              email: '',
              phone: '',
              message: ''
            });
            setIsSubmitting(false);
          }, 1000);
          
          // Reset success message after a delay
          setTimeout(() => {
            setSubmitSuccess(false);
            setSubmitMessage('');
          }, 5000);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setIsSubmitting(false);
        setSubmitMessage('There was an error submitting your form. Please try again.');
      }
    }
  };

  return (
    <div>
      {/* Hero Section - modern office design with overlay */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/contact-hero.jpg)' }}>
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50"></div>
        
        {/* Content positioned to the left side */}
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">Contact Us</h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-xl">Have questions? We're here to help—contact us anytime.</p>
            </div>
          </div>
        </div>
      </section>

            {/* Contact Form Section with decorative elements */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Decorative gradient rings */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <GradientRing 
                   position="left-0 top-1/2"
                   size="700px"
                   thickness={15}
                   fromColor="red-200"
                   toColor="red-100"
                   opacity={70}
                   transform="-translate-x-1/2 -translate-y-1/2"
                 />
          
          
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">Get In Touch With Us</h2>
          </div>
          
          {/* Form container with white background */}
          <div className="bg-transparent rounded-md max-w-4xl mx-auto relative overflow-hidden">
            {/* Success message */}
            {submitSuccess && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-20 animate-fadeIn">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xl font-medium text-gray-900 mb-2">Thank You!</p>
                  <p className="text-gray-600">{submitMessage}</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 bg-white py-2 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600`}
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 bg-white py-2 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600`}
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>
              </div>
              
              <div className="mb-4 sm:mb-6">
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full px-4 bg-white py-2 border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600`}
                />
                {errors.companyName && <p className="mt-1 text-sm text-red-600">{errors.companyName}</p>}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 bg-white py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 bg-white py-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Leave us a few words
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Leave us a few words"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 bg-white py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-base font-medium inline-flex items-center justify-center min-w-[120px] transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ContactPage;
