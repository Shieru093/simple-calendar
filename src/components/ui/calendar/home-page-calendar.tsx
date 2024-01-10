'use client';

import { useReducer, Suspense } from 'react';
import CalendarController from '@/components/ui/calendar/controller';
import CalendarHeader from '@/components/ui/calendar/header';
import CalendarLine from '@/components/ui/calendar/line';
import { weekLength } from '@/const/dict';
import { CalendarAction, CalendarState } from '@/lib/calendar/types';
import { initialCalendarState } from '@/lib/calendar/actions';
import { CalendarLineSkeleton } from '../skeletons';

const reducer = (state: CalendarState, action: CalendarAction): CalendarState => {
	if (action.type === 'prev') {
		const prevWeek = new Date(state.date);
		prevWeek.setDate(state.date.getDate() - weekLength);
		return { date: prevWeek };
	} else if (action.type === 'next') {
		const nextWeek = new Date(state.date);
		nextWeek.setDate(state.date.getDate() + weekLength);
		return { date: nextWeek };
	} else if (action.type === 'reset') {
		return initialCalendarState;
	} else {
		return state;
	}
};

export default function HomePageCalendar() {
	const [state, dispatch] = useReducer(reducer, initialCalendarState);

	return (
		<div>
			<CalendarHeader date={state.date} />
			<Suspense fallback={<CalendarLineSkeleton />}>
				<CalendarLine date={state.date} />
			</Suspense>
			<CalendarController action={dispatch} />
		</div>
	);
}
