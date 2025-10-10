import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const LandingNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <>
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
    </>
  );
};
