'use client';

import { use, useEffect, useState } from 'react';
import CalendarLine from '@/components/ui/calendar/line';
import { fetchRecentJapaneseHoliday } from '@/lib/calendar/fetch-api';
import { Holiday } from '@/lib/calendar/types';
import { CalendarLineSkeleton } from '../skeletons';

export default function HomePageCalendar({ dateState }: { dateState: Date }) {
	// const holidays = use(fetchRecentJapaneseHoliday());

	const [holidays, setHolidays] = useState<Holiday[]>([]);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		async function fetchHolidays() {
			const holidaysData = await fetchRecentJapaneseHoliday();
			setIsLoaded(false);
			setHolidays(holidaysData);
			setIsLoaded(true);
		}
		fetchHolidays();
	}, []);

	if (!isLoaded) {
		return <CalendarLineSkeleton />;
	}

	return (
		<div>
			<CalendarLine
				dateState={dateState}
				holidays={holidays}
			/>
		</div>
	);
}
