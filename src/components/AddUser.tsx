import React, { useState } from "react";
import { UserPlus, Save, X } from "lucide-react";

export default function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birthDate: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        birthDate: "",
        phone: "",
      });

      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      birthDate: "",
      phone: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
          <div className="flex items-center space-x-3">
            <UserPlus size={24} className="text-white" />
            <h1 className="text-2xl font-bold text-white">Add New User</h1>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="bg-green-50 border-l-4 border-green-400 p-4 m-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-green-700">
                  User has been successfully added to the system!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Ügyfél neve (Client Name) *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full text-black bg-white px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter client name"
            />
          </div>

          <div>
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Született (Date of Birth) *
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              required
              className="w-full px-4  text-black bg-white  py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              E-mail cím (Email Address) *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full  text-black px-4 py-3 text-black bg-white  border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              placeholder="client@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Telefon (Phone Number)
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3  text-black border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              placeholder="+36 30 123 4567"
            />
          </div>

          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-orange-500  hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save size={20} />
              <span>
                {isSubmitting ? "Saving..." : "Ügyfél felvétele (Add Client)"}
              </span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
            >
              <X size={20} />
              <span>Reset</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
