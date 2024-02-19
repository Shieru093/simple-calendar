'use client';

import { useState, createContext } from 'react';
import CalendarHeader from '@/components/ui/calendar/headers/header';
import CalendarPageCalendar from '@/components/ui/calendar/outer-components/calendar-page-calendar';
import CreateModal from '@/components/ui/calendar/modals/create-modal';
import DeleteConfirmationModal from '@/components/ui/calendar/modals/delete-confirmation-model';
import EditModal from '@/components/ui/calendar/modals/edit-modal';
import HolidayModal from '@/components/ui/calendar/modals/holiday-modal';
import ScheduleDetailModal from '@/components/ui/calendar/modals/schedule-detail-modal';
import { AddScheduleButton } from '@/components/ui/calendar/buttons';
import type { Holiday, Schedule } from '@/lib/calendar/types';

type ModalContextType = {
	setViewHolidayTarget: (holiday: Holiday | undefined) => void;
	setCreateScheduleTarget: (date: Date | undefined) => void;
	setViewScheduleTarget: (schedule: Schedule | undefined) => void;
};

export const ModalContext = createContext<ModalContextType>({
	setViewHolidayTarget: () => {},
	setCreateScheduleTarget: () => {},
	setViewScheduleTarget: () => {},
});

export default function Calendar() {
	const [dateState, setDateState] = useState<Date>(new Date());

	// model states
	const [viewHolidayTarget, setViewHolidayTarget] = useState<Holiday | undefined>(undefined);
	const [createScheduleTarget, setCreateScheduleTarget] = useState<Date | undefined>(undefined);
	const [viewScheduleTarget, setViewScheduleTarget] = useState<Schedule | undefined>(undefined);
	const [editScheduleTarget, setEditScheduleTarget] = useState<Schedule | undefined>(undefined);
	const [deleteScheduleTarget, setDeleteScheduleTarget] = useState<Schedule | undefined>(undefined);

	return (
		<div>
			<CalendarHeader
				dateState={dateState}
				setDateState={setDateState}
				weekOrMonth="month"
			/>
			<ModalContext.Provider
				value={{ setViewHolidayTarget, setCreateScheduleTarget, setViewScheduleTarget }}
			>
				<CalendarPageCalendar dateState={dateState} />
				<div className="pt-8 text-center">
					<AddScheduleButton setCreateDate={setCreateScheduleTarget} />
				</div>
			</ModalContext.Provider>

			<HolidayModal
				holiday={viewHolidayTarget}
				setHoliday={setViewHolidayTarget}
			/>
			<CreateModal
				createDate={createScheduleTarget}
				setCreateDate={setCreateScheduleTarget}
			/>
			<ScheduleDetailModal
				schedule={viewScheduleTarget}
				setSchedule={setViewScheduleTarget}
				setDeleteTarget={setDeleteScheduleTarget}
				setEditTarget={setEditScheduleTarget}
			/>
			<DeleteConfirmationModal
				deleteTarget={deleteScheduleTarget}
				setDeleteTarget={setDeleteScheduleTarget}
				setSchedule={setViewScheduleTarget}
			/>
			<EditModal
				editTarget={editScheduleTarget}
				setEditTarget={setEditScheduleTarget}
				setSchedule={setViewScheduleTarget}
			/>
		</div>
	);
}
