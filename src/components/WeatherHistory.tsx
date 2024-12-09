import React from 'react';
import { HistoricalWeatherData } from '../types/weather';
import { format } from 'date-fns';
import { Droplets, Thermometer, Wind } from 'lucide-react';

interface WeatherHistoryProps {
  data: HistoricalWeatherData[];
}

export const WeatherHistory: React.FC<WeatherHistoryProps> = ({ data }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">7-Day Weather History</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">High/Low</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Humidity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wind</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rain</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((day, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {format(day.date, 'MMM d, yyyy')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {day.condition}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-1">
                      <Thermometer size={16} className="text-red-500" />
                      <span className="text-gray-900">{day.highTemp}°</span>
                      <span className="text-gray-400 mx-1">/</span>
                      <Thermometer size={16} className="text-blue-500" />
                      <span className="text-gray-900">{day.lowTemp}°</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-1">
                      <Droplets size={16} className="text-blue-500" />
                      <span className="text-gray-900">{day.humidity}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-1">
                      <Wind size={16} className="text-gray-500" />
                      <span className="text-gray-900">{day.windSpeed} km/h</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex items-center gap-1">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${day.precipitation}%` }}
                        />
                      </div>
                      <span className="text-gray-500">{day.precipitation}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};