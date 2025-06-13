import React, { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ChatBot from '../components/ChatBot';
import { ChatBotProvider } from '../contexts/ChatBotContext';
import { Bot, BarChart3, Cog, Brain, Link, Users } from 'lucide-react';
import '../animations.css';

const GenServices = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const services = [
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Streamline your workflows with intelligent automation'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights'
    },
    {
      icon: Cog,
      title: 'Process Optimization',
      description: 'Enhance efficiency with smart solutions'
    },
    {
      icon: Brain,
      title: 'Custom AI Models',
      description: 'Tailored artificial intelligence for your needs'
    },
    {
      icon: Link,
      title: 'Integration Services',
      description: 'Connect all your systems seamlessly'
    },
    {
      icon: Users,
      title: 'Consulting & Strategy',
      description: 'Expert guidance for AI implementation'
    }
  ];

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
            <section className="min-h-screen flex items-center justify-center relative pt-20 pb-32">
              <div className="container mx-auto px-6 text-center relative z-10">
                <div className="animate-on-scroll opacity-0 translate-y-8 blur-sm">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
                    <span className="block dynamic-gradient-text">
                      General Services
                    </span>
                  </h1>
                  <p className="text-lg font-light text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed tracking-wide">
                    Comprehensive AI solutions designed to transform your business operations and drive innovation across all sectors.
                  </p>
                </div>
              </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-32 relative">
              <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className={`animate-on-scroll service-card bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-8 hover:bg-white/10 group transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 stagger-${index + 1}`}
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-xl flex items-center justify-center mb-6 service-icon transition-all duration-300 group-hover:scale-110">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white tracking-wide mb-4">{service.title}</h3>
                      <p className="text-gray-400 font-light leading-relaxed tracking-wide">{service.description}</p>
                    </div>
                  ))}
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

export default GenServices;