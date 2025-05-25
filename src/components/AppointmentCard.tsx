import React from 'react';
import { Eye, Heart, Brain, CheckCircle } from 'lucide-react';
import { Appointment } from '../data/appointmentData';

interface AppointmentCardProps {
  appointment: Appointment;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({ appointment }) => {
  const getIcon = () => {
    switch (appointment.title.toLowerCase()) {
      case 'ophthalmologist':
        return <Eye className="h-5 w-5" />;
      case 'cardiologist':
        return <Heart className="h-5 w-5" />;
      case 'neurologist':
        return <Brain className="h-5 w-5" />;
      case 'health checkup complete':
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <CheckCircle className="h-5 w-5" />;
    }
  };

  const getColorClass = () => {
    switch (appointment.status) {
      case 'completed':
        return 'bg-green-100 text-green-600';
      case 'upcoming':
        if (appointment.title.toLowerCase() === 'ophthalmologist') {
          return 'bg-purple-100 text-purple-600';
        } else if (appointment.title.toLowerCase() === 'cardiologist') {
          return 'bg-red-100 text-red-600';
        } else if (appointment.title.toLowerCase() === 'neurologist') {
          return 'bg-blue-100 text-blue-600';
        }
        return 'bg-blue-100 text-blue-600';
      case 'cancelled':
        return 'bg-gray-100 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="flex items-start p-4 border border-gray-300 rounded-2xl bg-grey-700">
  <div className={`p-2 rounded-lg mr-4 mt-1 ${getColorClass()}`}>
    {getIcon()}
  </div>

  <div className="flex flex-col justify-center">
    <h4 className="font-semibold text-gray-900 text-sm">{appointment.title}</h4>
    <p className="text-xs text-gray-500 mt-1">{appointment.time}</p>
  </div>
</div>

  );
};

export default AppointmentCard;