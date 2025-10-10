import MobileAppReview from "@/ui/MobileAppReview";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
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
              Streamline your personal training business with our comprehensive
              client management system. Track memberships, monitor progress, and
              grow your fitness coaching practice.
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
  );
};
