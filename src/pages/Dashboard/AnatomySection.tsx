import { healthStatuses, healthDetails } from '../../data/healthData';
import HealthStatusCard from '../../components/HealthStatusCard';

const AnatomySection= () => {
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Health Status</h2>

  <div className="flex flex-col md:flex-row">
    <div className="relative flex-shrink-0 w-48 mx-auto md:mx-0 mb-4 md:mb-0">
      <div className="relative h-80 w-48 bg-gray-100 rounded-lg flex items-center justify-center">
        <svg viewBox="0 0 32 64" className="h-full w-full text-gray-400 opacity-50">
          <path d="M16,8 C20,8 22,12 22,16 C22,20 20,28 20,32 C20,36 22,40 22,44 C22,48 20,52 16,52 C12,52 10,48 10,44 C10,40 12,36 12,32 C12,28 10,20 10,16 C10,12 12,8 16,8 Z" fill="currentColor" />
        </svg>

      </div>
    </div>

    <div className="flex-1 md:ml-6 space-y-3 text-sm">
      {Object.entries(healthDetails).map(([name, details]) => (
        <HealthStatusCard 
          key={name}
          name={name}
          details={details}
          status={healthStatuses.find(s => s.name === name)?.status || 'healthy'}
        />
      ))}
    </div>
  </div>
</div>

  );
};

export default AnatomySection;