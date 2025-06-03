'use client'
import React from 'react'
import Image from 'next/image'
   import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
const content3 = () => {
      const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqItems = [
    {
      question: "How does this work?",
      answer: "Our platform provides a streamlined solution that integrates seamlessly with your existing workflow. Simply sign up, configure your preferences, and start using our intuitive interface to manage your tasks efficiently."
    },
    {
      question: "What are the benefits?",
      answer: "Key benefits include increased productivity, reduced manual work, better organization, real-time collaboration, and comprehensive analytics. Users typically see a 40% improvement in efficiency within the first month."
    },
    {
      question: "Is it difficult to use?",
      answer: "Not at all! Our platform is designed with user experience in mind. Most users are up and running within minutes, and we provide comprehensive onboarding, tutorials, and 24/7 support to ensure your success."
    },
    {
      question: "Can I have custom pricing?",
      answer: "Yes, we offer flexible pricing options including custom enterprise plans. Contact our sales team to discuss your specific needs and get a personalized quote that fits your budget and requirements."
    },
    {
      question: "Is there trial version available?",
      answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required. You can explore the platform, test all functionalities, and see how it fits your needs before making any commitment."
    },
    {
      question: "Where do I sign up?",
      answer: "You can sign up directly on our website by clicking the 'Get Started' button. The process takes less than 2 minutes - just enter your email, create a password, and you'll have immediate access to start your free trial."
    }
  ];

  const toggleItem = (index:number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };
  return (
    <div className='mt-25 flex justify-center flex-col sm:mx-60 md:mx-150'>
      <Image
                    src="/Screenshot 2025-06-02 190659.png"
                    alt="Project showcase"
                    width={300}
                    height={500}
                    className="rounded-lg mt-5 ml-15 sm:ml-5 items-center justify-center " // Adjust width as needed
                  />\
    <h2 className='text-3xl font-bold text-center'>Frequently asked questions</h2>
    <div className="max-w-2xl mx-auto  mt-10 min-h-screen">
      <div className="space-y-2">
        {faqItems.map((item, index) => (
          <div key={index} className="bg-[#efefef] rounded-lg shadow-sm border border-gray-200">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
            >
              <h3 className="text-lg font-medium text-gray-900 pr-4">
                {item.question}
              </h3>
              <div className="flex-shrink-0">
                {openItems.has(index) ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItems.has(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-6 pb-4 pt-2">
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  

    </div>
  )
}

export default content3
