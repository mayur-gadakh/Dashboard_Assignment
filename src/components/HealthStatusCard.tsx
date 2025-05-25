import React from 'react';
import { Settings as Lungs, Bluetooth as Tooth, Bone } from 'lucide-react';

interface HealthStatusCardProps {
  name: string;
  details: string[];
  status: string;
}

const HealthStatusCard: React.FC<HealthStatusCardProps> = ({ name, details, status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'healthy':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';
      case 'danger':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getIcon = () => {
    switch (name) {
      case 'Lungs':
        return <Lungs className="h-5 w-5" />;
      case 'Teeth':
        return <Tooth className="h-5 w-5" />;
      case 'Bone':
        return <Bone className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg flex items-start">
      <div className={`p-2 rounded-lg mr-3 ${getStatusColor()}`}>
        {getIcon()}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{name}</h3>
        <div className="mt-1 text-sm text-gray-500">
          {details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthStatusCard;