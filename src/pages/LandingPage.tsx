import MobileAppReview from "@/ui/MobileAppReview";
import { ArrowRight, Users, TrendingUp, Award, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FeatureCard } from "@/components/landingPageRelated/FeatureCard";

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
              <Link
                to="features"
                smooth={true}
                duration={800}
                offset={-70}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Features
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={800}
                offset={-70}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                About
              </Link>
              <Link
                to="pricing"
                smooth={true}
                duration={800}
                offset={-70}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                Pricing
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGetStarted}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Get Started
              </motion.button>
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
            className={`md:hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? "max-h-96 opacity-100 mt-4 pb-4"
                : "max-h-0 opacity-0 mt-0 pb-0"
            }`}
          >
            <div className="flex flex-col gap-4 pt-4">
              <Link
                to="features"
                smooth={true}
                duration={800}
                offset={-70}
                className="text-slate-300 hover:text-white transition-colors py-2 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={800}
                offset={-70}
                className="text-slate-300 hover:text-white transition-colors py-2 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="pricing"
                smooth={true}
                duration={800}
                offset={-70}
                className="text-slate-300 hover:text-white transition-colors py-2 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <button
                onClick={handleGetStarted}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors w-full mt-2"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
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
            </div>

            {/* Right Content - Mobile Dashboard */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <MobileAppReview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything You Need
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Powerful features to help you manage your fitness business
              efficiently
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Client Management"
              description="Easily track all your clients, their progress, and membership details in one centralized dashboard."
              icon={<Users className="text-blue-500" size={28} />}
              delay={0.1}
              detailedContent={{
                subtitle: "Streamline Your Client Relationships",
                features: [
                  "Centralized client database with detailed profiles",
                  "Membership tracking and expiration alerts",
                  "Session history and attendance monitoring",
                  "Progress photos and measurement tracking",
                  "Automated communication tools",
                ],
                benefits: [
                  "Save 5+ hours per week on admin tasks",
                  "Improve client retention by 40%",
                  "Professional client experience",
                  "Real-time insights and analytics",
                  "Mobile-friendly access anywhere",
                ],
                ctaText: "Start Managing Clients",
              }}
            />

            <FeatureCard
              title="Progress Tracking"
              description="Monitor client achievements, session attendance, and fitness goals with comprehensive analytics."
              icon={<TrendingUp className="text-green-500" size={28} />}
              delay={0.2}
              detailedContent={{
                subtitle: "Data-Driven Fitness Coaching",
                features: [
                  "Visual progress charts and graphs",
                  "Goal setting and milestone tracking",
                  "Performance metrics and analytics",
                  "Custom workout plan creation",
                  "Nutrition and lifestyle tracking",
                ],
                benefits: [
                  "Increase client success rates by 60%",
                  "Evidence-based coaching decisions",
                  "Motivate clients with visual progress",
                  "Identify improvement opportunities",
                  "Build stronger trainer-client relationships",
                ],
                ctaText: "Track Progress Now",
              }}
            />

            <FeatureCard
              title="Professional Tools"
              description="Access professional-grade tools for scheduling, billing, and client communication."
              icon={<Award className="text-orange-500" size={28} />}
              delay={0.3}
              detailedContent={{
                subtitle: "Everything You Need to Succeed",
                features: [
                  "Advanced scheduling and calendar management",
                  "Automated billing and payment processing",
                  "Professional communication templates",
                  "Business analytics and reporting",
                  "Integration with popular fitness apps",
                ],
                benefits: [
                  "Reduce administrative workload by 70%",
                  "Increase revenue with automated billing",
                  "Professional brand presentation",
                  "Scale your business efficiently",
                  "Focus more on training, less on admin",
                ],
                ctaText: "Get Professional Tools",
              }}
            />
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
