import { WeatherData, Location, HistoricalWeatherData } from '../types/weather';

export const getCurrentPosition = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
    } else {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }
  });
};

export const reverseGeocode = async (lat: number, lon: number): Promise<Location> => {
  try {
    // Using a free geocoding service that doesn't require an API key
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    );
    const data = await response.json();
    
    return {
      city: data.address.city || data.address.town || data.address.village || data.address.suburb || 'Unknown',
      country: data.address.country || 'Unknown'
    };
  } catch (error) {
    console.error('Error getting location:', error);
    return { city: 'Unknown', country: 'Unknown' };
  }
};