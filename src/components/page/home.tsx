'use client';

import { useState } from 'react';
import CalendarHeader from '@/components/ui/calendar/headers/header';
import HomePageCalendar from '@/components/ui/calendar/outer-components/home-page-calendar';
import Overview from '@/components/ui/weather/overview';

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
			<Overview />
		</div>
	);
}
