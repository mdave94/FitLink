import { Users, UserPlus, History, Calendar, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, path: "/app/dashboard" },
    {
      id: "add-user",
      label: "New User",
      icon: UserPlus,
      path: "/app/add-user",
    },
    { id: "users", label: "All Users", icon: Users, path: "/app/users" },
    {
      id: "active-memberships",
      label: "Active Memberships",
      icon: Calendar,
      path: "/app/active-memberships",
    },
    {
      id: "history",
      label: "History",
      icon: History,
      path: "/app/membership-history",
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-3 bg-gray-800 shadow-lg rounded-lg p-2 mb-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive(item.path)
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-gray-800 shadow-lg rounded-t-lg fixed bottom-0 left-0 right-0 z-50">
        <div className="flex justify-around">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex flex-col items-center py-3 px-2 transition-all duration-200 ${
                  isActive(item.path)
                    ? "text-blue-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{item.label.split(" ")[0]}</span>
              </Link>
            );
          })}
          <Link
            to="/app/membership-history"
            className={`flex flex-col items-center py-3 px-2 transition-all duration-200 ${
              isActive("/app/membership-history")
                ? "text-blue-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <History size={20} />
            <span className="text-xs mt-1">History</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
