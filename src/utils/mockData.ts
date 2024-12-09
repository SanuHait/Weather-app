import { WeatherData, Location, HistoricalWeatherData } from '../types/weather';
import { addDays, subDays } from 'date-fns';

export const currentLocation: Location = {
  city: 'New York',
  country: 'USA',
};

export const mockWeatherData: WeatherData[] = [
  {
    temperature: 22,
    condition: 'Sunny',
    humidity: 45,
    windSpeed: 12,
    date: new Date(),
  },
  {
    temperature: 20,
    condition: 'Partly Cloudy',
    humidity: 50,
    windSpeed: 10,
    date: addDays(new Date(), 1),
  },
  {
    temperature: 18,
    condition: 'Rainy',
    humidity: 75,
    windSpeed: 15,
    date: addDays(new Date(), 2),
  },
  {
    temperature: 24,
    condition: 'Clear',
    humidity: 40,
    windSpeed: 8,
    date: addDays(new Date(), 3),
  },
  {
    temperature: 21,
    condition: 'Cloudy',
    humidity: 55,
    windSpeed: 11,
    date: addDays(new Date(), 4),
  },
];

export const historicalWeatherData: HistoricalWeatherData[] = Array.from({ length: 7 }, (_, i) => ({
  date: subDays(new Date(), i + 1),
  temperature: Math.round(15 + Math.random() * 10),
  highTemp: Math.round(20 + Math.random() * 8),
  lowTemp: Math.round(10 + Math.random() * 8),
  humidity: Math.round(40 + Math.random() * 40),
  windSpeed: Math.round(5 + Math.random() * 15),
  condition: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)],
  precipitation: Math.round(Math.random() * 100),
}));