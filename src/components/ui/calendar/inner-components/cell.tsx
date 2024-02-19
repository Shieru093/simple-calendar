'use client';

import clsx from 'clsx';
import { useContext } from 'react';
import { ModalContext } from '@/components/page/calendar';
import type { CalendarState, Holiday, Schedule } from '@/lib/calendar/types';

export default function CalendarCell({ dateData }: { dateData: CalendarState }) {
	const nowDate = new Date();

	// モーダルの開閉関数
	const { setViewHolidayTarget, setCreateScheduleTarget, setViewScheduleTarget } =
		useContext(ModalContext);

	// スケジュールが複数であればそのまま格納、
	// 一つだけなら配列にして格納
	// なければから配列を格納
	const schedules: Schedule[] = Array.isArray(dateData.schedule)
		? dateData.schedule
		: dateData.schedule
		? [dateData.schedule]
		: [];

	return (
		<div
			onClick={() => {
				setCreateScheduleTarget(dateData.date);
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
					setViewHolidayTarget(dateData.holiday);
				}}
				className="bg-green-600 overflow-hidden px-2 rounded-lg text-[min(2vw,14px)] text-center text-ellipsis text-gray-50 whitespace-nowrap"
			>
				{dateData.holiday?.name}
			</div>
			{schedules.map((schedule, index) => {
				return (
					<div
						key={index}
						onClick={(e) => {
							e.stopPropagation();
							setViewScheduleTarget(schedule);
						}}
						className="bg-yellow-500 overflow-hidden px-2 rounded-lg text-[min(2vw,14px)] text-center text-ellipsis text-gray-50 whitespace-nowrap"
					>
						{schedule.eventTitle}
					</div>
				);
			})}
		</div>
	);
}
