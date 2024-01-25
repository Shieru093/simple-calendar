'use client';

import { createContext, use, useEffect, useState } from 'react';
import CalendarTable from '@/components/ui/calendar/table';
import type { Holiday, Schedule } from '@/lib/calendar/types';
import { fetchRecentJapaneseHoliday } from '@/lib/calendar/fetch-api';
import { CalendarTableSkeleton } from '@/components/ui/skeletons';
import { CreateModal } from './create-modal';
import { fetchAllSchedules } from '@/lib/calendar/fetch-data';

export const ModalContext = createContext<(date: Date | undefined) => void>(() => {});

export default function CalendarPageCalendar({ dateState }: { dateState: Date }) {
	// const holidays: Holiday[] = use(fetchRecentJapaneseHoliday());

	const [modalParam, setModalParam] = useState<Date | undefined>(undefined);

	const [holidays, setHolidays] = useState<Holiday[]>([]);
	const [schedules, setSchedules] = useState<Schedule[]>([]);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		async function fetchHolidays() {
			const holidayData = await fetchRecentJapaneseHoliday();
			const scheduleData = await fetchAllSchedules();
			setIsLoaded(false);
			setHolidays(holidayData);
			setSchedules(scheduleData);
			setIsLoaded(true);
		}
		fetchHolidays();
	}, []);

	if (!isLoaded) {
		return <CalendarTableSkeleton />;
	}

	return (
		<ModalContext.Provider value={setModalParam}>
			<CalendarTable
				dateState={dateState}
				holidays={holidays}
				schedules={schedules}
			/>
			<CreateModal param={modalParam} />
		</ModalContext.Provider>
	);
}
