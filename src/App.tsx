import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useParams,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import AddUser from "./components/AddUser";
import UsersList from "./components/UserList";
import ActiveMemberships from "./pages/AcitveMemberships";
import MembershipHistory from "./components/MembershipHistory";
import UserDashboard from "./components/trainer/UserRelated/UserDashboard";
import TrainingGroupDetailWrapper from "./components/trainingGroups/TrainingGroupDetailWrapper";
import Authentication from "./pages/AuthenticationPage";
import LandingPage from "./pages/LandingPage";

// UserDashboard wrapper component
const UserDashboardWrapper = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/users");
  };

  if (!userId) {
    return <div>User not found</div>;
  }

  return <UserDashboard userId={userId} onBack={handleBack} />;
};

// Layout component for authenticated pages
const AppLayout = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg">
        <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl cursor-pointer font-bold text-white tracking-tight">
            FitLink Admin
          </h1>
          <button
            onClick={onLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Navigation />
        <div className="pb-20 md:pb-0">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/users/:userId" element={<UserDashboardWrapper />} />
            <Route path="/active-memberships" element={<ActiveMemberships />} />
            <Route path="/membership-history" element={<MembershipHistory />} />
            <Route
              path="/training-groups/:groupId"
              element={<TrainingGroupDetailWrapper />}
            />
            {/* Default redirect to dashboard for / routes */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

// Simple auth check (you'll want to replace this with real auth logic)
const useAuth = () => {
  // For now, just check if user is "logged in" - replace with real auth
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  return { isAuthenticated };
};

// Protected Route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

// Authentication wrapper component
const AuthenticationWrapper = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/login"
        element={<Authentication onSuccess={handleLoginSuccess} />}
      />

      {/* Protected app routes */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <AppLayout onLogout={handleLogout} />
          </ProtectedRoute>
        }
      />

      {/* Catch all - redirect to landing */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <AuthenticationWrapper />
    </Router>
  );
}

export default App;
