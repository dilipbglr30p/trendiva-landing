import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{question}</span>
        <span className="ml-2 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-4 text-gray-600 dark:text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does group buying work?",
      answer: "Group buying allows multiple individuals to purchase products together at wholesale prices. We coordinate these orders through WhatsApp, collect individual requests, and place a bulk order. Once delivered, we distribute items to each participant based on their order."
    },
    {
      question: "How do I join a group buy?",
      answer: "Simply register using our form with your name, phone number, and address details. You'll receive an invite to join our WhatsApp group where all group buys are organized and announced."
    },
    {
      question: "What types of products can I buy?",
      answer: "We organize group buys for various products including groceries, household items, electronics, and more. The available products are announced regularly in our WhatsApp groups."
    },
    {
      question: "How much can I save with group buying?",
      answer: "Savings typically range from 10% to 30% compared to retail prices, depending on the product and the number of participants in each group buy."
    },
    {
      question: "How do payments work?",
      answer: "After confirming your order, you'll receive payment instructions. We accept various payment methods including bank transfers, mobile payments, and cards. All payment details are shared securely through WhatsApp."
    },
    {
      question: "What happens if I'm not satisfied with a product?",
      answer: "We have a return and refund policy in place. If you receive a damaged or incorrect item, please notify us within 24 hours of delivery with photos, and we'll arrange for replacement or refund."
    }
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about our WhatsApp group buying service
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;