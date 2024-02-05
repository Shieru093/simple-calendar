'use client';

import clsx from 'clsx';
import { useContext, useState } from 'react';
import { ModalContext } from '@/components/page/calendar';
import type { CalendarState, Schedule } from '@/lib/calendar/types';
import { ScheduleDetailModal } from './schedule-detail-modal';

export default function CalendarCell({ dateData }: { dateData: CalendarState }) {
	const nowDate = new Date();

	const [schedule, setSchedule] = useState<Schedule | undefined>(undefined);
	const setModalParam = useContext(ModalContext);
	const schedules: Schedule[] = Array.isArray(dateData.schedule)
		? dateData.schedule
		: dateData.schedule
		? [dateData.schedule]
		: [];

	return (
		<div
			onClick={() => {
				setModalParam(dateData.date);
			}}
			className={clsx('border pt-1 pb-8 px-2', {
				'bg-slate-700': dateData.date.toDateString() === nowDate.toDateString(),
			})}
		>
			<div
				className={clsx('text-center', {
					'text-red-600': dateData.date.getDay() === 0 || dateData.holiday,
					'text-blue-600': dateData.date.getDay() === 6,
					'text-gray-50': dateData.date.getDay() > 0 && dateData.date.getDay() < 6,
				})}
			>
				{dateData.date.getDate()}
			</div>
			<div
				onClick={(e) => {
					e.stopPropagation();
					console.log(dateData.holiday?.type);
				}}
				className="bg-green-600 overflow-hidden px-2 rounded-lg text-[min(2vw,14px)] text-center text-ellipsis text-gray-50 whitespace-nowrap"
			>
				{dateData.holiday?.name}
			</div>
			{schedules.map((schedule, index) => (
				<div
					key={index}
					onClick={(e) => {
						e.stopPropagation();
						// alert(schedule.eventTitle);
						setSchedule(schedule);
						return;
					}}
					className="bg-yellow-500 overflow-hidden px-2 rounded-lg text-[min(2vw,14px)] text-center text-ellipsis text-gray-50 whitespace-nowrap"
				>
					{schedule.eventTitle}
				</div>
			))}
			<ScheduleDetailModal
				schedule={schedule}
				setSchedule={setSchedule}
			/>
		</div>
	);
}
