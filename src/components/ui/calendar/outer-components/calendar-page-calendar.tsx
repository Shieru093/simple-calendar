'use client';

import { use, useEffect, useState } from 'react';
import CalendarTable from '@/components/ui/calendar/inner-components/table';
import { CalendarTableSkeleton } from '@/components/ui/skeletons';
import { fetchAllSchedules } from '@/lib/calendar/fetch-data';
import { fetchRecentJapaneseHoliday } from '@/lib/calendar/fetch-api';
import type { Holiday, Schedule } from '@/lib/calendar/types';

export default function CalendarPageCalendar({ dateState }: { dateState: Date }) {
	// const holidays: Holiday[] = use(fetchRecentJapaneseHoliday());

	const [holidays, setHolidays] = useState<Holiday[]>([]);
	const [schedules, setSchedules] = useState<Schedule[]>([]);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		async function fetchCalendarData() {
			const holidayData = await fetchRecentJapaneseHoliday();
			const scheduleData = await fetchAllSchedules();

			setIsLoaded(false);
			setHolidays(holidayData);
			setSchedules(scheduleData);
			setIsLoaded(true);
		}
		fetchCalendarData();
	}, [schedules]);

	if (!isLoaded) {
		return <CalendarTableSkeleton />;
	}

	return (
		<CalendarTable
			dateState={dateState}
			holidays={holidays}
			schedules={schedules}
		/>
	);
}
