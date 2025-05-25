import { appointments } from '../../data/appointmentData';
import AppointmentCard from '../../components/AppointmentCard';

const UpcomingSchedule = () => {
  const appointmentsByDay: Record<string, typeof appointments> = {};
  
  appointments.forEach(appointment => {
    if (!appointmentsByDay[appointment.day]) {
      appointmentsByDay[appointment.day] = [];
    }
    appointmentsByDay[appointment.day].push(appointment);
  });

  return (
   <div className="bg-blue-50 rounded-xl shadow-sm p-6">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">The Upcoming Schedule</h2>

  <div className="space-y-6">
    {Object.entries(appointmentsByDay).map(([day, dayAppointments]) => (
      <div key={day}>
        <h3 className="text-sm font-medium text-gray-500 mb-2">On {day}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {dayAppointments.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default UpcomingSchedule;