import { LayoutDashboard, Clock, Calendar, CalendarClock, BarChart2, Goal as Vial, MessageSquare, HelpCircle, Settings } from 'lucide-react';

export interface NavigationLink {
  id: number;
  name: string;
  icon: React.ElementType;
  active: boolean;
}

export const navigationLinks: NavigationLink[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: LayoutDashboard,
    active: true,
  },
  {
    id: 2,
    name: 'History',
    icon: Clock,
    active: false,
  },
  {
    id: 3,
    name: 'Calendar',
    icon: Calendar,
    active: false,
  },
  {
    id: 4,
    name: 'Appointments',
    icon: CalendarClock,
    active: false,
  },
  {
    id: 5,
    name: 'Statistics',
    icon: BarChart2,
    active: false,
  },
  {
    id: 6,
    name: 'Tests',
    icon: Vial,
    active: false,
  },
  {
    id: 7,
    name: 'Chat',
    icon: MessageSquare,
    active: false,
  },
  {
    id: 8,
    name: 'Support',
    icon: HelpCircle,
    active: false,
  },
  {
    id: 9,
    name: 'Setting',
    icon: Settings,
    active: false,
  },
];