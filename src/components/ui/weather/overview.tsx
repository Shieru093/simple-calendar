'use client';

import { useEffect, useState } from 'react';
import { fetchWeather } from '@/lib/calendar/fetch-api';
import type { Weather } from '@/lib/weather/types';

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
		<div className="flex flex-col items-center justify-center pt-8 text-gray-50">
			<div className="bg-gray-600 px-8 py-2 rounded">
				<div className="bg-gray-800 py-1 text-lg text-center rounded">{weather?.cityName}</div>
				<div className="pt-3 text-3xl text-center">{weather?.main}</div>
				<div className="gap-2 grid grid-cols-2 pb-3 text-center">
					<div>{weather?.temp}℃</div>
					<div>{weather?.humidity}%</div>
				</div>
			</div>
		</div>
	);
}
