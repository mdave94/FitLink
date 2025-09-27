import React, { useState } from "react";
import { Calendar, Search, User, DollarSign, Clock } from "lucide-react";
import { mockMemberships } from "../data/mockData";

export default function ActiveMemberships() {
  const [searchTerm, setSearchTerm] = useState("");
  const activeMemberships = mockMemberships.filter(
    (m) => m.status === "active"
  );

  const filteredMemberships = activeMemberships.filter(
    (membership) =>
      membership.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      membership.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-600 text-white";
      case "expired":
        return "bg-red-600 text-white";
      case "cancelled":
        return "bg-gray-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  const getDaysRemaining = (endDate: string) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Calendar size={24} className="text-blue-500" />
          <h1 className="text-2xl font-bold text-white">Active Memberships</h1>
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search memberships by user or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Memberships Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredMemberships.map((membership) => {
          const daysRemaining = getDaysRemaining(membership.endDate);
          const isExpiringSoon = daysRemaining <= 30 && daysRemaining > 0;

          return (
            <div
              key={membership.id}
              className={`bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                isExpiringSoon ? "border-l-4 border-orange-400" : ""
              }`}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      membership.status
                    )}`}
                  >
                    {membership.status.charAt(0).toUpperCase() +
                      membership.status.slice(1)}
                  </span>
                  {isExpiringSoon && (
                    <span className="bg-orange-900/30 text-orange-400 px-2 py-1 rounded text-xs font-medium">
                      Expires soon
                    </span>
                  )}
                </div>

                {/* User Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <User size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">
                      {membership.userName}
                    </h3>
                    <p className="text-sm text-gray-300">{membership.type}</p>
                  </div>
                </div>

                {/* Membership Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Duration:</span>
                    <span className="font-medium text-white">
                      {membership.duration} months
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Price:</span>
                    <span className="font-medium text-white">
                      {membership.price.toLocaleString()} HUF
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Start Date:</span>
                    <span className="font-medium text-white">
                      {new Date(membership.startDate).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">End Date:</span>
                    <span className="font-medium text-white">
                      {new Date(membership.endDate).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Days Remaining:</span>
                    <span
                      className={`font-medium ${
                        daysRemaining <= 0
                          ? "text-red-400"
                          : daysRemaining <= 30
                          ? "text-orange-400"
                          : "text-green-400"
                      }`}
                    >
                      {daysRemaining <= 0 ? "Expired" : `${daysRemaining} days`}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>
                      {Math.round(
                        ((new Date().getTime() -
                          new Date(membership.startDate).getTime()) /
                          (new Date(membership.endDate).getTime() -
                            new Date(membership.startDate).getTime())) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        daysRemaining <= 30 ? "bg-orange-500" : "bg-green-500"
                      }`}
                      style={{
                        width: `${Math.min(
                          100,
                          Math.max(
                            0,
                            ((new Date().getTime() -
                              new Date(membership.startDate).getTime()) /
                              (new Date(membership.endDate).getTime() -
                                new Date(membership.startDate).getTime())) *
                              100
                          )
                        )}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="bg-gray-700 px-6 py-3 flex justify-end space-x-2">
                <button className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors duration-200">
                  Extend
                </button>
                <button className="text-red-400 hover:text-red-300 font-medium text-sm transition-colors duration-200">
                  Cancel
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* No Results */}
      {filteredMemberships.length === 0 && (
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <Calendar size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No active memberships found
          </h3>
          <p className="text-gray-600">
            There are currently no active memberships matching your search.
          </p>
        </div>
      )}
    </div>
  );
}
