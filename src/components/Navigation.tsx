import { Users, UserPlus, History, Calendar, Home } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navigation({
  activeTab,
  onTabChange,
}: NavigationProps) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "add-user", label: "New User", icon: UserPlus },
    { id: "users", label: "All Users", icon: Users },
    { id: "active-memberships", label: "Active Memberships", icon: Calendar },

    { id: "history", label: "History", icon: History },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-3 bg-white shadow-lg rounded-lg p-2 mb-8">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex bg-white items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-gray-300 shadow-lg"
                  : "text-gray-600 hover:bg-gray-50  hover:text-gray-600"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white shadow-lg rounded-t-lg fixed bottom-0 left-0 right-0 z-50">
        <div className="flex justify-around">
          {navItems.slice(0, 4).map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex flex-col items-center py-3 px-2 transition-all duration-200 ${
                  activeTab === item.id
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-orange-600"
                }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{item.label.split(" ")[0]}</span>
              </button>
            );
          })}
          <button
            onClick={() => onTabChange("history")}
            className={`flex flex-col items-center py-3 px-2 transition-all duration-200 ${
              activeTab === "history"
                ? "text-orange-500"
                : "text-gray-400 hover:text-orange-600"
            }`}
          >
            <History size={20} />
            <span className="text-xs mt-1">History</span>
          </button>
        </div>
      </nav>
    </>
  );
}
