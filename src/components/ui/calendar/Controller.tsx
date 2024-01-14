'use client';

import { ActionType, CalendarAction } from '@/lib/calendar/types';
import ControlButton from '@/components/ui/calendar/control-button';

export default function CalendarController({
	actions,
	actionType,
}: {
	actions: ((acType: ActionType) => void)[];
	actionType: ActionType;
}) {
	return (
		<div className="flex justify-around py-2 text-gray-50">
			{actions.map((action, index) => (
				<ControlButton
					key={index}
					action={action}
					actionType={actionType}
				/>
			))}
		</div>
	);
}
