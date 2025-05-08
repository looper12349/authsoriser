import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { serviceData } from '../data/serviceData';

// Import icons from React Icons library
import { FaDatabase, FaTable, FaCube, FaMemory, FaCloudDownloadAlt } from 'react-icons/fa';
import { SiGooglecloud, SiFirebase, SiPostgresql, SiOracle } from 'react-icons/si';
import GradientRing from '../components/ui/GradientRing';
import SlideCard from '../components/ui/SlideCard';
import Slider from '../components/ui/Slider';
import ServiceNotFoundPage from './ServiceNotFoundPage';

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
    // Show the ServiceNotFoundPage component directly
    return <ServiceNotFoundPage />;
  }

  return (
    <div>
      {/* Hero Section with animated background and illustrations - Responsive */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-green-900">
        {/* Responsive height adjustment */}
        <div className="h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] w-full">
          {/* Decorative background elements */}
          <div className="absolute inset-0 bg-repeat-x bg-center hidden md:block" 
               style={{ backgroundImage: "url('/assets/images/database.gif')" }}></div>
          
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
                  Modernize your databases with Google Cloud for enhanced scalability, performance, and cost efficiency. 
                  <span className="hidden sm:inline">Transform your data infrastructure with cutting-edge solutions tailored for today's digital demands.</span>
                </p>
                
                {/* Mobile CTA button - only visible on small screens */}
                <div className="mt-6 md:hidden">
                  <button 
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors"
                    onClick={() => document.getElementById('database-options').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Explore Database Options
                  </button>
                </div>
              </div>
              
              {/* Right side for database icon illustrations - populated by the background */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Database Options Section */}
      <section id="database-options" className="py-16 bg-gray-50 relative overflow-hidden">
        {/* Decorative background circle */}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Choose from a diverse array of</h2>
            <p className="text-3xl font-semibold text-red-600 max-w-3xl mx-auto">
              Databases tailored for your needs
            </p>
          </div>
          
          {/* Database cards grid - first row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Cloud SQL Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
              <div className="text-red-600 mb-4">
                <FaDatabase className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Cloud SQL</h3>
              <p className="text-sm text-gray-600">
                Enjoy fully managed support for popular open-source and commercial SQL engines like MySQL, PostgreSQL, SQL Server etc. with streamlined database management capabilities.
              </p>
            </div>
            
            {/* Big Table Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
              <div className="text-red-600 mb-4">
                <FaTable className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Big Table</h3>
              <p className="text-sm text-gray-600">
                Ideal for structured or unstructured data, Bigtable is a high performance wide-column store that can handle huge amount of data while supporting high read and write throughput at low latency.
              </p>
            </div>
            
            {/* Spanner Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
              <div className="text-red-600 mb-4">
                <FaCube className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Spanner</h3>
              <p className="text-sm text-gray-600">
                Unlock limitless scalability with Spanner's relational power. Automated sharding, replication, and transaction management ensure reduced operational costs with increased reliability.
              </p>
            </div>
          </div>
          
          {/* Database cards grid - second row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {/* Memory Store */}
            <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
              <div className="text-red-600 mb-4">
                <FaMemory className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Memory Store</h3>
              <p className="text-sm text-gray-600">
                Leverage Redis and Memcached as managed services for ultra fast, scalable, and highly available data access. Perfect for caching, session management and enhancing application performance.
              </p>
            </div>
            
            {/* Firestore */}
            <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
              <div className="text-red-600 mb-4">
                <SiFirebase className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Firestore</h3>
              <p className="text-sm text-gray-600">
                Accelerate app development with Firestore's developer-friendly environment offering built-in live synchronization, offline support, and ACID transactions across client and server-side libraries.
              </p>
            </div>
            
            {/* AlloyDB for PostgreSQL */}
            <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
              <div className="text-red-600 mb-4">
                <SiPostgresql className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AlloyDB for PostgreSQL</h3>
              <p className="text-sm text-gray-600">
                Combining Google's expertise with PostgreSQL, AlloyDB offers cloud-native capabilities, managed backups, and seamless integration with other Google Cloud services, perfect for modern cloud apps.
              </p>
            </div>
          </div>

          {/* Database cards grid - third row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bare Metal Solution */}
            <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
              <div className="text-red-600 mb-4">
                <SiOracle className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bare Metal Solution for Oracle</h3>
              <p className="text-sm text-gray-600">
                Transition seamlessly to Oracle's Bare Metal Solution: Oracle Real Application Clusters (RAC) for high availability, Data Guard for reliability, and Recovery Manager (RMAN) for streamlined backups.
              </p>
            </div>
            
            {/* DataStream */}
            <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
              <div className="text-red-600 mb-4">
                <SiGooglecloud className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">DataStream</h3>
              <p className="text-sm text-gray-600">
                Streamline real-time data ingestion, processing, and analysis with Datastream, supporting Oracle, MySQL, PostgreSQL etc. while leveraging Cloud PubSub and Dataflow for seamless integration.
              </p>
            </div>
            
            {/* Database Migration */}
            <div className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
              <div className="text-red-600 mb-4">
                <FaCloudDownloadAlt className="h-12 w-12" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Database Migration Service</h3>
              <p className="text-sm text-gray-600">
                Migrate to open source databases in the cloud from on-premises, Google Cloud, or other clouds. Replicate data continuously for minimal downtime migrations. Seamlessly convert your schema and code with AI-powered assistance.
              </p>
            </div>
          </div>
        </div>
      </section>


       {/* Slider with Cards Section - Full Width */}
       <section className="py-16 bg-white">
        {/* Full-width slider with white background */}
        <div className="w-full">
          <Slider
            slides={[
              <SlideCard
                key="slide1"
                image="/assets/images/googlecloud.png"
                title="Google Cloud Migrations"
                description="Move your infrastructure seamlessly to Google Cloud with our expert migration services. We ensure zero downtime and maximum efficiency."
                path="/services/google-cloud-migrations"
              />,
              <SlideCard
                key="slide2"
                image="/assets/images/smartworkspace.png"
                title="Smart Workspace"
                description="Transform your workspace with Google's suite of collaboration tools. Boost productivity and enable team communication."
                path="/services/smart-workspace"
              />,
              <SlideCard
                key="slide3"
                image="/assets/images/realtime.png"
                title="Real-time Permission Insights"
                description="Leverage the power of artificial intelligence to gain insights and automate processes for your business."
                path="/services/real-time-permission-insights"
              />
            ]}
            autoplaySpeed={6000}
          />
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-16 md:py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="block">Modernize Your Databases</span>
              <span className="block text-red-600 mt-2">with expertise from Authsoriser</span>
            </h2>
            
            <div className="mt-8 mb-10 text-sm sm:text-base md:text-lg text-black max-w-3xl mx-auto space-y-4">
              <p>
                Transform your data landscape with Authsoriser's expert-guided database modernization services. Our team, including former 
                Googlers, ensures seamless migration to Google Cloud, optimizing performance, scalability, and cost-efficiency.
              </p>
              <p>
                Discover the power of fully managed databases, real-time data processing, and robust post-implementation support. Contact us now 
                to revolutionize your database infrastructure and drive your business forward.
              </p>
            </div>
            
            <a
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md text-base sm:text-lg font-medium inline-block transition-colors"
            >
              Let's Have a Chat
            </a>
          </div>
        </div>
      </section>

      


    </div>
  );
};

export default ServicePage;
