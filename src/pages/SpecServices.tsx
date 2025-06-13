import React, { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { ChatBotProvider } from '../contexts/ChatBotContext';
import { ShoppingCart, Megaphone, TrendingUp, Users, Home } from 'lucide-react';
import '../animations.css';

const SpecServices = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [selectedNiche, setSelectedNiche] = useState('E-Commerce');
  const [hoveredNiche, setHoveredNiche] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const niches = ['E-Commerce', 'Marketing', 'Sales', 'Coaching', 'Real-Estate'];

  const nicheContent = {
    'E-Commerce': [
      {
        icon: ShoppingCart,
        title: 'Inventory Automation',
        description: 'AI-powered stock management and reordering'
      },
      {
        icon: Users,
        title: 'Customer Service Bots',
        description: '24/7 automated customer support'
      },
      {
        icon: TrendingUp,
        title: 'Price Optimization',
        description: 'Dynamic pricing based on market analysis'
      }
    ],
    'Marketing': [
      {
        icon: Megaphone,
        title: 'Content Generation',
        description: 'AI-created marketing copy and campaigns'
      },
      {
        icon: TrendingUp,
        title: 'Lead Scoring',
        description: 'Automated prospect qualification and ranking'
      },
      {
        icon: Users,
        title: 'Social Media Automation',
        description: 'Scheduled posting and engagement'
      }
    ],
    'Sales': [
      {
        icon: Users,
        title: 'CRM Automation',
        description: 'Streamlined pipeline and follow-up processes'
      },
      {
        icon: TrendingUp,
        title: 'Proposal Generation',
        description: 'AI-powered custom proposals'
      },
      {
        icon: TrendingUp,
        title: 'Sales Forecasting',
        description: 'Predictive analytics for revenue planning'
      }
    ],
    'Coaching': [
      {
        icon: TrendingUp,
        title: 'Progress Tracking',
        description: 'Automated client milestone monitoring'
      },
      {
        icon: Users,
        title: 'Session Scheduling',
        description: 'Smart calendar and reminder systems'
      },
      {
        icon: Megaphone,
        title: 'Content Delivery',
        description: 'Personalized learning path automation'
      }
    ],
    'Real-Estate': [
      {
        icon: Home,
        title: 'Property Valuation',
        description: 'AI-driven market analysis and pricing'
      },
      {
        icon: Users,
        title: 'Lead Qualification',
        description: 'Automated buyer/seller screening'
      },
      {
        icon: TrendingUp,
        title: 'Document Processing',
        description: 'Streamlined contract and paperwork handling'
      }
    ]
  };

  const handleNicheChange = (niche: string) => {
    if (niche === selectedNiche) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedNiche(niche);
      setIsTransitioning(false);
    }, 200);
  };

  const getIndicatorPosition = () => {
    const targetNiche = hoveredNiche || selectedNiche;
    return (niches.indexOf(targetNiche) * 100) / niches.length;
  };

  useEffect(() => {
    // Set up intersection observer for scroll animations with improved performance
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all animatable elements
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <ChatBotProvider>
      <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden relative">
        {/* Full website background like hero section */}
        <div className="fixed inset-0 bg-gradient-to-br from-[#0052D4]/15 via-black/50 to-[#6FB1FC]/15 animate-breathe"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(67,100,247,0.3)_0%,rgba(0,82,212,0.1)_40%,transparent_70%)] animate-breathe-slow"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(111,177,252,0.2)_0%,transparent_50%)] animate-breathe-reverse"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(0,82,212,0.15)_0%,transparent_60%)]"></div>
        <div className="relative z-10">
          <Navigation />
          <main>
            {/* Hero Section */}
            <section className="pt-32 pb-8 relative">
              <div className="container mx-auto px-6 text-center relative z-10">
                <div className="hero-headline">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                    <span className="block dynamic-gradient-text">
                      Specific Niche Services
                    </span>
                  </h1>
                  <p className="hero-subtitle text-lg font-light text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
                    Industry-focused AI solutions tailored to meet the unique challenges and opportunities of your specific sector.
                  </p>
                </div>
              </div>
            </section>

            {/* Niche Selector Section */}
            <section className="py-16 relative">
              <div className="container mx-auto px-6 relative z-10">
                <div className="animate-on-scroll max-w-4xl mx-auto">
                  {/* Niche Selector */}
                  <div className="relative bg-black/20 backdrop-blur-sm rounded-full p-2 border border-white/10 mb-16">
                    <div className="flex relative">
                      {/* Moving indicator */}
                      <div 
                        className="absolute top-2 bottom-2 bg-white rounded-full transition-all duration-300 ease-in-out"
                        style={{
                          left: `${getIndicatorPosition()}%`,
                          width: `${100 / niches.length}%`,
                          transform: 'translateX(4px)',
                          right: '4px'
                        }}
                      />
                      {niches.map((niche, index) => (
                        <button
                          key={niche}
                          onClick={() => handleNicheChange(niche)}
                          onMouseEnter={() => setHoveredNiche(niche)}
                          onMouseLeave={() => setHoveredNiche(null)}
                          className={`relative z-10 flex-1 py-3 px-6 text-sm font-normal tracking-wide transition-all duration-300 rounded-full ${
                            (hoveredNiche === niche || (hoveredNiche === null && selectedNiche === niche)) 
                              ? 'text-black' 
                              : 'text-white'
                          }`}
                        >
                          {niche}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Cards Section */}
                  <div className={`grid md:grid-cols-3 gap-8 transition-all duration-300 ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
                    {nicheContent[selectedNiche as keyof typeof nicheContent].map((service, index) => (
                      <div
                        key={`${selectedNiche}-${index}`}
                        className={`animate-on-scroll feature-card bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-8 hover:bg-white/10 group stagger-${index + 1}`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="w-16 h-16 dynamic-gradient-icon rounded-lg flex items-center justify-center mb-6 feature-icon">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white tracking-wide mb-4">{service.title}</h3>
                        <p className="text-gray-400 font-light leading-relaxed tracking-wide">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
          <ChatBot />
        </div>
      </div>
    </ChatBotProvider>
  );
};

export default SpecServices;