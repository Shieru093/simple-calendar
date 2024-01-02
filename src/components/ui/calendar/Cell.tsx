'use client';

import { CalendarState } from '@/lib/calendar/types';
import clsx from 'clsx';

export default function CalendarCell({ date }: CalendarState) {
	return (
		<div className="border pt-1 pb-8">
			<div
				className={clsx('text-center', {
					'text-red-600': date.getDay() === 0,
					'text-blue-600': date.getDay() === 6,
					'text-gray-50': date.getDay() > 0 && date.getDay() < 6,
				})}
			>
				{date.getDate()}
			</div>
		</div>
	);
}
