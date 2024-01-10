'use client';

import { CalendarAction } from '@/lib/calendar/types';
import ControlButton from '@/components/ui/calendar/control-button';
import { useEffect } from 'react';
import { fetchJapaneseHoliday } from '@/lib/calendar/date';

export default function CalendarController({ action }: { action: Function }) {
	const actions: CalendarAction[] = [{ type: 'prev' }, { type: 'reset' }, { type: 'next' }];
	useEffect(() => {
		const fetchHolidays = async () => {
			const holidays = await fetchJapaneseHoliday(
				new Date().getFullYear(),
				new Date().getMonth() + 1
			);
			console.log(holidays);
		};

		fetchHolidays();
	}, []);

	return (
		<div className="flex justify-around py-2 text-gray-50">
			{actions.map((acType, index) => (
				<ControlButton
					key={index}
					action={action}
					actionType={acType}
				/>
			))}
		</div>
	);
}
