export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  date: Date;
}

export interface Location {
  city: string;
  country: string;
}

export interface HistoricalWeatherData extends WeatherData {
  highTemp: number;
  lowTemp: number;
  precipitation: number;
}