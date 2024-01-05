'use client';

import { CalendarAction } from '@/lib/calendar/types';
import ControlButton from '@/components/ui/calendar/ControlButton';

export default function CalendarController({ action }: { action: Function }) {
	const actions: CalendarAction[] = [{ type: 'prev' }, { type: 'reset' }, { type: 'next' }];

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
