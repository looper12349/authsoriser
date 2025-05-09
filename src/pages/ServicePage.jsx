import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { serviceData } from '../data/serviceData';
import { Link } from 'react-router-dom';

// Import components
import GradientRing from '../components/ui/GradientRing';
import SlideCard from '../components/ui/SlideCard';
import Slider from '../components/ui/Slider';
import ServiceNotFoundPage from './ServiceNotFoundPage';
import ImprovedVideoBackground from '../components/ui/ImprovedVideoBackground';
import IconProvider from '../components/ui/IconProvider';

const ServicePage = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  
  useEffect(() => {
    // Find the service data based on the URL parameter
    if (serviceId && serviceData[serviceId]) {
      setService(serviceData[serviceId]);
    }
  }, [serviceId]);

  if (!service) {
    return <ServiceNotFoundPage />;
  }

  // Function to render icons using the IconProvider component
  const renderIcon = (iconName) => {
    return <IconProvider name={iconName} size="lg" />;
  };

  // Render the hero section based on the background type (video or gif)
  const renderHeroSection = () => {
    if (service.heroBackground.type === 'video') {
      return (
        <ImprovedVideoBackground 
          videoSrc={service.heroBackground.src} 
          posterImage={service.heroBackground.poster || ''}
        >
          <div className="max-w-6xl mx-auto text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-6">{service.title}</h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl">
              {service.heroDescription}
            </p>
            
            <div className="mt-8">
              <Link 
                to="#service-details" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-lg font-medium inline-block transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('service-details').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Explore {service.title.split(' ')[0]} Options
              </Link>
            </div>
          </div>
        </ImprovedVideoBackground>
      );
    } else {
      // Default is GIF background
      return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-green-900">
          <div className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
            {/* Decorative background elements */}
            <div 
              className="absolute inset-0 bg-repeat-x bg-center hidden md:block" 
              style={{ backgroundImage: `url('${service.heroBackground.src}')` }}
            ></div>
            
            {/* Mobile background with gradient */}
            <div className="absolute inset-0 md:hidden bg-gradient-to-br from-blue-800 to-blue-900 opacity-60"></div>
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/80 to-blue-900/60 md:to-transparent"></div>
            
            {/* Content container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
                {/* Left text content */}
                <div className="max-w-xl lg:max-w-2xl">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6">{service.title}</h1>
                  <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
                    {service.heroDescription}
                  </p>
                  
                  {/* Mobile CTA button - only visible on small screens */}
                  <div className="mt-6 md:hidden">
                    <button 
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
                      onClick={() => document.getElementById('service-details').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Explore {service.title.split(' ')[0]} Options
                    </button>
                  </div>
                </div>
                
                {/* Right side for illustrations - populated by the background */}
                <div className="hidden lg:block"></div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };

  // Calculate the number of rows needed for the cards
  const calculateCardRows = (cards) => {
    const cardsPerRow = 3; // For lg screens
    const numCards = cards.length;
    const numFullRows = Math.floor(numCards / cardsPerRow);
    const hasPartialRow = numCards % cardsPerRow > 0;
    
    return numFullRows + (hasPartialRow ? 1 : 0);
  };

  // Render the service cards
  const renderServiceCards = () => {
    if (!service.cards || service.cards.length === 0) return null;
    
    const numRows = calculateCardRows(service.cards);
    const cardsPerRow = 3; // For lg screens
    
    const rows = [];
    
    for (let i = 0; i < numRows; i++) {
      const startIndex = i * cardsPerRow;
      const endIndex = Math.min(startIndex + cardsPerRow, service.cards.length);
      const rowCards = service.cards.slice(startIndex, endIndex);
      
      rows.push(
        <div key={`row-${i}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {rowCards.map((card, index) => (
            <div key={`card-${startIndex + index}`} className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
              <div className="text-red-600 mb-4">
                {renderIcon(card.icon)}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      );
    }
    
    return rows;
  };

  // Render the slider section
  const renderSlider = () => {
    if (!service.slider || service.slider.length === 0) return null;
    
    return (
      <section className="py-16 bg-white">
        <div className="w-full">
          <Slider
            slides={service.slider.map((slide, index) => (
              <SlideCard
                key={`slide-${index}`}
                image={slide.image}
                title={slide.title}
                description={slide.description}
                path={slide.path}
              />
            ))}
            autoplaySpeed={6000}
          />
        </div>
      </section>
    );
  };

  // Render the CTA section
  const renderCTA = () => {
    if (!service.cta) return null;
    
    return (
      <section className="py-16 md:py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="block">{service.cta.title}</span>
              <span className="block text-red-600 mt-2">{service.cta.subtitle}</span>
            </h2>
            
            <div className="mt-8 mb-10 text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto space-y-4">
              {service.cta.description.map((paragraph, index) => (
                <p key={`cta-p-${index}`}>{paragraph}</p>
              ))}
            </div>
            
            <Link
              to={service.cta.buttonLink}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-base sm:text-lg font-medium inline-block transition-colors"
            >
              {service.cta.buttonText}
            </Link>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      {/* Hero Section with dynamic background */}
      {renderHeroSection()}

      {/* Service Details Section */}
      <section id="service-details" className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Decorative background circles */}
        <GradientRing 
          position="left-0 top-0.8"
          size="500px"
          thickness={15}
          fromColor="red-200"
          toColor="red-100"
          opacity={70}
          transform="-translate-x-1/2 -translate-y-1/2"
        />     

        <GradientRing 
          position="right-0 bottom-10"
          size="500px"
          thickness={15}
          fromColor="red-200"
          toColor="red-100"
          opacity={70}
          transform="-translate-x-1/2 -translate-y-1/2"
        />        
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">{service.cardTitle}</h2>
            <p className="text-3xl font-semibold text-red-600 max-w-3xl mx-auto">
              {service.cardDescription}
            </p>
          </div>
          
          {/* Service Cards - Dynamic Grid Based on Service Data */}
          {renderServiceCards()}
        </div>
      </section>

      {/* Slider with Cards Section - Dynamic Based on Service Data */}
      {renderSlider()}

      {/* CTA Section - Dynamic Based on Service Data */}
      {renderCTA()}
    </div>
  );
};

export default ServicePage;
