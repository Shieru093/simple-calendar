'use client';

import { createContext, use, useEffect, useState } from 'react';
import CalendarLine from '@/components/ui/calendar/line';
import { fetchRecentJapaneseHoliday } from '@/lib/calendar/fetch-api';
import { Holiday, Schedule } from '@/lib/calendar/types';
import { CalendarLineSkeleton } from '../skeletons';
import { CreateModal } from './create-modal';
import { fetchAllSchedules } from '@/lib/calendar/fetch-data';

export const ModalContext = createContext<(date: Date | undefined) => void>(() => {});

export default function HomePageCalendar({ dateState }: { dateState: Date }) {
	// const holidays = use(fetchRecentJapaneseHoliday());

	const [modalParam, setModalParam] = useState<Date | undefined>(undefined);

	const [holidays, setHolidays] = useState<Holiday[]>([]);
	const [schedules, setSchedules] = useState<Schedule[]>([]);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		async function fetchHolidays() {
			const holidaysData = await fetchRecentJapaneseHoliday();
			const scheduleData = await fetchAllSchedules();
			setIsLoaded(false);
			setHolidays(holidaysData);
			setSchedules(scheduleData);
			setIsLoaded(true);
		}
		fetchHolidays();
	}, []);

	if (!isLoaded) {
		return <CalendarLineSkeleton />;
	}

	return (
		<ModalContext.Provider value={setModalParam}>
			<CalendarLine
				dateState={dateState}
				holidays={holidays}
				schedules={schedules}
			/>
			<CreateModal param={modalParam} />
		</ModalContext.Provider>
	);
}
