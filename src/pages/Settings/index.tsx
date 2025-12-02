type SettingsProps = {
  isDarkMode: boolean;
};

export const Settings = ({ isDarkMode }: SettingsProps) => {
  return (
    <main className="h-full flex flex-col p-4 sm:p-6 gap-4">
      <div className={`rounded-2xl shadow-lg border p-6 transition-colors ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-100'
      }`}>
        <h2 className={`text-2xl font-bold mb-4 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Settings
        </h2>
        
        <div className="space-y-6">
          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              General
            </h3>
            <div className="space-y-3">
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className={`w-full px-4 py-2 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-mhfd-blue transition-all ${
                    isDarkMode 
                      ? 'bg-gray-600 text-gray-100 placeholder-gray-400' 
                      : 'bg-white text-gray-800 placeholder-gray-400'
                  }`}
                />
              </div>
              
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-mhfd-blue transition-all ${
                    isDarkMode 
                      ? 'bg-gray-600 text-gray-100 placeholder-gray-400' 
                      : 'bg-white text-gray-800 placeholder-gray-400'
                  }`}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className={`text-lg font-semibold mb-2 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              Preferences
            </h3>
            <div className="space-y-3">
              <div className={`p-4 rounded-lg flex items-center justify-between ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <span className={`text-sm font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Enable notifications
                </span>
                <input type="checkbox" className="w-5 h-5 text-mhfd-blue rounded focus:ring-mhfd-blue" />
              </div>
              
              <div className={`p-4 rounded-lg flex items-center justify-between ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <span className={`text-sm font-medium ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Auto-save messages
                </span>
                <input type="checkbox" className="w-5 h-5 text-mhfd-blue rounded focus:ring-mhfd-blue" defaultChecked />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button className="px-6 py-3 bg-mhfd-blue text-white font-medium rounded-xl hover:bg-opacity-90 transition-all">
              Save Changes
            </button>
            <button className={`px-6 py-3 font-medium rounded-xl border-2 transition-all ${
              isDarkMode 
                ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
