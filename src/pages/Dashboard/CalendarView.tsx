import { calendarAppointments, detailedAppointments } from '../../data/appointmentData';

const CalendarView = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDay = 4; 
  
  const hasAppointment = (day: number) => {
    return calendarAppointments.some(appt => appt.day === day);
  };
  
  const getAppointmentTime = (day: number) => {
    const appointment = calendarAppointments.find(appt => appt.day === day);
    return appointment ? appointment.time : null;
  };

  return (
    <div className="bg-blue-50 rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">October 2025</h2>
        <div className="flex space-x-2">
          <button className="p-1 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="p-1 rounded-md hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-4">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={index} className="text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
        
        {Array.from({ length: startDay }, (_, i) => (
          <div key={`empty-${i}`} className="h-8 rounded-md"></div>
        ))}
        
        {days.map(day => (
          <div 
            key={day}
            className={`relative h-8 flex items-center justify-center rounded-md text-sm
              ${hasAppointment(day) ? 'bg-blue-100' : 'hover:bg-gray-100'}`}
          >
            <span className={hasAppointment(day) ? 'font-medium text-blue-800' : 'text-gray-700'}>
              {day}
            </span>
            {hasAppointment(day) && (
              <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-[10px] text-blue-600">
                {getAppointmentTime(day)}
              </span>
            )}
          </div>
        ))}
      </div>
      

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
  {detailedAppointments.map((appointment, index) => (
    <div
      key={appointment.id}
      className={`p-4 rounded-2xl   shadow-sm ${
        index === 0 ? 'bg-blue-600 text-white' : 'bg-white'
      }`}
    >
      <h3 className="font-semibold text-lg">{appointment.title}</h3>
      <p className="text-sm">{appointment.time}</p>
    </div>
  ))}
</div>



    </div>
  );
};

export default CalendarView;