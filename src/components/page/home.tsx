'use client';

import { Suspense, useState } from 'react';
import CalendarHeader from '@/components/ui/calendar/header';
import { CalendarLineSkeleton } from '@/components/ui/skeletons';
import HomePageCalendar from '@/components/ui/calendar/home-page-calendar';

export default function Home() {
	const [dateState, setDateState] = useState<Date>(new Date());

	return (
		<div className="">
			<CalendarHeader
				dateState={dateState}
				setDateState={setDateState}
				weekOrMonth="week"
			/>
			<Suspense fallback={<CalendarLineSkeleton />}>
				<HomePageCalendar dateState={dateState} />
			</Suspense>
		</div>
	);
}
