import { User, Calendar, Dumbbell, ShoppingCart } from "lucide-react";
import { mockMembershipOptions } from "../data/mockData";
import type { User as UserType, MembershipOption } from "../types";

interface UserDashboardProps {
  user: UserType;
}

export default function UserDashboard({ user }: UserDashboardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("hu-HU");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
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

      {/* Membership Options (for users without membership) */}
      {!user.membershipType && (
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <ShoppingCart size={20} className="text-orange-500 mr-2" />
            Available Memberships
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockMembershipOptions.map((option: MembershipOption) => (
              <div
                key={option.id}
                className="border-2 border-orange-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {option.name}
                  </h3>
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    {option.sessionCount}
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    {option.description}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {option.price.toLocaleString()} HUF
                  </div>
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
            <p>Eligibility period: Coming soon</p>
            <p>Membership name: Coming soon</p>
          </div>
        </div>
      )}
    </div>
  );
}
