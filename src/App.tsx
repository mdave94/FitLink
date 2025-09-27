import { useState } from "react";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import AddUser from "./components/AddUser";
import UsersList from "./components/UserList";
import ActiveMemberships from "./components/AcitveMemberships";
import MembershipHistory from "./components/MembershipHistory";
import UserDashboard from "./components/UserDashboard";
import { mockUsers } from "./data/mockData";

function App() {
  const [activeTab, setActiveTab] = useState("user-dashboard");
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleUserClick = (userId: string) => {
    setSelectedUserId(userId);
    setActiveTab("user-dashboard");
  };

  const handleBackToDashboard = () => {
    setSelectedUserId(null);
    setActiveTab("dashboard");
  };

  const getSelectedUser = () => {
    if (!selectedUserId) return mockUsers[6]; // User5 without membership
    return mockUsers.find((user) => user.id === selectedUserId) || mockUsers[6];
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

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl cursor-pointer font-bold text-white tracking-tight">
            FitLink Admin
          </h1>
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
