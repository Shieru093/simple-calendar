'use client';

import { useState } from 'react';
import CalendarHeader from '@/components/ui/calendar/header';
import HomePageCalendar from '@/components/ui/calendar/home-page-calendar';

export default function Home() {
	const [dateState, setDateState] = useState<Date>(new Date());

	return (
		<div>
			<CalendarHeader
				dateState={dateState}
				setDateState={setDateState}
				weekOrMonth="week"
			/>
			<HomePageCalendar dateState={dateState} />
		</div>
	);
}
