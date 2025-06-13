import React from 'react';
import { useChatBot } from '../contexts/ChatBotContext';

const Hero = () => {
  const { openChat } = useChatBot();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-32">
      {/* Animated Background - RESTORED */}
      <div className="animated-background">
        <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-black/95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(67,100,247,0.08)_0%,rgba(0,82,212,0.03)_40%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(111,177,252,0.06)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(0,82,212,0.04)_0%,transparent_60%)]"></div>
        
        {/* Floating Shapes */}
        <div className="floating-shapes">
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
          <div className="floating-shape"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div>
          {/* Badge */}
          <div className="hero-badge inline-flex items-center px-4 py-2 mb-16 mt-8 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <span className="text-sm font-bold dynamic-gradient-text tracking-wide">2025</span>
            <span className="mx-2 text-gray-500">•</span>
            <span className="text-xs font-light text-gray-300 tracking-wide">Next-Gen Ai Integrations</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-white">AI-Driven Success</span>
            <span className="block dynamic-gradient-text">
              Redefining the Future.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-sm sm:text-base md:text-lg font-light text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Creating latest solutions that redefine innovation.
            <br className="hidden sm:block" />
            Stay ahead with AI-powered technology for the future.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => openChat('book a call')} 
              className="premium-button w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#0052D4]/20 via-[#4364F7]/20 to-[#6FB1FC]/20 border border-[#4364F7]/30 rounded-lg backdrop-blur-sm tracking-wide hover:from-[#0052D4]/30 hover:via-[#4364F7]/30 hover:to-[#6FB1FC]/30 transition-all duration-300 text-white"
            >
              Book A Call
            </button>
            <button 
              onClick={scrollToAbout} 
              className="premium-button w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm tracking-wide hover:bg-white/20 transition-all duration-300 text-white"
            >
              What is NileByte?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;