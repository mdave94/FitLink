import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Users, MapPin, Clock, Calendar } from "lucide-react";

export default function CreateGroup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    maxCapacity: "",
    location: "",
    timeFrom: "",
    timeTo: "",
    trainer: "",
    description: "",
  });

  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const daysOfWeek = [
    { id: "mon", label: "Mon", full: "Monday" },
    { id: "tue", label: "Tue", full: "Tuesday" },
    { id: "wed", label: "Wed", full: "Wednesday" },
    { id: "thu", label: "Thu", full: "Thursday" },
    { id: "fri", label: "Fri", full: "Friday" },
    { id: "sat", label: "Sat", full: "Saturday" },
    { id: "sun", label: "Sun", full: "Sunday" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleDay = (dayId: string) => {
    setSelectedDays((prev) =>
      prev.includes(dayId)
        ? prev.filter((id) => id !== dayId)
        : [...prev, dayId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Creating group:", formData, "Days:", selectedDays);
    // Navigate back to groups page
    navigate("/groups");
  };

  const handleCancel = () => {
    navigate("/groups");
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-8">
        <button
          onClick={handleCancel}
          className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to Groups</span>
        </button>

        <h1 className="text-3xl font-bold text-white mb-2">
          Create New Training Group
        </h1>
        <p className="text-slate-400">
          Fill in the details to create a new training group
        </p>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-lg border border-gray-700 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Group Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              <div className="flex items-center space-x-2">
                <Calendar size={18} className="text-blue-400" />
                <span>Group Name *</span>
              </div>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Morning Cardio Blast"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Max Capacity */}
          <div>
            <label
              htmlFor="maxCapacity"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              <div className="flex items-center space-x-2">
                <Users size={18} className="text-blue-400" />
                <span>Maximum Capacity *</span>
              </div>
            </label>
            <input
              type="number"
              id="maxCapacity"
              name="maxCapacity"
              required
              min="1"
              max="100"
              value={formData.maxCapacity}
              onChange={handleChange}
              placeholder="e.g., 12"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <p className="text-sm text-slate-400 mt-1">
              How many people can join this group?
            </p>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              <div className="flex items-center space-x-2">
                <MapPin size={18} className="text-blue-400" />
                <span>Location *</span>
              </div>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Main Studio"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Time Duration */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="timeFrom"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                <div className="flex items-center space-x-2">
                  <Clock size={18} className="text-blue-400" />
                  <span>Start Time *</span>
                </div>
              </label>
              <input
                type="time"
                id="timeFrom"
                name="timeFrom"
                required
                value={formData.timeFrom}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label
                htmlFor="timeTo"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                <div className="flex items-center space-x-2">
                  <Clock size={18} className="text-blue-400" />
                  <span>End Time *</span>
                </div>
              </label>
              <input
                type="time"
                id="timeTo"
                name="timeTo"
                required
                value={formData.timeTo}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Days of Week Selector */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-3">
              <div className="flex items-center space-x-2">
                <Calendar size={18} className="text-blue-400" />
                <span>Training Days *</span>
              </div>
            </label>
            <div className="grid grid-cols-7 gap-2">
              {daysOfWeek.map((day) => (
                <button
                  key={day.id}
                  type="button"
                  onClick={() => toggleDay(day.id)}
                  className={`py-3 px-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedDays.includes(day.id)
                      ? "bg-blue-600 text-white ring-2 ring-blue-400 shadow-lg"
                      : "bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white"
                  }`}
                >
                  <div className="text-xs md:text-sm">{day.label}</div>
                </button>
              ))}
            </div>
            {selectedDays.length > 0 && (
              <p className="text-sm text-blue-400 mt-2">
                Selected:{" "}
                {selectedDays
                  .map((id) => daysOfWeek.find((d) => d.id === id)?.full)
                  .join(", ")}
              </p>
            )}
          </div>

          {/* Trainer Name */}
          <div>
            <label
              htmlFor="trainer"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              <div className="flex items-center space-x-2">
                <Users size={18} className="text-blue-400" />
                <span>Trainer Name</span>
              </div>
            </label>
            <input
              type="text"
              id="trainer"
              name="trainer"
              value={formData.trainer}
              onChange={handleChange}
              placeholder="e.g., John Doe"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-slate-300 mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the training group..."
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Save size={20} />
              <span>Create Group</span>
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
