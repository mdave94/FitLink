import { Link } from "react-router-dom";
import { Users, Clock, MapPin } from "lucide-react";
import type { TrainingGroup } from "../../types";

interface TrainingGroupCardProps {
  group: TrainingGroup;
}

export default function TrainingGroupCard({ group }: TrainingGroupCardProps) {
  const currentCount = group.currentMembers.length;
  const isFull = currentCount >= group.maxCapacity;

  return (
    <Link
      to={`/training-groups/${group.id}`}
      className={`relative overflow-hidden rounded-xl border-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 block ${
        isFull
          ? `border-gray-500 bg-gradient-to-br ${group.colorTheme.primary}`
          : `border-transparent bg-gradient-to-br ${group.colorTheme.primary}`
      }`}
    >
      {/* Background Pattern */}
      <div
        className={`absolute inset-0 ${group.colorTheme.secondary} opacity-20`}
      />

      {/* Content */}
      <div className="relative p-6 text-white">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">{group.name}</h3>
            {/* Availability Status */}
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium inline-block mt-2 ${
                currentCount >= group.maxCapacity
                  ? "bg-red-500/20 text-red-300 border border-red-400/30"
                  : currentCount >= group.maxCapacity * 0.8
                  ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                  : "bg-white/20 text-white border border-white/30"
              }`}
            >
              {currentCount >= group.maxCapacity
                ? "Full"
                : currentCount >= group.maxCapacity * 0.8
                ? "Almost Full"
                : "Available"}
            </div>
          </div>

          {/* Capacity Indicator */}
          <div className="flex items-center space-x-2 ml-4">
            <Users size={20} className={group.colorTheme.accent} />
            <span className={`font-bold text-4xl `}>
              {currentCount}/{group.maxCapacity}
            </span>
          </div>
        </div>

        {/* Time and Location */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center space-x-2">
            <Clock size={16} className={group.colorTheme.accent} />
            <span className="text-sm font-medium">{group.trainingTime}</span>
          </div>

          {group.location && (
            <div className="flex items-center space-x-2">
              <MapPin size={16} className={group.colorTheme.accent} />
              <span className="text-sm">{group.location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}
