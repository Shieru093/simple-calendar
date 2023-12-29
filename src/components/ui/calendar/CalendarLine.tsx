import CalenderCell from '@/components/ui/calendar/CalendarCell';

export default async function CalendarLine({ date }: { date?: Date }) {
	const currentWeek: Date = date || new Date();
	currentWeek.setDate(currentWeek.getDate() - currentWeek.getDay());

	const week = [];
	// １週間分のループ
	for (let i = 0; i <= 6; i++) {
		week.push(new Date(currentWeek)); // Dateインスタンスを追加
		// 次の日をセット
		currentWeek.setDate(currentWeek.getDate() + 1);
	}

	return (
		<div className="grid grid-cols-7">
			{week.map((d) => {
				return (
					<CalenderCell
						key={d.getDate()}
						date={d}
					/>
				);
			})}
		</div>
	);
}
