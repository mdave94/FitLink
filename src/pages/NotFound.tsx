import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 leading-none">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl opacity-30">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Oops! Page Not Found
          </h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>
        </div>

        {/* Search Icon Animation */}
        <div className="flex justify-center py-8">
          <div className="relative">
            <div className="w-20 h-20 bg-slate-800/50 border border-slate-700 rounded-full flex items-center justify-center animate-pulse">
              <Search size={32} className="text-blue-400" />
            </div>
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={() => navigate(-1)}
            className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
          <button
            onClick={() => navigate("/groups")}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <Home size={20} />
            Go to Groups
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Help Text */}
        <div className="pt-8 text-slate-500 text-sm">
          <p>
            If you believe this is an error, please contact support at{" "}
            <a
              href="mailto:support@fitlink.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              support@fitlink.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
