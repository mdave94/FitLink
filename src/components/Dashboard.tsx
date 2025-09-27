import { Users } from "lucide-react";
import { mockUsers } from "../data/mockData";
import type { User } from "../types";
import UserCard from "./UserCard";

interface DashboardProps {
  onUserClick?: (userId: string) => void;
}

export default function Dashboard({ onUserClick }: DashboardProps) {
  const activeUsers = mockUsers.filter(
    (user: User) => user.status === "active"
  );

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          FitLink Admin Dashboard
        </h1>
        <p className="text-gray-400">
          Manage your active users and their training sessions
        </p>
      </div>

      {/* Active Users */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Users size={24} className="text-orange-500" />
          <h2 className="text-xl font-bold text-white">Active Users</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeUsers.map((user) => (
            <UserCard key={user.id} user={user} onUserClick={onUserClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
