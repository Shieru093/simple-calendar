'use client';

import { useState, createContext } from 'react';
import CalendarHeader from '@/components/ui/calendar/headers/header';
import CalendarPageCalendar from '@/components/ui/calendar/outer-components/calendar-page-calendar';
import { AddScheduleButton } from '@/components/ui/calendar/buttons';
import { CreateModal } from '@/components/ui/calendar/modals/create-modal';

export const ModalContext = createContext<(date: Date | undefined) => void>(() => {});

export default function Calendar() {
	const [dateState, setDateState] = useState<Date>(new Date());
	const [modalParam, setModalParam] = useState<Date | undefined>(undefined);

	return (
		<div>
			<CalendarHeader
				dateState={dateState}
				setDateState={setDateState}
				weekOrMonth="month"
			/>
			<ModalContext.Provider value={setModalParam}>
				<CalendarPageCalendar dateState={dateState} />
				<div className="pt-8 text-center">
					<AddScheduleButton />
				</div>
				<CreateModal param={modalParam} />
			</ModalContext.Provider>
		</div>
	);
}
