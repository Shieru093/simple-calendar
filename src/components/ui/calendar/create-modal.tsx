import CreateScheduleForm from './create-schedule-form';
import { Modal } from './modal';
export function CreateModal({ param }: { param: Date | undefined }) {
	if (param) {
		return (
			<Modal>
				<CreateScheduleForm paramDate={param} />
			</Modal>
		);
	} else {
		<></>;
	}
}
