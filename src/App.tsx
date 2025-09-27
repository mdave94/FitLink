import { useState } from "react";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import UsersList from "./components/UserList";
import ActiveMemberships from "./components/AcitveMemberships";
import MembershipHistory from "./components/MembershipHistory";
import UserDashboard from "./components/UserDashboard";
import Authentication from "./pages/AuthenticationPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleUserClick = (userId: string) => {
    setSelectedUserId(userId);
    setActiveTab("user-dashboard");
  };

  const handleBackToDashboard = () => {
    setSelectedUserId(null);
    setActiveTab("dashboard");
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab("dashboard");
    setSelectedUserId(null);
  };

  const getSelectedUser = () => {
    // This would normally come from your user data
    // For now, return a mock user for demonstration
    return {
      id: "1",
      name: "Demo User",
      email: "demo@fitlink.com",
      birthDate: "1990-01-01",
      createdAt: "2024-01-01",
      status: "active" as const,
    };
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard onUserClick={handleUserClick} />;
      case "add-user":
        return <AddUser />;
      case "users":
        return <UsersList onUserClick={handleUserClick} />;
      case "active-memberships":
        return <ActiveMemberships />;
      case "history":
        return <MembershipHistory />;
      case "user-dashboard":
        return (
          <UserDashboard
            user={getSelectedUser()}
            onBack={handleBackToDashboard}
          />
        );
      default:
        return <Dashboard onUserClick={handleUserClick} />;
    }
  };

  // Show authentication page if not logged in
  if (!isAuthenticated) {
    return <Authentication onSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl cursor-pointer font-bold text-white tracking-tight">
            FitLink Admin
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="pb-20 md:pb-0">{renderContent()}</div>
      </main>
    </div>
  );
}

export default App;
