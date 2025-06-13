import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showSpecificDropdown, setShowSpecificDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isServicesPage = location.pathname === '/genservices' || location.pathname === '/specservices';

  useEffect(() => {
    if (isServicesPage) {
      setActiveSection('services');
      return;
    }

    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const current = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isServicesPage]);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-black/10 backdrop-blur-xl border border-white/5 rounded-3xl hover-glow">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold tracking-wider">
            AI<span className="text-blue-400">Studio</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 relative">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.id === 'services' ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setShowServicesDropdown(true)}
                    onMouseLeave={() => setShowServicesDropdown(false)}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center gap-1 px-4 py-2 text-sm font-light tracking-wide transition-all duration-300 rounded-lg ${
                        activeSection === item.id || isServicesPage
                          ? 'text-blue-400 bg-blue-400/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showServicesDropdown ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Services Dropdown */}
                    <div className={`nav-dropdown absolute top-full left-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl ${showServicesDropdown ? 'show' : ''}`}>
                      <Link
                        to="/genservices"
                        className="nav-dropdown-item block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5"
                      >
                        <div className="font-medium">General Services</div>
                        <div className="text-xs text-gray-500 mt-1">Comprehensive AI solutions</div>
                      </Link>
                      <div 
                        className="relative"
                        onMouseEnter={() => setShowSpecificDropdown(true)}
                        onMouseLeave={() => setShowSpecificDropdown(false)}
                      >
                        <div className="nav-dropdown-item flex items-center justify-between px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer">
                          <div>
                            <div className="font-medium">Specific Niche</div>
                            <div className="text-xs text-gray-500 mt-1">Industry-focused solutions</div>
                          </div>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showSpecificDropdown ? 'rotate-180' : ''}`} />
                        </div>
                        
                        {/* Specific Niche Nested Dropdown */}
                        <div className={`nested-dropdown absolute left-full top-0 w-56 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl ml-2 shadow-2xl overflow-hidden ${showSpecificDropdown ? 'show' : ''}`}>
                          <Link 
                            to="/specservices?niche=ecommerce" 
                            className="nav-dropdown-item block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5"
                          >
                            <div className="font-medium">E-Commerce</div>
                            <div className="text-xs text-gray-500 mt-1">Online retail automation</div>
                          </Link>
                          <Link 
                            to="/specservices?niche=marketing" 
                            className="nav-dropdown-item block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5"
                          >
                            <div className="font-medium">Marketing</div>
                            <div className="text-xs text-gray-500 mt-1">AI-driven campaigns</div>
                          </Link>
                          <Link 
                            to="/specservices?niche=sales" 
                            className="nav-dropdown-item block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/5"
                          >
                            <div className="font-medium">Sales</div>
                            <div className="text-xs text-gray-500 mt-1">Revenue optimization</div>
                          </Link>
                          <Link 
                            to="/specservices?niche=coaching" 
                            className="nav-dropdown-item block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-200"
                          >
                            <div className="font-medium">Coaching</div>
                            <div className="text-xs text-gray-500 mt-1">Personal development AI</div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-sm font-light tracking-wide transition-all duration-300 rounded-lg ${
                      activeSection === item.id
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;