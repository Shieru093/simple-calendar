'use client';

import clsx from 'clsx';
import { useContext } from 'react';
import { ModalContext } from '@/components/page/calendar';
import type { CalendarState, Schedule } from '@/lib/calendar/types';

export default function CalendarCell({ dateData }: { dateData: CalendarState }) {
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
			className="border pt-1 pb-8 px-5"
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
					alert(dateData.holiday?.type);
				}}
				className="bg-green-600 overflow-hidden px-2 rounded-lg text-[min(2vw,14px)] text-center text-ellipsis text-gray-50 whitespace-nowrap"
			>
				{dateData.holiday?.name}
			</div>
			{schedules.map((schedule, index) => (
				<div
					key={index}
					className="bg-green-600 overflow-hidden px-2 rounded-lg text-[min(2vw,14px)] text-center text-ellipsis text-gray-50 whitespace-nowrap"
				>
					{schedule.eventTitle}
				</div>
			))}
		</div>
	);
}
