import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Calculator, 
  FileText, 
  Shield, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Award,
  TrendingUp
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Income Tax Filing",
      description: "Expert assistance with individual and business income tax returns. Maximize your deductions and ensure compliance.",
      features: ["ITR-1 to ITR-7", "Tax Planning", "Refund Processing"]
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "GST Services",
      description: "Complete GST solutions including registration, filing, and compliance management for your business.",
      features: ["GST Registration", "Monthly Returns", "Input Tax Credit"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Tax Advisory",
      description: "Strategic tax planning and advisory services to minimize your tax liability legally and effectively.",
      features: ["Tax Optimization", "Legal Compliance", "Strategic Planning"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Business Registration",
      description: "End-to-end business setup services including company incorporation and regulatory compliance.",
      features: ["Company Formation", "License Registration", "Compliance Setup"]
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content: "TaxNTrust helped me save ₹2 lakhs in taxes this year. Their expertise in tax planning is exceptional.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Freelancer",
      content: "Professional service with quick turnaround. They handled my complex ITR filing seamlessly.",
      rating: 5
    },
    {
      name: "Amit Patel",
      role: "Startup Founder",
      content: "From company registration to ongoing compliance, TaxNTrust has been our trusted partner.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Calculator className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">TaxNTrust</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-fit">
                  Get Started
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Trusted 
                <span className="text-blue-600"> Tax Partner</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Expert tax consulting and filing services to maximize your savings and ensure compliance. 
                Join thousands of satisfied clients who trust us with their financial future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-medium text-lg flex items-center justify-center">
                  Start Your Tax Filing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all font-medium text-lg">
                  Free Consultation
                </button>
              </div>
              <div className="flex items-center space-x-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10,000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">₹50Cr+</div>
                  <div className="text-gray-600">Tax Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">99%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Tax consultation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Tax Filed Successfully</div>
                    <div className="text-gray-600">Refund of ₹45,000 processed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tax and financial services tailored to meet your individual and business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-2 group">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose TaxNTrust?</h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience and a commitment to excellence, we provide unmatched tax services 
                that save you money and give you peace of mind.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Expert Professionals</h3>
                    <p className="text-gray-600">Certified tax experts with 10+ years of experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quick Turnaround</h3>
                    <p className="text-gray-600">Fast and efficient service with 24-48 hour processing</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Maximum Savings</h3>
                    <p className="text-gray-600">Strategic tax planning to minimize your tax liability</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7947663/pexels-photo-7947663.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional team"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our satisfied clients</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-blue-100 text-lg mb-8">
                Ready to optimize your taxes? Contact us today for a free consultation and discover 
                how much you can save.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-200" />
                  <span className="text-white">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-200" />
                  <span className="text-white">info@TaxNTrust.in</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-blue-200" />
                  <span className="text-white">Mumbai, Delhi, Bangalore & Pan India</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea 
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Calculator className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">TaxNTrust</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for all tax and financial services. 
                Helping individuals and businesses optimize their tax strategies.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Income Tax Filing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GST Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tax Advisory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Registration</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TaxNTrust. All rights reserved. | Designed with ❤️ for better tax management</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;