import AnatomySection from '../Dashboard/AnatomySection'
import ActivityFeed from '../Dashboard/ActivityFeed'
import { Bell, Search } from 'lucide-react'

const FirstDashboardSection = () => {
  return (
      <div className="flex flex-col space-y-6 p-4 md:p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-3">
               <div className="relative hidden md:block">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
      />
    </div>
    <div className="flex items-center bg-white border border-gray-200 rounded-lg p-2 shadow-sm">
      <button className="relative">
        <Bell className="h-5 w-5 text-gray-600" />
        <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
      </button>
    </div>

   
  </div>

  <AnatomySection />
  <ActivityFeed />
</div>

  )
}

export default FirstDashboardSection