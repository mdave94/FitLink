import { useState } from "react";
import { Users, Plus, X, Clock, MapPin } from "lucide-react";

import type { TrainingGroup, User } from "../../types";
import { mockUsers } from "../../data/mockData";
import UserCard from "../trainer/UserRelated/UserCard";
import { BackButton } from "../../ui/BackButton";
import { useNavigate } from "react-router-dom";

interface TrainingGroupDetailProps {
  group: TrainingGroup;
}

export default function TrainingGroupDetail({
  group,
}: TrainingGroupDetailProps) {
  const [showAddUser, setShowAddUser] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");
  const navigate = useNavigate();

  // Get user details for current members
  const currentMembers = group.currentMembers
    .map((userId) => mockUsers.find((user) => user.id === userId))
    .filter(Boolean) as User[];

  // Get available users (not in this group)
  const availableUsers = mockUsers.filter(
    (user) =>
      user.status === "active" && !group.currentMembers.includes(user.id)
  );

  const handleAddUser = () => {
    if (selectedUserId && !group.currentMembers.includes(selectedUserId)) {
      console.log(`Adding user ${selectedUserId} to group ${group.id}`);
      setShowAddUser(false);
      setSelectedUserId("");
    }
  };

  const handleRemoveUser = (userId: string) => {
    console.log(`Removing user ${userId} from group ${group.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <BackButton onBack={() => navigate("/dashboard")} />
            <button
              onClick={() => setShowAddUser(true)}
              disabled={availableUsers.length === 0}
              className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>Add Member</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Group Info Card */}
          <div
            className={`rounded-xl shadow-lg p-6 bg-gradient-to-br ${group.colorTheme.primary}`}
          >
            <div className="relative">
              <div
                className={`absolute inset-0 ${group.colorTheme.secondary} opacity-20 rounded-xl`}
              />
              <div className="relative text-white">
                <h1 className="text-3xl font-bold mb-2">{group.name}</h1>
                {group.description && (
                  <p className="text-lg opacity-90 mb-4">{group.description}</p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock size={20} className={group.colorTheme.accent} />
                    <span className="font-medium">{group.trainingTime}</span>
                  </div>

                  {group.location && (
                    <div className="flex items-center space-x-2">
                      <MapPin size={20} className={group.colorTheme.accent} />
                      <span>{group.location}</span>
                    </div>
                  )}

                  {group.trainer && (
                    <div className="flex items-center space-x-2">
                      <Users size={20} className={group.colorTheme.accent} />
                      <span>{group.trainer}</span>
                    </div>
                  )}
                </div>

                {/* Capacity Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users size={20} className={group.colorTheme.accent} />
                    <span className="font-bold text-lg">
                      {currentMembers.length}/{group.maxCapacity} Members
                    </span>
                  </div>

                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      currentMembers.length >= group.maxCapacity
                        ? "bg-red-500/20 text-red-300 border border-red-400/30"
                        : currentMembers.length >= group.maxCapacity * 0.8
                        ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                        : "bg-white/20 text-white border border-white/30"
                    }`}
                  >
                    {currentMembers.length >= group.maxCapacity
                      ? "Full"
                      : currentMembers.length >= group.maxCapacity * 0.8
                      ? "Almost Full"
                      : "Available"}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Members List */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-white mb-6">Group Members</h2>

            {currentMembers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentMembers.map((member) => (
                  <div key={member.id} className="relative group">
                    <UserCard user={member} />
                    {/* Remove button overlay */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleRemoveUser(member.id);
                      }}
                      className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Users size={48} className="text-gray-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">
                  No members yet
                </h3>
                <p className="text-gray-400">
                  Add members to this training group
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add User Modal */}
      {showAddUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-white mb-4">
              Add Member to Group
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select User
                </label>
                <select
                  value={selectedUserId}
                  onChange={(e) => setSelectedUserId(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Choose a user...</option>
                  {availableUsers.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name} {user.nickName && `(${user.nickName})`}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowAddUser(false);
                  setSelectedUserId("");
                }}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleAddUser}
                disabled={!selectedUserId}
                className="bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Add Member
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
