import React, { useState } from 'react';
import { CheckCircle, User, Phone, Home, DoorClosed } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  apartment: string;
  flatNumber: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    apartment: '',
    flatNumber: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.apartment.trim()) newErrors.apartment = 'Apartment is required';
    if (!formData.flatNumber.trim()) newErrors.flatNumber = 'Flat number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      console.log('Form submitted with data:', formData);
      
      // Show success after 1 second
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      apartment: '',
      flatNumber: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="register" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container">
        <div className="section-title">
          <h2 className="font-bold mb-4">Join Our Group Buy</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Register your details to join our WhatsApp group and start enjoying the benefits of group buying
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="card">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Your registration was successful. Check your WhatsApp for group invite!
                </p>
                <button 
                  onClick={handleReset}
                  className="btn btn-secondary"
                >
                  Register Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input pl-10 ${errors.name ? 'border-red-500 dark:border-red-400' : ''}`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`form-input pl-10 ${errors.phone ? 'border-red-500 dark:border-red-400' : ''}`}
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="apartment" className="form-label">Apartment Complex</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Home className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="apartment"
                      name="apartment"
                      value={formData.apartment}
                      onChange={handleChange}
                      className={`form-input pl-10 ${errors.apartment ? 'border-red-500 dark:border-red-400' : ''}`}
                      placeholder="Sunrise Heights"
                    />
                  </div>
                  {errors.apartment && <p className="mt-1 text-sm text-red-500">{errors.apartment}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="flatNumber" className="form-label">Flat Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DoorClosed className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="flatNumber"
                      name="flatNumber"
                      value={formData.flatNumber}
                      onChange={handleChange}
                      className={`form-input pl-10 ${errors.flatNumber ? 'border-red-500 dark:border-red-400' : ''}`}
                      placeholder="A-303"
                    />
                  </div>
                  {errors.flatNumber && <p className="mt-1 text-sm text-red-500">{errors.flatNumber}</p>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : 'Register Now'}
                </button>

                <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
                  By registering, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;