import { CalendarAction } from '@/lib/calendar/types';

export default function ControlButton({
	action,
	actionType,
}: {
	action: Function;
	actionType: CalendarAction;
}) {
	return (
		<button
			onClick={() => {
				action({ type: actionType.type });
			}}
		>
			{actionType.type}
		</button>
	);
}
