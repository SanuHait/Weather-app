import React from 'react';
import { Cloud, Droplets, Wind } from 'lucide-react';
import { WeatherData } from '../types/weather';
import { format } from 'date-fns';

interface WeatherCardProps {
  data: WeatherData;
  isMain?: boolean;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ data, isMain = false }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${isMain ? 'col-span-full' : ''}`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500">{format(data.date, 'EEEE, MMM d')}</p>
          <h2 className={`${isMain ? 'text-4xl' : 'text-2xl'} font-bold mt-2`}>
            {data.temperature}°C
          </h2>
          <p className="text-lg text-gray-700 mt-1">{data.condition}</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Droplets size={18} />
            <span>{data.humidity}%</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Wind size={18} />
            <span>{data.windSpeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};