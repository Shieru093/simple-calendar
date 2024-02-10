'use client';

import { fetchWeather } from '@/lib/calendar/fetch-api';
import type { Weather } from '@/lib/weather/types';
import { useEffect, useState } from 'react';

export default function Overview() {
	const [weather, setWeather] = useState<Weather>();
	const [isLoaded, setIsLoaded] = useState<Boolean>(false);

	useEffect(() => {
		async function fetchWeatherData() {
			const weatherData = await fetchWeather('kyoto');

			setIsLoaded(false);
			setWeather(weatherData);
			setIsLoaded(true);
		}
		fetchWeatherData();
	}, []);

	if (!isLoaded) {
		return <div>loading</div>;
	}
	return (
		<div className="flex flex-col items-center justify-center pt-4 text-gray-50">
			<div className="">{weather?.cityName}</div>
			<div className="text-xl">{weather?.main}</div>
			<div>{weather?.temp}℃</div>
			<div>{weather?.humidity}%</div>
		</div>
	);
}
