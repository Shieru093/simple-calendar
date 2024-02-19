import EditScheduleForm from '@/components/ui/calendar/forms/edit-schedule-form';
import ModalBase from '@/components/ui/calendar/modals/modal-base';
import type { Schedule } from '@/lib/calendar/types';

export default function EditModal({
	editTarget,
	setEditTarget,
	setSchedule,
}: {
	editTarget: Schedule | undefined;
	setEditTarget: (schedule: Schedule | undefined) => void;
	setSchedule: (schedule: Schedule | undefined) => void;
}) {
	if (editTarget) {
		return (
			<ModalBase setState={setEditTarget}>
				<EditScheduleForm
					schedule={editTarget}
					setEditTarget={setEditTarget}
					setSchedule={setSchedule}
				/>
			</ModalBase>
		);
	} else {
		return <></>;
	}
}
