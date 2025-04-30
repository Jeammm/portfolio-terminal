import React, { useEffect, useState } from "react";
import Widget from "../wrapper/widget";
import WeatherResponse from "@/types/WeatherResponse";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const weatherWidget = () => {
  const [weatherData, setWeatherData] = useState(new WeatherResponse());
  const pathname = usePathname();

  useEffect(() => {
    const fetchWeatherData = async (lat, lon) => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&cnt=7`
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.warn(
            "Geolocation denied or failed, using default location.",
            error
          );
          fetchWeatherData(
            process.env.NEXT_PUBLIC_WEATHER_LAT,
            process.env.NEXT_PUBLIC_WEATHER_LON
          );
        },
        { timeout: 10000 } // optional: 10 seconds timeout
      );
    } else {
      console.warn("Geolocation not available, using default location.");
      fetchWeatherData(
        process.env.NEXT_PUBLIC_WEATHER_LAT,
        process.env.NEXT_PUBLIC_WEATHER_LON
      );
    }
  }, []);

  console.log(pathname);

  return (
    <Widget
      col={4}
      row={2}
      className={cn([
        "px-4 py-3 transition-all ease-in-out duration-300",
        pathname !== "/desktop"
          ? "filter grayscale transition-filter"
          : "bg-gradient-to-b from-[#000010] to-[#2e3b57]",
      ])}
    >
      <div className="flex justify-between">
        <div>
          <div className="flex gap-1">
            <p>{weatherData.city?.name}</p>
            <span className="-rotate-45 text-sm ml-1">➢</span>
          </div>
          <p className="text-4xl font-light">
            {kelvinToCelsius(weatherData.list?.[0]?.main.temp)}°
          </p>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-end text-xl">
            {getWeatherIcon(weatherData.list?.[0]?.weather?.[0]?.main)}
          </span>
          <p>{weatherData.list?.[0]?.weather?.[0]?.description}</p>
          <p>
            H: {kelvinToCelsius(weatherData.list?.[0]?.main.temp_max)}° L:{" "}
            {kelvinToCelsius(weatherData.list?.[0]?.main.temp_min)}°
          </p>
        </div>
      </div>

      <div className="flex justify-between mt-3.5">
        {weatherData.list?.slice(1, 7).map((hourData, idx) => (
          <SmallHourForecast key={idx} data={hourData} />
        ))}
      </div>
    </Widget>
  );
};

export default weatherWidget;

const SmallHourForecast = ({ data }) => {
  return (
    <div className="text-center">
      <p className="text-sm text-white/60">{formatHour(data.dt)}</p>
      <p className="text-xl my-0.5">
        {getWeatherIcon(data.weather?.[0]?.main)}
      </p>
      <p className="text-sm">{kelvinToCelsius(data.main.temp)}°</p>
    </div>
  );
};

// Helper: Convert Kelvin to Celsius
const kelvinToCelsius = (kelvin) => {
  if (kelvin === undefined) {
    return "-";
  }
  return Math.round(kelvin - 273.15);
};

// Helper: Convert dt to Hour
const formatHour = (dt) => {
  if (!dt) {
    return "";
  }
  const date = new Date(dt * 1000);
  return date.getHours().toString().padStart(2, "0");
};

// Helper: Get Weather Icon
const getWeatherIcon = (main) => {
  switch (main) {
    case "Clear":
      return "☀️";
    case "Clouds":
      return "☁️";
    case "Rain":
      return "🌧️";
    case "Snow":
      return "❄️";
    case "Thunderstorm":
      return "⛈️";
    case "Drizzle":
      return "🌦️";
    case "Mist":
    case "Fog":
      return "🌫️";
    default:
      return "🌈"; // fallback
  }
};
