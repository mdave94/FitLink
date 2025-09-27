import { Calendar, Dumbbell, ShoppingCart, ArrowLeft } from "lucide-react";
import type { User as UserType } from "../types";
import MembershipCard from "./MembershipCard";

interface UserDashboardProps {
  user: UserType;
  onBack?: () => void;
}

export default function UserDashboard({ user, onBack }: UserDashboardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("hu-HU");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {/* Back Button */}
      {onBack && (
        <div className="mb-4">
          <button
            onClick={onBack}
            className="flex bg-gray-300 text-black items-center space-x-2  hover:text-orange-800  duration-200"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Dashboard</span>
          </button>
        </div>
      )}

      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {user.name}
            </h1>
            {user.nickName && (
              <p className="text-lg text-gray-600">({user.nickName})</p>
            )}
          </div>

          {user.membershipType && user.remainingSessions !== undefined ? (
            <div className="flex items-center space-x-3 bg-orange-100 rounded-lg p-4">
              <Dumbbell size={24} className="text-orange-600" />
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-orange-600">
                  {user.remainingSessions}
                </div>
                <div className="text-sm text-orange-700">
                  sessions remaining
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-4">
              <Calendar size={24} className="text-gray-500" />
              <div>
                <div className="text-lg text-gray-600">
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
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Dumbbell size={20} className="text-orange-500 mr-2" />
                Session History
              </h2>
              <div className="space-y-3">
                {user.sessionHistory.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-lg font-semibold text-gray-900">
                        {session.fromCount} → {session.toCount}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      {formatDate(session.date)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        {/* Future: Membership Details (placeholder) */}
        {user.membershipType && (
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Membership Details
            </h2>
            <div className="text-gray-600">
              <p>Membership type: {user.membershipType}</p>
            </div>
          </div>
        )}
      </div>
      {/* Membership Options (for users without membership) */}
      {!user.membershipType && (
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
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
