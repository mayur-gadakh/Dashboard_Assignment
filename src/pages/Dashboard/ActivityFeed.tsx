import { weeklyActivity } from '../../data/activityData';

const ActivityFeed= () => {
  const maxCount = Math.max(...weeklyActivity.map(item => item.count));
  
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Activity</h2>
      <p className="text-sm text-gray-500 mb-6">3 appointments on this week</p>
      
      <div className="flex items-end h-32 space-x-6 mb-2">
        {weeklyActivity.map((item, index) => {
          const height = item.count === 0 ? 4 : (item.count / maxCount) * 100;
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div 
                className={`w-full rounded-t-md ${item.count > 0 ? 'bg-blue-500' : 'bg-gray-200'}`} 
                style={{ height: `${height}%` }}
              ></div>
            </div>
          );
        })}
      </div>
      
      <div className="flex justify-between">
        {weeklyActivity.map((item, index) => (
          <div key={index} className="text-xs text-gray-500 text-center">
            {item.day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;