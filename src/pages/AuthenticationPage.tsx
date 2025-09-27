import { useState } from "react";
import {
  User,
  Lock,
  Mail,
  Phone,
  Calendar,
  Users,
  Dumbbell,
} from "lucide-react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

interface AuthenticationProps {
  onSuccess?: () => void;
}

export default function Authentication({ onSuccess }: AuthenticationProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<"user" | "trainer">("user");

  return (
    <div className="min-h-screen w-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Dumbbell size={24} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">FitLink</h1>
          </div>
          <p className="text-gray-400 text-lg">
            Your fitness journey starts here
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Branding */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 lg:p-12 flex flex-col justify-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Welcome to FitLink
                </h2>
                <p className="text-blue-100 text-lg mb-8">
                  Join thousands of fitness enthusiasts and professional
                  trainers in the most comprehensive fitness management
                  platform.
                </p>

                {/* Features */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users size={20} className="text-blue-200" />
                    <span className="text-blue-100">
                      Connect with trainers and users
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} className="text-blue-200" />
                    <span className="text-blue-100">
                      Track your fitness journey
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Dumbbell size={20} className="text-blue-200" />
                    <span className="text-blue-100">
                      Manage memberships and sessions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Forms */}
            <div className="p-8 lg:p-12">
              {/* Toggle Buttons */}
              <div className="flex space-x-1 mb-8 bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setIsLogin(true)}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    isLogin
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setIsLogin(false)}
                  className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 ${
                    !isLogin
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Register
                </button>
              </div>

              {/* User Type Selection (only for registration) */}
              {!isLogin && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Register as:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setUserType("user")}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        userType === "user"
                          ? "border-blue-500 bg-blue-900/20"
                          : "border-gray-600 bg-gray-700 hover:border-gray-500"
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <User
                          size={24}
                          className={
                            userType === "user"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }
                        />
                        <span
                          className={`text-sm font-medium ${
                            userType === "user"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                        >
                          User
                        </span>
                        <span
                          className={`text-xs text-center ${
                            userType === "user"
                              ? "text-blue-300"
                              : "text-gray-500"
                          }`}
                        >
                          Join as a fitness enthusiast
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => setUserType("trainer")}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        userType === "trainer"
                          ? "border-blue-500 bg-blue-900/20"
                          : "border-gray-600 bg-gray-700 hover:border-gray-500"
                      }`}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <Dumbbell
                          size={24}
                          className={
                            userType === "trainer"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }
                        />
                        <span
                          className={`text-sm font-medium ${
                            userType === "trainer"
                              ? "text-blue-400"
                              : "text-gray-400"
                          }`}
                        >
                          Trainer
                        </span>
                        <span
                          className={`text-xs text-center ${
                            userType === "trainer"
                              ? "text-blue-300"
                              : "text-gray-500"
                          }`}
                        >
                          Become a fitness professional
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Forms */}
              {isLogin ? (
                <LoginForm onSuccess={onSuccess} />
              ) : (
                <RegisterForm userType={userType} onSuccess={onSuccess} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
