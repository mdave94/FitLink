import { useState, useEffect } from "react";
import {
  User,
  Calendar,
  Clock,
  Activity,
  CreditCard,
  Phone,
  Mail,
  Settings,
  ChevronDown,
  AlertTriangle,
} from "lucide-react";
import { mockUsers, mockMembershipOptions } from "../../../data/mockData";
import Modal from "../../../ui/Modal";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../../ui/BackButton";
import { Comments } from "./Comments";

interface UserDetailProps {
  userId?: string;
  onBack?: () => void;
}

interface SessionRecord {
  id: string;
  from: number;
  to: number;
  date: string;
  timestamp: string;
}

interface MembershipPlan {
  id: string;
  name: string;
  totalSessions: number;
  price: number;
  color: string;
}

export default function UserDashboard({ userId }: UserDetailProps) {
  const [sessionsRemaining, setSessionsRemaining] = useState(8);
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [showSessionModal, setShowSessionModal] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [sessionHistory, setSessionHistory] = useState<SessionRecord[]>([]);

  // Get user from mock data
  const user = mockUsers.find((u) => u.id === userId) || mockUsers[0];

  // Initialize session history from user data
  useEffect(() => {
    if (user.sessionHistory) {
      const history = user.sessionHistory.map((session) => ({
        id: session.id,
        from: session.fromCount,
        to: session.toCount,
        date: new Date(session.date).toLocaleDateString("hu-HU"),
        timestamp: new Date(session.date)
          .toLocaleString("sv-SE")
          .replace("T", " "),
      }));
      setSessionHistory(history);
    }
  }, [user.sessionHistory]);

  // Convert mock membership options to the format we need
  const membershipPlans: MembershipPlan[] = mockMembershipOptions.map(
    (option) => ({
      id: option.id,
      name: option.name,
      totalSessions: option.sessionCount,
      price: option.price,
      color:
        option.id === "1"
          ? "bg-orange-600"
          : option.id === "2"
          ? "bg-slate-500"
          : option.id === "3"
          ? "bg-blue-600"
          : "bg-green-600",
    })
  );

  const handleSessionSubtract = () => {
    setShowSessionModal(true);
  };

  const confirmSessionSubtract = () => {
    if (sessionsRemaining > 0) {
      setSessionsRemaining((prev) => prev - 1);
      const newSession: SessionRecord = {
        id: Date.now().toString(),
        from: sessionsRemaining,
        to: sessionsRemaining - 1,
        date: new Date().toLocaleDateString("hu-HU"),
        timestamp: new Date().toLocaleString("sv-SE").replace("T", " "),
      };
      setSessionHistory((prev) => [newSession, ...prev]);
    }
    setShowSessionModal(false);
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setShowPlanModal(true);
  };

  const confirmPlanAssignment = () => {
    // In real app, this would assign the plan to the user
    console.log(`Assigning plan ${selectedPlan} to user ${userId}`);
    setShowPlanModal(false);
    setSelectedPlan("");
  };

  const cancelPlanAssignment = () => {
    setShowPlanModal(false);
    setSelectedPlan("");
  };

  const cancelSessionSubtract = () => {
    setShowSessionModal(false);
  };

  // Check if user has no membership or no sessions
  const hasNoMembership = !user.membershipType || user.remainingSessions === 0;
  const hasNoSessions = sessionsRemaining === 0;
  const showAvailablePlans = hasNoMembership || hasNoSessions;

  // Check if there's more session history (for flashing arrow)
  const hasMoreHistory = sessionHistory.length > 5;
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1);
  };
  return (
    <div className="min-h-screen bg-slate-900 p-4">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <BackButton onBack={onBack} />

          {/* Settings Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200"
            >
              <Settings size={20} />
            </button>

            {showSettingsDropdown && (
              <div className="absolute right-0 top-8 bg-slate-800 border border-slate-700 rounded-lg shadow-lg py-2 min-w-[200px] z-10">
                <div className="px-4 py-2 text-slate-300 text-sm border-b border-slate-700">
                  Settings
                </div>
                <button className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700 transition-colors duration-200">
                  Edit User Profile
                </button>
                <button className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700 transition-colors duration-200">
                  Membership History
                </button>
                <button className="w-full text-left px-4 py-2 text-slate-300 hover:bg-slate-700 transition-colors duration-200">
                  Export Data
                </button>
                <button className="w-full text-left px-4 py-2 text-red-400 hover:bg-slate-700 transition-colors duration-200">
                  Deactivate User
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* User Header Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-blue-100">
                ({user.nickName || "No nickname"})
              </p>
              <div className="flex items-center space-x-4 mt-2 text-sm">
                <div className="flex items-center space-x-1">
                  <Mail size={14} />
                  <span>{user.email}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Phone size={14} />
                  <span>{user.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sessions Remaining - Clickable */}
          <div
            onClick={handleSessionSubtract}
            className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm cursor-pointer hover:bg-white/20 transition-colors duration-200"
          >
            <div className="text-4xl font-bold mb-1">{sessionsRemaining}</div>
            <div className="text-sm text-blue-100">sessions remaining</div>
            <div className="text-xs text-blue-200 mt-1">
              Click to subtract session
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Session Management */}
        <div className="lg:col-span-2 space-y-6">
          {/* Session Controls */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <Activity size={24} className="text-blue-400" />
              <span>Session Management</span>
            </h2>

            <div className="text-center mb-6">
              <p className="text-slate-300 mb-2">Current Sessions</p>
              <div className="text-3xl font-bold text-white">
                {sessionsRemaining}
              </div>
            </div>

            <button
              onClick={handleSessionSubtract}
              disabled={sessionsRemaining <= 0}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Clock size={20} />
              <span>Use Session</span>
            </button>
          </div>

          {/* Session History */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <Calendar size={24} className="text-blue-400" />
              <span>Session History</span>
            </h2>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {sessionHistory.slice(0, 5).map((session) => (
                <div
                  key={session.id}
                  className="bg-slate-700 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-600 rounded-lg p-2">
                      <Activity size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        {session.from} → {session.to}
                      </div>
                      <div className="text-slate-400 text-sm">
                        {session.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-slate-400 text-sm">
                    {session.timestamp}
                  </div>
                </div>
              ))}
            </div>

            {/* Flashing arrow if there's more history */}
            {hasMoreHistory && (
              <div className="flex justify-center mt-4">
                <div className="animate-pulse">
                  <ChevronDown size={24} className="text-blue-400" />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Membership Plans and Comments */}
        <div className="space-y-6">
          {/* Current Membership - only show if user has membership */}
          {!showAvailablePlans && (
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <CreditCard size={24} className="text-blue-400" />
                <span>Current Membership</span>
              </h2>

              <div className="bg-slate-700 rounded-lg p-4 mb-4">
                <div className="text-white font-medium mb-1">
                  {user.membershipType || "No active membership"}
                </div>
                <div className="text-slate-400 text-sm">
                  Sessions remaining: {user.remainingSessions || 0}
                </div>
              </div>
            </div>
          )}

          {/* Available Plans - show when no membership or no sessions */}
          {showAvailablePlans && (
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Available Plans
              </h2>

              <div className="space-y-3">
                {membershipPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`${
                      plan.color
                    } rounded-lg p-4 text-white cursor-pointer hover:opacity-90 transition-opacity duration-200 ${
                      selectedPlan === plan.id ? "ring-2 ring-blue-400" : ""
                    }`}
                    onClick={() => handlePlanSelect(plan.id)}
                  >
                    <div className="font-bold text-lg">{plan.name}</div>
                    <div className="text-sm opacity-90">
                      {plan.totalSessions} sessions
                    </div>
                    <div className="text-xl font-bold mt-2">
                      {plan.price.toLocaleString()} HUF
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comments Section */}
          <Comments userId={user.id} userName={user.name} />
        </div>
      </div>

      {/* Plan Assignment Modal */}
      <Modal
        isOpen={showPlanModal}
        onClose={cancelPlanAssignment}
        title="Assign Membership Plan"
        message={`Are you sure you want to assign the selected plan to ${user.name}?`}
        icon={<AlertTriangle size={24} className="text-yellow-400" />}
        confirmText="Yes, Assign"
        cancelText="Cancel"
        onConfirm={confirmPlanAssignment}
        confirmButtonColor="green"
      />

      {/* Session Subtraction Modal */}
      <Modal
        isOpen={showSessionModal}
        onClose={cancelSessionSubtract}
        title="Subtract Session"
        message={`Are you sure you want to subtract a session from ${user.name}'s account? This action cannot be undone.`}
        icon={<AlertTriangle size={24} className="text-red-400" />}
        confirmText="Yes, Subtract"
        cancelText="Cancel"
        onConfirm={confirmSessionSubtract}
        confirmButtonColor="red"
      />
    </div>
  );
}
