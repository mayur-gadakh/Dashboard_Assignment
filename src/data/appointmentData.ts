export interface Appointment {
  id: number;
  title: string;
  doctor: string;
  specialty: string;
  time: string;
  day: string;
  date: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export const appointments: Appointment[] = [
  {
    id: 1,
    title: 'Health checkup complete',
    doctor: 'Dr. Smith',
    specialty: 'General Practitioner',
    time: '09:00',
    day: 'Thursday',
    date: '2025-05-26',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Ophthalmologist',
    doctor: 'Dr. Johnson',
    specialty: 'Eye Specialist',
    time: '11:00',
    day: 'Thursday',
    date: '2025-05-26',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Cardiologist',
    doctor: 'Dr. Williams',
    specialty: 'Heart Specialist',
    time: '13:00',
    day: 'Saturday',
    date: '2025-05-28',
    status: 'upcoming',
  },
  {
    id: 4,
    title: 'Neurologist',
    doctor: 'Dr. Davis',
    specialty: 'Brain Specialist',
    time: '15:00',
    day: 'Saturday',
    date: '2025-05-28',
    status: 'upcoming',
  },
];

export const calendarAppointments = [
  { day: 10, time: '09:00' },
  { day: 12, time: '11:00' },
  { day: 18, time: '13:00' },
  { day: 23, time: '15:00' },
];

export const detailedAppointments = [
  {
    id: 101,
    title: 'Dentist',
    doctor: 'Dr. Johnson',
    time: '11:00',
    date: '2025-10-12',
  },
  {
    id: 102,
    title: 'Physiotherapy Appointment',
    doctor: 'Dr. Williams',
    time: '13:00',
    date: '2025-10-18',
  },
];