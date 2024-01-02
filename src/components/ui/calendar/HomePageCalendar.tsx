'use client';

import { useReducer } from 'react';
import CalendarController from '@/components/ui/calendar/Controller';
import CalendarHeader from '@/components/ui/calendar/Header';
import CalendarLine from '@/components/ui/calendar/Line';
import { weekLength } from '@/const/dict';
import { CalendarAction, CalendarState } from '@/lib/calendar/types';
import { initialCalendarState } from '@/lib/calendar/actions';

const reducer = (state: CalendarState, action: CalendarAction): CalendarState => {
	console.log(state.date.toDateString());
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
			<CalendarLine date={state.date} />
			<CalendarController action={dispatch} />
		</div>
	);
}
