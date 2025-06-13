import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What AI automation services do you offer?',
      answer: 'We provide comprehensive AI solutions including chatbots, predictive analytics, computer vision, speech recognition, and custom automation systems tailored to your business needs.'
    },
    {
      question: 'How long does it take to implement an AI solution?',
      answer: 'Implementation timelines vary based on complexity. Simple chatbots can be deployed in 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and dedicated technical support to ensure your AI systems operate at peak efficiency.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work across various industries including healthcare, finance, retail, manufacturing, and technology. Our solutions are customizable to meet specific industry requirements and compliance standards.'
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer: 'We implement enterprise-grade security measures including end-to-end encryption, secure cloud infrastructure, compliance with GDPR and other regulations, and regular security audits to protect your data.'
    },
    {
      question: 'Can AI solutions integrate with existing systems?',
      answer: 'Absolutely. Our AI solutions are designed to seamlessly integrate with your existing infrastructure through APIs, webhooks, and custom connectors, ensuring minimal disruption to your current operations.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-wide">
            Frequently Asked <span className="dynamic-gradient-text">Questions</span>
          </h2>
          <p className="text-base font-light text-gray-400 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Find answers to common questions about our AI automation services and solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`animate-on-scroll mb-6 stagger-${index + 1}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`faq-item w-full bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6 text-left hover:bg-white/10 group ${openIndex === index ? 'open' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white tracking-wide pr-8 faq-question">{faq.question}</h3>
                  <div className="flex-shrink-0 w-8 h-8 dynamic-gradient-icon rounded-lg flex items-center justify-center faq-icon">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-white" />
                    ) : (
                      <Plus className="w-5 h-5 text-white" />
                    )}
                  </div>
                </div>
              </button>

              <div className={`faq-answer overflow-hidden transition-all duration-400 ${openIndex === index ? 'max-h-48 pt-4' : 'max-h-0'}`}>
                <div className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm p-6">
                  <p className="text-gray-300 font-light leading-relaxed tracking-wide">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;