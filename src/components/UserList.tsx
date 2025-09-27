import { useState } from "react";
import {
  Users,
  Search,
  Filter,
  Mail,
  Phone,
  Calendar,
  Dumbbell,
} from "lucide-react";
import { mockUsers } from "../data/mockData";
import type { User } from "../types";

interface UsersListProps {
  onUserClick?: (userId: string) => void;
}

export default function UsersList({ onUserClick }: UsersListProps) {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "active" | "inactive"
  >("all");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Users size={24} className="text-orange-500" />
          <h1 className="text-2xl font-bold text-white">All Users</h1>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <Search
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value as "all" | "active" | "inactive")
              }
              className="px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            onClick={() => onUserClick?.(user.id)}
            className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="p-6">
              {/* User Avatar and Status */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                      user.membershipType === "10 session"
                        ? "bg-gradient-to-r from-purple-500 to-purple-600"
                        : user.membershipType === "20 session"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600"
                        : user.status === "active"
                        ? "bg-orange-500"
                        : "bg-gray-400"
                    }`}
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{user.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          user.status === "active"
                            ? "bg-green-600 text-white"
                            : "bg-gray-600 text-white"
                        }`}
                      >
                        {user.status}
                      </span>
                      {user.membershipType && (
                        <span
                          className={`inline-block px-2 py-1 text-xs rounded-full ${
                            user.membershipType === "premium"
                              ? "bg-purple-600 text-white"
                              : user.membershipType === "basic"
                              ? "bg-blue-600 text-white"
                              : user.membershipType === "daily"
                              ? "bg-green-600 text-white"
                              : "bg-gray-600 text-white"
                          }`}
                        >
                          {user.membershipType.toUpperCase()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* User Details */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail size={16} />
                  <span className="text-sm">{user.email}</span>
                </div>

                {user.phone && (
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Phone size={16} />
                    <span className="text-sm">{user.phone}</span>
                  </div>
                )}

                {user.membershipType && user.remainingSessions !== undefined ? (
                  <div className="flex items-center space-x-2 text-orange-400">
                    <Dumbbell size={16} />
                    <span className="text-sm font-medium">
                      {user.remainingSessions} sessions remaining
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm">No active membership</span>
                  </div>
                )}

                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm">
                    Born: {new Date(user.birthDate).toLocaleDateString()}
                  </span>
                </div>

                <div className="text-xs text-gray-500 pt-2">
                  Joined: {new Date(user.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="bg-gray-700 px-6 py-3 flex justify-end space-x-2">
              <button className="text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors duration-200">
                Edit
              </button>
              <button className="text-red-400 hover:text-red-300 font-medium text-sm transition-colors duration-200">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredUsers.length === 0 && (
        <div className="bg-gray-800 rounded-xl shadow-lg p-12 text-center">
          <Users size={48} className="text-gray-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-white mb-2">
            No users found
          </h3>
          <p className="text-gray-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
}
