import { ActionType, CalendarAction } from '@/lib/calendar/types';

export default function ControlButton({
	action,
	actionType,
}: {
	action: (acType: ActionType) => void;
	actionType: ActionType;
}) {
	return (
		<button
			onClick={() => {
				action(actionType);
			}}
		>
			{actionType.type}
		</button>
	);
}
