import { Calendar, Dumbbell, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { mockUsers } from "../data/mockData";
import MembershipCard from "./MembershipCard";

export default function UserDashboard() {
  const { userId } = useParams<{ userId: string }>();

  // Find the user by ID from mock data
  const user = mockUsers.find((u) => u.id === userId);

  if (!user) {
    return <Navigate to="/app/users" replace />;
  }
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("hu-HU");
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 sm:p-6">
      {/* Back Button */}
      <div className="mb-4">
        <Link
          to="/app/dashboard"
          className="flex bg-gray-700 text-white items-center space-x-2 hover:bg-gray-600 duration-200 px-4 py-2 rounded-lg"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back to Dashboard</span>
        </Link>
      </div>

      {/* Header */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              {user.name}
            </h1>
            {user.nickName && (
              <p className="text-lg text-gray-300">({user.nickName})</p>
            )}
          </div>

          {user.membershipType && user.remainingSessions !== undefined ? (
            <div className="flex items-center space-x-3 bg-orange-900/30 rounded-lg p-4 border border-orange-500/30">
              <Dumbbell size={24} className="text-orange-400" />
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-orange-400">
                  {user.remainingSessions}
                </div>
                <div className="text-sm text-orange-300">
                  sessions remaining
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-3 bg-gray-700 rounded-lg p-4">
              <Calendar size={24} className="text-gray-400" />
              <div>
                <div className="text-lg text-gray-300">
                  No active membership
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex">
        {/* Session History */}
        {user.membershipType &&
          user.sessionHistory &&
          user.sessionHistory.length > 0 && (
            <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                <Dumbbell size={20} className="text-orange-500 mr-2" />
                Session History
              </h2>
              <div className="space-y-3">
                {user.sessionHistory.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-3 bg-gray-700 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-lg font-semibold text-white">
                        {session.fromCount} → {session.toCount}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      {formatDate(session.date)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Future: Membership Details (placeholder) */}
        {user.membershipType && (
          <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-xl font-bold text-white mb-4">
              Membership Details
            </h2>
            <div className="text-gray-300">
              <p>Membership type: {user.membershipType}</p>
            </div>
          </div>
        )}
      </div>
      {/* Membership Options (for users without membership) */}
      {!user.membershipType && (
        <div className="bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center">
            <ShoppingCart size={20} className="text-orange-500 mr-2" />
            Available Memberships
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <MembershipCard
              name="10 entries"
              entries={10}
              colorTheme="blue"
              onClick={() => console.log("10 entries selected")}
            />
            <MembershipCard
              name="20 entries"
              entries={20}
              colorTheme="green"
              onClick={() => console.log("20 entries selected")}
            />
          </div>
        </div>
      )}
    </div>
  );
}
