import { Link } from "react-router-dom";
import type { User } from "../types";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Link
      to={`/app/users/${user.id}`}
      className={`border-2 cursor-pointer rounded-xl p-6 hover:shadow-lg transition-all duration-300 block ${
        user.membershipType
          ? "border-blue-500 bg-gradient-to-br from-blue-900/30 to-blue-800/30 shadow-md"
          : "border-gray-600 bg-gray-800"
      }`}
    >
      <div className="space-y-3">
        <div className="flex justify-between ">
          <div className="flex flex-col">
            <h3 className="font-bold text-white text-xl">{user.name}</h3>
            {user.nickName && (
              <h2 className="text-gray-300 text-sm">( {user.nickName} )</h2>
            )}
          </div>

          <div className="text-4xl text-white">{user.remainingSessions}</div>
        </div>
        <div className="text-sm text-gray-400">{user.email}</div>
      </div>
    </Link>
  );
}
