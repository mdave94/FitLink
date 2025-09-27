{
  /* Mobile App Preview */
}

export default function MobileAppReview() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="flex justify-center">
        <div className="relative">
          {/* Phone Frame */}
          <div className="bg-slate-800 rounded-3xl p-2 shadow-2xl border border-slate-700">
            <div
              className="bg-slate-900 rounded-2xl overflow-hidden"
              style={{ width: "280px", height: "560px" }}
            >
              {/* Status Bar */}
              <div className="bg-slate-800 h-8 flex items-center justify-center">
                <div className="w-16 h-1 bg-slate-600 rounded-full"></div>
              </div>

              {/* App Content */}
              <div className="p-4 h-full">
                <div className="text-center mb-6">
                  <h3 className="text-white font-bold text-lg">
                    FitLink Admin
                  </h3>
                  <p className="text-slate-400 text-sm">Mobile Dashboard</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-blue-600 rounded-lg p-3 text-center">
                    <div className="text-white font-bold text-2xl">24</div>
                    <div className="text-blue-100 text-xs">Active Users</div>
                  </div>
                  <div className="bg-green-600 rounded-lg p-3 text-center">
                    <div className="text-white font-bold text-2xl">18</div>
                    <div className="text-green-100 text-xs">Memberships</div>
                  </div>
                </div>

                {/* User List Preview */}
                <div className="space-y-2">
                  {["Test User", "John Doe", "Jane Smith"].map(
                    (name, index) => (
                      <div
                        key={index}
                        className="bg-slate-800 rounded-lg p-3 flex items-center space-x-3"
                      >
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="text-white text-sm font-medium">
                            {name}
                          </div>
                          <div className="text-slate-400 text-xs">
                            8 sessions remaining
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
