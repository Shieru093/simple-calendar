'use client';

import { useReducer } from 'react';
import CalendarController from '@/components/ui/calendar/controller';
import CalendarHeader from '@/components/ui/calendar/header';
import CalendarTable from '@/components/ui/calendar/table';
import { initialCalendarState } from '@/lib/calendar/utils';
import type { ActionType, CalendarAction, CalendarState } from '@/lib/calendar/types';
import { useCalendarState } from '@/lib/hooks/useCalendarState';

export default function Calendar() {
	const [recentCalendar, currentDate, actions] = useCalendarState(new Date());
	const actionType: ActionType = { type: 'month' };
	return (
		<div>
			<div>
				<CalendarHeader date={currentDate} />
			</div>
			<div>
				<CalendarTable
					calendarData={recentCalendar}
					currentDate={currentDate}
				/>
			</div>
			<div>
				<CalendarController
					actions={actions}
					actionType={actionType}
				/>
			</div>
		</div>
	);
}
