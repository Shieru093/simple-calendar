import CalendarHeader from '@/components/ui/calendar/CalendarHeader';
import CalendarTable from '@/components/ui/calendar/CalendarTable';

export default function Calendar() {
	return (
		<div>
			<div>
				<CalendarHeader />
			</div>
			<div>
				<CalendarTable />
			</div>
		</div>
	);
}
