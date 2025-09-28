import { Link } from "react-router-dom";
import { Users, Clock, MapPin } from "lucide-react";
import type { TrainingGroup } from "../types";

interface TrainingGroupCardProps {
  group: TrainingGroup;
}

export default function TrainingGroupCard({ group }: TrainingGroupCardProps) {
  const currentCount = group.currentMembers.length;
  const isFull = currentCount >= group.maxCapacity;
  const isNearCapacity = currentCount >= group.maxCapacity * 0.8;

  return (
    <Link
      to={`/app/training-groups/${group.id}`}
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
            {group.description && (
              <p className="text-sm opacity-90 leading-relaxed">
                {group.description}
              </p>
            )}
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

        {/* Status Badge */}
        <div className="flex justify-between items-center">
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              isFull
                ? "bg-red-500/20 text-red-300 border border-red-400/30"
                : isNearCapacity
                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-400/30"
                : "bg-white/20 text-white border border-white/30"
            }`}
          >
            {isFull ? "Full" : isNearCapacity ? "Almost Full" : "Available"}
          </div>

          {group.currentMembers.length > 0 && (
            <div className="flex items-center space-x-1">
              <Users size={14} className="opacity-70" />
              <span className="text-xs opacity-70">
                {currentCount} {currentCount === 1 ? "member" : "members"}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </Link>
  );
}
