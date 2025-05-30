import React from 'react';
import { ShoppingBag, Percent, Clock, Users, Shield, CreditCard } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="card hover:shadow-xl group">
      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 text-green-600 dark:text-green-400 group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Percent className="h-6 w-6" />,
      title: "Better Prices",
      description: "Save up to 30% by purchasing with your neighbors and friends in bulk orders."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Save Time",
      description: "No more individual trips. Get your items delivered in a single organized drop."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community Building",
      description: "Connect with neighbors and build a stronger community through collaborative shopping."
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Wide Selection",
      description: "From groceries to household items, we organize group buys for various products."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Payments",
      description: "Trusted payment options with complete purchase protection and transparency."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Flexible Options",
      description: "Multiple payment methods and delivery options to suit your needs."
    }
  ];

  return (
    <section id="features" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container">
        <div className="section-title">
          <h2 className="font-bold mb-4">Why Choose Our Group Buy Platform</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our WhatsApp-based platform makes it easy to organize and participate in group buys
            without any complicated apps or websites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;