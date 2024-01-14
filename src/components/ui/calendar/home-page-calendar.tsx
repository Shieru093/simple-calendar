'use client';

import { useReducer, Suspense, createContext, useEffect } from 'react';
import CalendarController from '@/components/ui/calendar/controller';
import CalendarHeader from '@/components/ui/calendar/header';
import CalendarLine from '@/components/ui/calendar/line';
import { weekLength } from '@/const/dict';
import { ActionType, CalendarAction, CalendarState } from '@/lib/calendar/types';
import { initialCalendarState } from '@/lib/calendar/utils';
import { CalendarLineSkeleton } from '../skeletons';
import { useCalendarState } from '@/lib/hooks/useCalendarState';

export default function HomePageCalendar() {
	const [recentCalendar, currentDate, actions] = useCalendarState(new Date());
	const actionType: ActionType = { type: 'week' };

	return (
		<div>
			<CalendarHeader date={currentDate} />
			<Suspense fallback={<CalendarLineSkeleton />}>
				<CalendarLine
					calendarData={recentCalendar}
					currentDate={currentDate}
				/>
			</Suspense>
			<CalendarController
				actions={actions}
				actionType={actionType}
			/>
		</div>
	);
}
