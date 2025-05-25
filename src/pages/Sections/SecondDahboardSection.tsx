import CalendarView from '../Dashboard/CalendarView'
import UpcomingSchedule from '../Dashboard/UpcomingSchedule'
import { Plus } from 'lucide-react'


const SecondDahboardSection = () => {
  return (


<div className="flex flex-col space-y-6 p-4 md:p-6 bg-blue-50 rounded-lg shadow-md">
  <div className="flex justify-end items-center space-x-2 mb-4">
    <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
      <Plus className="h-5 w-5" />
    </button>

    <div className="h-9 w-9 rounded-lg bg-gray-200 overflow-hidden">
      <img
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        alt="User"
        className="h-full w-full object-cover"
      />
    </div>
  </div>

  <CalendarView />
  <UpcomingSchedule />
</div>  )
}

export default SecondDahboardSection