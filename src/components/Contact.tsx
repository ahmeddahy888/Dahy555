import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
              Get in <span className="cta-headline">Touch</span>
            </h2>
            <p className="text-lg font-light text-gray-400 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Ready to transform your business with AI? Let's discuss your project and explore the possibilities.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            <div className="contact-card flex items-center bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6 hover:bg-white/10 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-lg flex items-center justify-center mr-4 contact-icon">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">Call Us</p>
                <p className="text-gray-400 font-light tracking-wide">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="contact-card flex items-center bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6 hover:bg-white/10 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-lg flex items-center justify-center mr-4 contact-icon">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">Email Us</p>
                <p className="text-gray-400 font-light tracking-wide">hello@aistudio.com</p>
              </div>
            </div>

            <div className="contact-card flex items-center bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6 hover:bg-white/10 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#3b82f6] to-[#1d4ed8] rounded-lg flex items-center justify-center mr-4 contact-icon">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold tracking-wide">Visit Us</p>
                <p className="text-gray-400 font-light tracking-wide">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;