'use client';

import type { CalendarState } from '@/lib/calendar/types';
import clsx from 'clsx';
import { useContext } from 'react';
import { ModalContext } from './calendar-page-calendar';

export default function CalendarCell({ dateData }: { dateData: CalendarState }) {
	const setModalParam = useContext(ModalContext);
	if (dateData.holiday) {
		console.log('call');
	}
	return (
		<button
			onClick={() => {
				console.log('clicked');
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
			<div className="bg-green-600 overflow-hidden px-2 rounded-lg text-[min(2vw,14px)] text-center text-ellipsis text-gray-50 whitespace-nowrap">
				{dateData.holiday?.name}
			</div>
		</button>
	);
}
