export interface ActivityData {
  day: string;
  count: number;
}

export const weeklyActivity: ActivityData[] = [
  { day: 'Mon', count: 2 },
  { day: 'Tue', count: 1 },
  { day: 'Wed', count: 0 },
  { day: 'Thu', count: 3 },
  { day: 'Fri', count: 1 },
  { day: 'Sat', count: 2 },
  { day: 'Sun', count: 0 },
];