import React from 'react';
import { Target, Zap, Shield, Globe } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Precision Engineering',
      description: 'Every solution is crafted with meticulous attention to detail and cutting-edge technology.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Our AI systems deliver results at unprecedented speed without compromising quality.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built with bank-level security protocols to protect your most sensitive data.'
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Solutions designed to scale seamlessly across any market or industry worldwide.'
    }
  ];

  return (
    <section id="about" className="py-32 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
            About Our <span className="dynamic-gradient-text">Vision</span>
          </h2>
          <p className="text-base font-light text-gray-400 max-w-3xl mx-auto leading-relaxed tracking-wide">
            We are pioneers in artificial intelligence, dedicated to transforming businesses through innovative automation solutions that drive unprecedented growth and efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`animate-on-scroll feature-card p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 group stagger-${index + 1}`}
            >
              <div className="w-16 h-16 dynamic-gradient-icon rounded-lg flex items-center justify-center mb-6 feature-icon">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white tracking-wide">{feature.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed tracking-wide">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;