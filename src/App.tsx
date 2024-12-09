import React, { useEffect, useState } from 'react';
import { WeatherCard } from './components/WeatherCard';
import { LocationHeader } from './components/LocationHeader';
import { WeatherHistory } from './components/WeatherHistory';
import { getCurrentPosition, reverseGeocode } from './utils/weather';
import { Location } from './types/weather';
import { mockWeatherData, historicalWeatherData } from './utils/mockData';

function App() {
  const [location, setLocation] = useState<Location>({ city: 'Loading...', country: '' });
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getLocation = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        
        // Get location name from coordinates
        const locationData = await reverseGeocode(latitude, longitude);
        setLocation(locationData);
      } catch (err) {
        setError('Unable to get your location. Showing demo data instead.');
        setLocation({ city: 'Demo City', country: 'Demo Country' });
      }
    };

    getLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <LocationHeader location={location} />
        
        {error && (
          <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md text-yellow-700">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <WeatherCard data={mockWeatherData[0]} isMain />
          {mockWeatherData.slice(1).map((data, index) => (
            <WeatherCard key={index} data={data} />
          ))}
        </div>

        <WeatherHistory data={historicalWeatherData} />

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Note: This demo uses mock weather data. To get real weather data,
            you would need to integrate with a weather API service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;