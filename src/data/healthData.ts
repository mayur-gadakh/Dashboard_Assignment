export interface HealthStatus {
  id: number;
  name: string;
  status: 'healthy' | 'warning' | 'danger';
  lastCheck: string;
}

export const healthStatuses: HealthStatus[] = [
  {
    id: 1,
    name: 'Heart',
    status: 'healthy',
    lastCheck: '2025-05-10',
  },
  {
    id: 2,
    name: 'Lungs',
    status: 'danger',
    lastCheck: '2025-05-15',
  },
  {
    id: 3,
    name: 'Teeth',
    status: 'warning',
    lastCheck: '2025-05-01',
  },
  {
    id: 4,
    name: 'Bone',
    status: 'healthy',
    lastCheck: '2025-04-28',
  },
];

export const healthDetails: Record<string, string[]> = {
  'Lungs': ['Last check: May 15', 'Status: Need attention'],
  'Teeth': ['Last check: May 1', 'Status: Schedule appointment'],
  'Bone': ['Last check: April 28', 'Status: Healthy'],
};