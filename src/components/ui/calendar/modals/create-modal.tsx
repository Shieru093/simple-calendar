import CreateScheduleForm from '@/components/ui/calendar/forms/create-schedule-form';
import ModalBase from '@/components/ui/calendar/modals/modal-base';

export default function CreateModal({
	createDate,
	setCreateDate,
}: {
	createDate: Date | undefined;
	setCreateDate: (date: Date | undefined) => void;
}) {
	if (createDate) {
		return (
			<ModalBase setState={setCreateDate}>
				<CreateScheduleForm
					createDate={createDate}
					setCreateDate={setCreateDate}
				/>
			</ModalBase>
		);
	} else {
		return <></>;
	}
}
