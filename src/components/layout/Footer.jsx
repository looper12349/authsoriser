import { Link } from 'react-router-dom';
import { navData } from '../../data/navData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Logo and Map Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                className="h-10 w-auto"
                src="/assets/images/logo.png"
                alt="Authsoriser"
              />
            </Link>
            
            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden relative w-full h-[140px] border border-gray-700">
              <iframe 
                title="Authsoriser Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.552656376924!2d-104.81975492428559!3d41.13628387134123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876f3adbb7478973%3A0xa77aa02f8c529885!2s1603%20Capitol%20Ave%2C%20Cheyenne%2C%20WY%2082001%2C%20USA!5e0!3m2!1sen!2sin!4v1683566354207!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=""
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 text-xs text-white z-10">
                <p className="font-medium">1603 Capitol Ave Suite</p>
                <p className="text-gray-300">413 #203 Cheyenne, WY 82001 United States</p>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to={navData.googleWorkspace.items[0].path} className="text-gray-300 hover:text-white text-sm transition-colors">
                  Google Workspace
                </Link>
              </li>
              <li>
                <Link to={navData.googleCloud.items[0].path} className="text-gray-300 hover:text-white text-sm transition-colors">
                  Google Cloud Platform
                </Link>
              </li>
              <li>
                <Link to="/services/google-vertex-ai" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Google Vertex AI
                </Link>
              </li>
              <li>
                <Link to="/services/google-gemini" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Google Gemini
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Authsoriser Section */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Follow Authsoriser</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://cloud.google.com/find-a-partner/partner/authsoriser" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Google Partners
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/authsoriser" className="text-gray-300 hover:text-white text-sm transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://youtube.com/authsoriser" className="text-gray-300 hover:text-white text-sm transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://instagram.com/authsoriser" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Join Experience Section */}
          <div>
            <h3 className="text-xl font-bold text-red-500 mb-4">Join The Authsoriser Experience</h3>
            <p className="text-sm text-gray-300 mb-4">
              Transforming your digital landscape with top-tier cloud migration and management services and solutions.
            </p>
            <div className="mt-2">
              <a href="mailto:hello@authsoriser.io" className="flex items-center text-gray-300 hover:text-white text-sm group">
                <svg className="h-5 w-5 mr-2 text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 7L12 14L22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                hello@authsoriser.io
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Line */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-500">
            Authsoriser, Inc {currentYear}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
