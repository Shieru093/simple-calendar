import { ModalContext } from '@/components/page/calendar';
import CreateScheduleForm from '@/components/ui/calendar/forms/create-schedule-form';
import { ModalBase } from '@/components/ui/calendar/modals/modal-base';
import { useContext } from 'react';

export function CreateModal({ param }: { param: Date | undefined }) {
	const setParam = useContext(ModalContext);

	if (param) {
		return (
			<ModalBase setState={setParam}>
				<CreateScheduleForm paramDate={param} />
			</ModalBase>
		);
	} else {
		return <></>;
	}
}
