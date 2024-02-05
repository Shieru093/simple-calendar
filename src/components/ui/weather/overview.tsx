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
		<div>
			<div>{weather?.cityName}</div>
			<div>{weather?.main}</div>
			<div>{weather?.temp}</div>
			<div>{weather?.humidity}</div>
		</div>
	);
}
