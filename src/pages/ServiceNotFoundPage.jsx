import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FiDatabase, FiArrowLeft, FiGrid } from 'react-icons/fi';
import GradientRing from '../components/ui/GradientRing';

const ServiceNotFoundPage = () => {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  
  // Auto-redirect after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/services');
    }, 15000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Decorative gradient rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientRing 
          position="right-0 top-1/4"
          size="600px"
          thickness={15}
          fromColor="blue-600"
          toColor="blue-900"
          opacity={40}
          transform="translate-x-1/3 -translate-y-1/4"
          zIndex={-1}
        />
        
        <GradientRing 
          position="left-0 bottom-1/4"
          size="500px"
          thickness={12}
          fromColor="blue-500"
          toColor="blue-800"
          opacity={30}
          transform="-translate-x-1/3 translate-y-1/4"
          zIndex={-1}
        />
      </div>
      
      <div className="relative z-10 max-w-md w-full text-center">
        {/* Error Icon with Animation */}
        <div className="mb-8 inline-block animate-bounce">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-900/50 rounded-full scale-110 animate-pulse"></div>
            <div className="relative z-10">
              <FiDatabase className="h-24 w-24 text-blue-500" />
            </div>
          </div>
        </div>
        
        {/* Error Message */}
        <h1 className="text-5xl font-bold text-blue-500 mb-4 animate-fadeIn">Service Not Found</h1>
        
        <h2 className="text-2xl font-bold text-white mb-4 animate-fadeInDown" style={{ animationDelay: '200ms' }}>
          The requested service "{serviceId}" doesn't exist
        </h2>
        
        <p className="text-gray-400 mb-8 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
          We couldn't find the service you're looking for. Please check our available services below.
        </p>
        
        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
          <Link 
            to="/services"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
          >
            <FiGrid className="h-5 w-5" />
            All Services
          </Link>
          
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 border border-gray-600 hover:border-blue-500 hover:text-blue-500 text-gray-300 px-6 py-3 rounded-md font-medium transition-colors duration-200"
          >
            <FiArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>
        
        {/* Auto-redirect Message */}
        <div className="mt-12 text-sm text-gray-400 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
          <p>You will be automatically redirected to our services page in 15 seconds</p>
          <div className="w-full bg-gray-800 h-1 mt-2 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full rounded-full" style={{
              width: '100%',
              animation: 'shrink 15s linear forwards'
            }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceNotFoundPage;
