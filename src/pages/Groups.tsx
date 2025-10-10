import { useState } from "react";
import { Calendar, Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { mockTrainingGroups } from "../data/mockData";
import type { TrainingGroup } from "../types";
import TrainingGroupCard from "../components/trainingGroups/TrainingGroupCard";

export default function Groups() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Filter training groups based on search term (name, trainer, or location)
  const filteredGroups = mockTrainingGroups.filter((group: TrainingGroup) => {
    const searchLower = searchTerm.toLowerCase();
    const nameMatch = group.name.toLowerCase().includes(searchLower);

    return nameMatch;
  });

  return (
    <div className="space-y-8">
      {/* Search Bar and Create Button */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Calendar size={24} className="text-orange-500" />
            Training Groups
          </h2>
          <button
            onClick={() => navigate("/create-group")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            <Plus size={20} />
            Create Group
          </button>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search "
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
