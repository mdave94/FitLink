import React, { useState } from "react";
import { History, Search, Filter, Calendar, User } from "lucide-react";
import { mockMembershipHistory } from "../data/mockData";

export default function MembershipHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "expired" | "cancelled"
  >("all");

  const filteredHistory = mockMembershipHistory.filter((membership) => {
    const matchesSearch =
      membership.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      membership.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || membership.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "expired":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "expired":
        return "✓";
      case "cancelled":
        return "✗";
      default:
        return "?";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <History size={24} className="text-orange-500" />
          <h1 className="text-2xl font-bold text-gray-800">
            Membership History
          </h1>
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
              placeholder="Search membership history..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(
                  e.target.value as "all" | "expired" | "cancelled"
                )
              }
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            >
              <option value="all">All Status</option>
              <option value="expired">Expired</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className="space-y-4">
        {filteredHistory.map((membership) => (
          <div
            key={membership.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                {/* Left Side - User Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {membership.userName}
                    </h3>
                    <p className="text-sm text-gray-600">{membership.type}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                          membership.status
                        )}`}
                      >
                        <span className="mr-1">
                          {getStatusIcon(membership.status)}
                        </span>
                        {membership.status.charAt(0).toUpperCase() +
                          membership.status.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center - Membership Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 block">Duration</span>
                    <span className="font-medium">
                      {membership.duration} months
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Price</span>
                    <span className="font-medium">
                      {membership.price.toLocaleString()} HUF
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Started</span>
                    <span className="font-medium">
                      {new Date(membership.startDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Ended</span>
                    <span className="font-medium">
                      {new Date(membership.endDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                {/* Right Side - Completion Details */}
                <div className="text-sm">
                  {membership.completedAt && (
                    <div>
                      <span className="text-gray-500 block">Completed</span>
                      <span className="font-medium">
                        {new Date(membership.completedAt).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Reason (if available) */}
              {membership.reason && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-start space-x-2">
                    <span className="text-gray-500 text-sm">Reason:</span>
                    <span className="text-sm text-gray-700">
                      {membership.reason}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredHistory.length === 0 && (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <History size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No history found
          </h3>
          <p className="text-gray-600">
            There are no membership records matching your search criteria.
          </p>
        </div>
      )}
    </div>
  );
}
