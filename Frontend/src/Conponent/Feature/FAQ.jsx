import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is Google Workspace compatible with my current email client?",
      answer: "Yes, Google Workspace is compatible with Microsoft Outlook, Apple Mail, and Thunderbird. You can also use IMAP/POP settings to connect other clients."
    },
    {
      question: "Can I transfer my current Google Workspace account to Nest Nepal?",
      answer: "Absolutely! Nest Nepal can help you seamlessly transfer your account with all your data and users. Contact our sales team for assistance."
    },
    {
      question: "Are there any fees for transferring a domain to Nest Nepal?",
      answer: "Transferring domain management to Nest Nepal is generally free; however, you may need to pay for a one-year renewal as per standard domain registration rules."
    },
    {
      question: "What all does Google Workspace include?",
      answer: "It includes professional email (Gmail), online storage (Drive), shared calendars, video meetings (Meet), and docs/sheets/slides for collaboration."
    },
    {
      question: "Are there any hidden charges for Nest Nepal customers?",
      answer: "No, we believe in transparent pricing. All costs are shown upfront, and there are no hidden maintenance or support fees."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white py-20 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        
       
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions <span className="text-blue-600">(FAQs)</span>
          </h2>
        </div>

      
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 pb-4"
            >
              <button
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-blue-600' : 'text-gray-700 group-hover:text-blue-500'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-600" />
                ) : (
                  <FaChevronDown className="text-gray-400" />
                )}
              </button>
              
             
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-600 leading-relaxed pb-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQ;