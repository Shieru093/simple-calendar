'use client';

export default function CalendarController({ action }: { action: Function }) {
	return (
		<div className="flex justify-around py-2 text-gray-50">
			<button
				className=""
				onClick={() => {
					action({ type: 'prev' });
				}}
			>
				prev
			</button>
			<button
				onClick={() => {
					action({ type: 'reset' });
				}}
			>
				reset
			</button>
			<button
				onClick={() => {
					action({ type: 'next' });
				}}
			>
				next
			</button>
		</div>
	);
}
