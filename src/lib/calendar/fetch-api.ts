'use server';

import type { CatchHoliday, Holiday } from '@/lib/calendar/types';
import type { Weather } from '@/lib/weather/types';

/** 直近の祝日を取得する */
export async function fetchRecentJapaneseHoliday(): Promise<Holiday[]> {
	try {
		const res = await fetch('https://api.national-holidays.jp/recent');
		if (!res.ok) {
			throw new Error('HTTP error, status = ' + res.status);
		}
		const catchHolidays: CatchHoliday[] = await res.json();

		// データを使える形式に変換
		const holidays: Holiday[] = catchHolidays.map((catchHoliday) => ({
			date: new Date(catchHoliday.date),
			name: catchHoliday.name,
			type: catchHoliday.type,
		}));

		return holidays;
	} catch (error) {
		console.error('接続エラー:', error);
		return [];
	}
}

export async function fetchWeather(city: string): Promise<Weather | undefined> {
	try {
		const apiKey = process.env.WEATHER_API_KEY;
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
		);
		console.log('aa');
		if (!res.ok) {
			throw new Error('HTTP error, status = ' + res.status);
		}
		console.log('be');
		const catchWeather = await res.json();
		console.log('af');

		const weather: Weather = {
			main: catchWeather.weather[0].main,
			temp: catchWeather.main.temp,
			humidity: catchWeather.main.humidity,
			cityName: catchWeather.name,
		};

		return weather;
	} catch (error) {
		console.error('接続エラー:', error);
		return undefined;
	}
}
