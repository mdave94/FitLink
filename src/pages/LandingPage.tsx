import {
  ArrowRight,
  Users,
  Calendar,
  CheckCircle,
  Smartphone,
  BarChart3,
  Shield,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileAppReview from "../ui/MobileAppReview";
import ContactForm from "../components/ContactForm";

export default function LandingPage() {
  const navigate = useNavigate();

  const onGetStarted = () => {
    navigate("/login");
  };

  const features = [
    {
      icon: Users,
      title: "User Management",
      description:
        "Manage all your clients in one place with detailed profiles and contact information",
    },
    {
      icon: Calendar,
      title: "Membership Tracking",
      description:
        "Track active memberships, expiration dates, and renewal notifications",
    },
    {
      icon: BarChart3,
      title: "Session History",
      description:
        "Complete history of all training sessions and client progress",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Your data is safe with enterprise-grade security and backup systems",
    },
  ];

  const benefits = [
    "Real-time membership status tracking",
    "Mobile-optimized interface",
    "Automated session counting",
    "Flexible membership plans",
  ];

  return (
    <div className="min-h-screen w-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Sports and fitness training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>

        {/* Content */}
        <div className="relative  z-10 min-h-screen  justify-center items-center">
          <div className="max-w-7xl lg:flex items-start mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-56">
            <div className="text-centerlg:mb-12 h-screen">
              {/* Logo */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Fit<span className="text-blue-400">Link</span>
              </h1>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                Manage Your Fitness
                <br />
                <span className="text-blue-400">Clients Like a Pro</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                Streamline your personal training business with our
                comprehensive client management system. Track memberships,
                monitor progress, and grow your fitness coaching practice.
              </p>

              {/* CTA Buttons */}
              <div className="flex  flex-col sm:flex-row gap-4 justify-center items-center px-4">
                <button
                  onClick={onGetStarted}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 border border-blue-500 hover:border-blue-400 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>Get Started</span>
                  <ArrowRight size={20} />
                </button>
                <button className="w-full sm:w-auto border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 hover:bg-slate-800">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Mobile App Review - Hidden on mobile, shown on larger screens */}
            <div className=" lg:block">
              <MobileAppReview />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Manage Your Clients
            </h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Powerful tools designed specifically for personal trainers and
              fitness coaches
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose FitLink?
              </h3>
              <p className="text-lg text-slate-400 mb-8">
                Built by fitness professionals, for fitness professionals. Our
                platform understands the unique challenges of managing a
                personal training business.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle
                      size={20}
                      className="text-green-400 flex-shrink-0"
                    />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onGetStarted}
                className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center space-x-2 transition-all duration-200 border border-blue-500 hover:border-blue-400"
              >
                <span>Start Managing Clients</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <Smartphone size={32} />
                  <div>
                    <h4 className="text-xl font-bold">Mobile First</h4>
                    <p className="text-blue-100">
                      Optimized for on-the-go management
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Active Clients</span>
                      <span className="text-2xl font-bold">24</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white rounded-full h-2"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">This Month Revenue</span>
                      <span className="text-2xl font-bold">€2,400</span>
                    </div>
                    <div className="text-green-300 text-sm">
                      ↗ +15% from last month
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Training Business?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of personal trainers who trust FitLink to manage their
            clients
          </p>

          <button
            onClick={onGetStarted}
            className="bg-white text-blue-600 hover:bg-slate-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get Started Today
          </button>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h3>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Have questions about FitLink? Want to discuss your fitness
              business needs? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-6">
                  Contact Information
                </h4>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-1">Email</h5>
                      <p className="text-slate-400 text-sm">info@fitlink.com</p>
                      <p className="text-slate-400 text-sm">
                        support@fitlink.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-1">Phone</h5>
                      <p className="text-slate-400 text-sm">
                        +1 (555) 123-4567
                      </p>
                      <p className="text-slate-400 text-sm">
                        Mon-Fri 9AM-6PM EST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h5 className="font-medium text-white mb-1">Office</h5>
                      <p className="text-slate-400 text-sm">
                        123 Fitness Street
                      </p>
                      <p className="text-slate-400 text-sm">
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Quick Response
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  We typically respond to all inquiries within 24 hours during
                  business days.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">General Questions:</span>
                    <span className="text-green-400">~2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Technical Support:</span>
                    <span className="text-blue-400">~4 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Business Inquiries:</span>
                    <span className="text-orange-400">~24 hours</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
