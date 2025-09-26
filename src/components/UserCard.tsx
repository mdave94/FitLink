import { Dumbbell, Calendar } from "lucide-react";
import type { User } from "../types";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div
      className={`border-2 cursor-pointer rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
        user.membershipType
          ? "border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100 shadow-md"
          : "border-gray-200 bg-gray-50"
      }`}
    >
      <div className="space-y-3">
        <div className="flex justify-between ">
          <div className="flex flex-col">
            <h3 className="font-bold text-gray-900 text-xl">{user.name}</h3>
            {user.nickName && (
              <h2 className="text-black text-sm">( {user.nickName} )</h2>
            )}
          </div>

          <div className="text-4xl text-black">{user.remainingSessions}</div>
        </div>
        <div className="text-sm text-gray-500">{user.email}</div>
      </div>
    </div>
  );
}
