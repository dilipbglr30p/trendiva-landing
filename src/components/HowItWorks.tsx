import React from 'react';
import { MessageSquare, ClipboardList, TruckIcon, CreditCard } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="relative">
      {/* Connector line */}
      {number < 4 && (
        <div className="hidden md:block absolute top-10 left-[50%] w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      )}
      
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-800 border-2 border-green-500 flex items-center justify-center mb-4 shadow-lg">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Join WhatsApp Group",
      description: "Scan the QR code or click the link to join our WhatsApp group for your community.",
      icon: <MessageSquare className="h-8 w-8 text-green-500" />
    },
    {
      number: 2,
      title: "Place Your Order",
      description: "Browse available group buys and place your order through our simple form.",
      icon: <ClipboardList className="h-8 w-8 text-green-500" />
    },
    {
      number: 3,
      title: "Make Payment",
      description: "Securely pay for your order using one of our supported payment methods.",
      icon: <CreditCard className="h-8 w-8 text-green-500" />
    },
    {
      number: 4,
      title: "Receive Delivery",
      description: "Get your products delivered directly to your apartment or designated pickup point.",
      icon: <TruckIcon className="h-8 w-8 text-green-500" />
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join our WhatsApp group buy in four simple steps and start saving money today
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {steps.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;