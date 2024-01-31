import CreateScheduleForm from '@/components/ui/calendar/create-schedule-form';
import { Modal } from '@/components/ui/calendar/modal';

export function CreateModal({ param }: { param: Date | undefined }) {
	if (param) {
		return (
			<Modal>
				<CreateScheduleForm paramDate={param} />
			</Modal>
		);
	} else {
		return <></>;
	}
}
