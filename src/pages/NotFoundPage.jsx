import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiAlertTriangle, FiArrowLeft, FiHome } from 'react-icons/fi';
import GradientRing from '../components/ui/GradientRing';

const NotFoundPage = () => {
  const navigate = useNavigate();
  
  // Auto-redirect after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
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
          fromColor="red-600"
          toColor="red-900"
          opacity={40}
          transform="translate-x-1/3 -translate-y-1/4"
          zIndex={-1}
        />
        
        <GradientRing 
          position="left-0 bottom-1/4"
          size="500px"
          thickness={12}
          fromColor="red-500"
          toColor="red-800"
          opacity={30}
          transform="-translate-x-1/3 translate-y-1/4"
          zIndex={-1}
        />
      </div>
      
      <div className="relative z-10 max-w-md w-full text-center">
        {/* Error Icon with Animation */}
        <div className="mb-8 inline-block animate-bounce">
          <div className="relative">
            <div className="absolute inset-0 bg-red-900/50 rounded-full scale-110 animate-pulse"></div>
            <div className="relative z-10">
              <FiAlertTriangle className="h-24 w-24 text-red-500" />
            </div>
          </div>
        </div>
        
        {/* Error Code */}
        <h1 className="text-9xl font-bold text-red-500 mb-4 animate-fadeIn">404</h1>
        
        {/* Error Message */}
        <h2 className="text-3xl font-bold text-white mb-4 animate-fadeInDown" style={{ animationDelay: '200ms' }}>
          Page Not Found
        </h2>
        
        <p className="text-gray-400 mb-8 animate-fadeInUp" style={{ animationDelay: '400ms' }}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        
        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '600ms' }}>
          <Link 
            to="/"
            className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
          >
            <FiHome className="h-5 w-5" />
            Back to Home
          </Link>
          
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 border border-gray-600 hover:border-red-500 hover:text-red-500 text-gray-300 px-6 py-3 rounded-md font-medium transition-colors duration-200"
          >
            <FiArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>
        
        {/* Auto-redirect Message */}
        <div className="mt-12 text-sm text-gray-400 animate-fadeInUp" style={{ animationDelay: '800ms' }}>
          <p>You will be automatically redirected to the homepage in 15 seconds</p>
          <div className="w-full bg-gray-800 h-1 mt-2 rounded-full overflow-hidden">
            <div className="bg-red-500 h-full rounded-full" style={{
              width: '100%',
              animation: 'shrink 15s linear forwards'
            }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
