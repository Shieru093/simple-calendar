'use client';

import { use, useEffect, useState } from 'react';
import CalendarTable from '@/components/ui/calendar/table';
import type { Holiday } from '@/lib/calendar/types';
import { fetchRecentJapaneseHoliday } from '@/lib/calendar/fetch-api';
import { CalendarTableSkeleton } from '@/components/ui/skeletons';

export default function CalendarPageCalendar({ dateState }: { dateState: Date }) {
	// const holidays: Holiday[] = use(fetchRecentJapaneseHoliday());

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
		return <CalendarTableSkeleton />;
	}

	return (
		<CalendarTable
			dateState={dateState}
			holidays={holidays}
		/>
	);
}
