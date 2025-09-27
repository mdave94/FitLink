import React from "react";
import {
  ArrowRight,
  Users,
  Calendar,
  TrendingUp,
  CheckCircle,
  Smartphone,
  BarChart3,
  Shield,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    "Client progress monitoring",
    "Flexible membership plans",
    "Instant notifications",
  ];

  return (
    <div className="min-h-screen w-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Fit<span className="text-blue-400">Link</span>
              </h1>
              <p className="text-xl text-slate-300">Admin Dashboard</p>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Manage Your Fitness
              <br />
              <span className="text-blue-400">Clients Like a Pro</span>
            </h2>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline your personal training business with our comprehensive
              client management system. Track memberships, monitor progress, and
              grow your fitness coaching practice.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={onGetStarted}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg flex items-center space-x-2 transition-all duration-200 border border-blue-500 hover:border-blue-400 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
              <button className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 hover:bg-slate-800">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Mobile App Preview */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="flex justify-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="bg-slate-800 rounded-3xl p-2 shadow-2xl border border-slate-700">
                <div
                  className="bg-slate-900 rounded-2xl overflow-hidden"
                  style={{ width: "280px", height: "560px" }}
                >
                  {/* Status Bar */}
                  <div className="bg-slate-800 h-8 flex items-center justify-center">
                    <div className="w-16 h-1 bg-slate-600 rounded-full"></div>
                  </div>

                  {/* App Content */}
                  <div className="p-4 h-full">
                    <div className="text-center mb-6">
                      <h3 className="text-white font-bold text-lg">
                        FitLink Admin
                      </h3>
                      <p className="text-slate-400 text-sm">Mobile Dashboard</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-blue-600 rounded-lg p-3 text-center">
                        <div className="text-white font-bold text-2xl">24</div>
                        <div className="text-blue-100 text-xs">
                          Active Users
                        </div>
                      </div>
                      <div className="bg-green-600 rounded-lg p-3 text-center">
                        <div className="text-white font-bold text-2xl">18</div>
                        <div className="text-green-100 text-xs">
                          Memberships
                        </div>
                      </div>
                    </div>

                    {/* User List Preview */}
                    <div className="space-y-2">
                      {["Test User", "John Doe", "Jane Smith"].map(
                        (name, index) => (
                          <div
                            key={index}
                            className="bg-slate-800 rounded-lg p-3 flex items-center space-x-3"
                          >
                            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {name.charAt(0)}
                            </div>
                            <div className="flex-1">
                              <div className="text-white text-sm font-medium">
                                {name}
                              </div>
                              <div className="text-slate-400 text-xs">
                                8 sessions remaining
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
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
    </div>
  );
}
