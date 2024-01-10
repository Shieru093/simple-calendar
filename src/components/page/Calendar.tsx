'use client';

import { useReducer } from 'react';
import CalendarController from '@/components/ui/calendar/controller';
import CalendarHeader from '@/components/ui/calendar/header';
import CalendarTable from '@/components/ui/calendar/table';
import { initialCalendarState } from '@/lib/calendar/actions';
import type { CalendarAction, CalendarState } from '@/lib/calendar/types';

const reducer = (state: CalendarState, action: CalendarAction): CalendarState => {
	if (action.type === 'prev') {
		const prevWeek = new Date(state.date.getFullYear(), state.date.getMonth() - 1, 1);
		return { date: prevWeek };
	} else if (action.type === 'next') {
		const nextWeek = new Date(state.date.getFullYear(), state.date.getMonth() + 1, 1);
		return { date: nextWeek };
	} else if (action.type === 'reset') {
		return initialCalendarState;
	} else {
		return state;
	}
};

export default function Calendar() {
	const [state, dispatch] = useReducer(reducer, initialCalendarState);

	return (
		<div>
			<div>
				<CalendarHeader date={state.date} />
			</div>
			<div>
				<CalendarTable date={state.date} />
			</div>
			<div>
				<CalendarController action={dispatch} />
			</div>
		</div>
	);
}
