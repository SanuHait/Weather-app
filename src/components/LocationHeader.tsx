import React from 'react';
import { MapPin } from 'lucide-react';
import { Location } from '../types/weather';

interface LocationHeaderProps {
  location: Location;
}

export const LocationHeader: React.FC<LocationHeaderProps> = ({ location }) => {
  return (
    <div className="flex items-center gap-2 mb-6">
      <MapPin className="text-blue-500" size={24} />
      <h1 className="text-2xl font-bold">
        {location.city}, {location.country}
      </h1>
    </div>
  );
};