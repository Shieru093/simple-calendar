import { Suspense } from 'react';
import { CalendarTableSkeleton } from '@/components/ui/skeletons';
import CalendarPageCalendar from '../ui/calendar/calendar-page-calendar';

export default function Calendar() {
	return (
		<div>
			{/* <Suspense fallback={<CalendarTableSkeleton />}> */}
			<CalendarPageCalendar />
			{/* </Suspense> */}
		</div>
	);
}
