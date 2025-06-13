import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/10 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold tracking-wider text-white">Nubien</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed tracking-wide mb-6 max-w-sm">
              Building the future with AI-powered solutions
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">Pages</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-light tracking-wide relative py-1 rounded hover:bg-blue-400/10 block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-light tracking-wide relative py-1 rounded hover:bg-blue-400/10 block">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-light tracking-wide relative py-1 rounded hover:bg-blue-400/10 block">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-light tracking-wide relative py-1 rounded hover:bg-blue-400/10 block">
                  Contact
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-light tracking-wide relative py-1 rounded hover:bg-blue-400/10 block">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">Social</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-light tracking-wide block">
                  Twitter (X)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-light tracking-wide block">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-light tracking-wide block">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Form */}
          <div>
            <h3 className="text-white font-semibold mb-6 tracking-wide">Subscribe Form</h3>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter Your Email..."
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-all duration-300 font-light"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[#0052D4]/20 via-[#4364F7]/20 to-[#6FB1FC]/20 border border-[#4364F7]/30 rounded-lg backdrop-blur-sm tracking-wide hover:from-[#0052D4]/30 hover:via-[#4364F7]/30 hover:to-[#6FB1FC]/30 transition-all duration-300 text-white font-normal">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-light tracking-wide text-sm">
            © 2024 Nilebyte
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-light tracking-wide text-sm px-2 py-1 rounded hover:bg-blue-400/10">
              Terms & Conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-all duration-300 font-light tracking-wide text-sm px-2 py-1 rounded hover:bg-blue-400/10">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;