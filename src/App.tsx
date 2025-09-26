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

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "add-user":
        return <AddUser />;
      case "users":
        return <UsersList />;
      case "active-memberships":
        return <ActiveMemberships />;
      case "history":
        return <MembershipHistory />;
      case "user-dashboard":
        return <UserDashboard user={mockUsers[0]} />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg">
        <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            FitLink
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
