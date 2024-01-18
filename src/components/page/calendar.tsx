'use client';

import { Suspense, useState } from 'react';
import CalendarHeader from '@/components/ui/calendar/header';
import CalendarPageCalendar from '@/components/ui/calendar/calendar-page-calendar';
import { CalendarTableSkeleton } from '@/components/ui/skeletons';

export default function Calendar() {
	const [dateState, setDateState] = useState<Date>(new Date());

	return (
		<div>
			<CalendarHeader
				dateState={dateState}
				setDateState={setDateState}
				weekOrMonth="month"
			/>
			<Suspense fallback={<CalendarTableSkeleton />}>
				<CalendarPageCalendar dateState={dateState} />
			</Suspense>
		</div>
	);
}
