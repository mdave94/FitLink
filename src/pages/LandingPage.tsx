import { ArrowRight, Users, TrendingUp, Award, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-white">Fit</span>
              <span className="text-blue-500">Link</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-slate-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <button
                onClick={handleGetStarted}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
              mobileMenuOpen
                ? "max-h-96 opacity-100 mt-4 pb-4"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#pricing"
                className="text-slate-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <button
                onClick={handleGetStarted}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="text-blue-500 font-semibold text-sm tracking-wider uppercase">
                  Fitness Management
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Manage Your Fitness
                <span className="block text-blue-500 mt-2">
                  Clients Like a Pro
                </span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl max-w-xl">
                Streamline your personal training business with our
                comprehensive client management system. Track memberships,
                monitor progress, and grow your fitness coaching practice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGetStarted}
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  Get Started
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-slate-700 hover:border-slate-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-blue-500">10k+</div>
                  <div className="text-slate-400 text-sm">Active Trainers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500">50k+</div>
                  <div className="text-slate-400 text-sm">Clients Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">98%</div>
                  <div className="text-slate-400 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Content - Mobile Dashboard */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                <div className="bg-slate-900/50 rounded-2xl p-6 space-y-6">
                  {/* Header */}
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">FitLink Admin</h3>
                    <p className="text-slate-400">Mobile Dashboard</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-600 rounded-xl p-6 text-center space-y-2">
                      <div className="text-4xl font-bold">24</div>
                      <div className="text-blue-100 text-sm">Active Users</div>
                    </div>
                    <div className="bg-green-600 rounded-xl p-6 text-center space-y-2">
                      <div className="text-4xl font-bold">18</div>
                      <div className="text-green-100 text-sm">Memberships</div>
                    </div>
                  </div>

                  {/* Client List */}
                  <div className="space-y-3">
                    {["Test User", "John Doe", "Jane Smith"].map(
                      (name, idx) => (
                        <div
                          key={idx}
                          className="bg-slate-800/80 rounded-xl p-4 flex items-center gap-4 hover:bg-slate-800 transition-colors"
                        >
                          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                            {name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold">{name}</div>
                            <div className="text-slate-400 text-sm">
                              8 sessions remaining
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything You Need
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Powerful features to help you manage your fitness business
              efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-blue-500/50 transition-all group">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600/30 transition-colors">
                <Users className="text-blue-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Client Management</h3>
              <p className="text-slate-400">
                Easily track all your clients, their progress, and membership
                details in one centralized dashboard.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-green-500/50 transition-all group">
              <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600/30 transition-colors">
                <TrendingUp className="text-green-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Progress Tracking</h3>
              <p className="text-slate-400">
                Monitor client achievements, session attendance, and fitness
                goals with comprehensive analytics.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-orange-500/50 transition-all group">
              <div className="w-14 h-14 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600/30 transition-colors">
                <Award className="text-orange-500" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Professional Tools</h3>
              <p className="text-slate-400">
                Access professional-grade tools for scheduling, billing, and
                client communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform Your
            <span className="block text-blue-500 mt-2">Fitness Business?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join thousands of fitness professionals who trust FitLink to manage
            their coaching practice.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-blue-600 hover:bg-blue-700 px-10 py-5 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 mx-auto transition-all hover:scale-105"
          >
            Start Free Trial
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 FitLink. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
