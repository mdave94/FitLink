import { useState } from "react";
import { Calendar, Search } from "lucide-react";
import { mockTrainingGroups } from "../data/mockData";
import type { TrainingGroup } from "../types";
import TrainingGroupCard from "./TrainingGroupCard";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter training groups based on search term (name, trainer, or location)
  const filteredGroups = mockTrainingGroups.filter((group: TrainingGroup) => {
    const searchLower = searchTerm.toLowerCase();
    const nameMatch = group.name.toLowerCase().includes(searchLower);
    const trainerMatch = group.trainer?.toLowerCase().includes(searchLower);
    const locationMatch = group.location?.toLowerCase().includes(searchLower);
    const descriptionMatch = group.description
      ?.toLowerCase()
      .includes(searchLower);
    return nameMatch || trainerMatch || locationMatch || descriptionMatch;
  });

  return (
    <div className="space-y-8">
      {/* Search Bar */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search training groups by name, trainer, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Training Groups */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Calendar size={24} className="text-orange-500" />
          <h2 className="text-xl font-bold text-white">Training Groups</h2>
          {searchTerm && (
            <span className="text-sm text-gray-400">
              ({filteredGroups.length} of {mockTrainingGroups.length} groups)
            </span>
          )}
        </div>
        {filteredGroups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group) => (
              <TrainingGroupCard key={group.id} group={group} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar size={48} className="text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">
              No training groups found
            </h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
