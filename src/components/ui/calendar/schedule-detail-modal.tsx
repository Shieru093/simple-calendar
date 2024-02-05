import { ModalBase } from '@/components/ui/calendar/modal-base';
import { Schedule } from '@/lib/calendar/types';
import { ModalCloseButton } from './buttons';

export function ScheduleDetailModal({
	schedule,
	setSchedule,
}: {
	schedule: Schedule | undefined;
	setSchedule: Function;
}) {
	if (schedule) {
		return (
			<ModalBase setState={setSchedule}>
				<div className="text-right">
					<ModalCloseButton setModalParam={setSchedule} />
				</div>
				<div className="text-gray-50">
					<div className="px-4 py-2 text-3xl">{schedule.eventTitle}</div>
					<div className="text-xl">{`${schedule.eventDate.getFullYear()}/${
						schedule.eventDate.getMonth() + 1
					}/${schedule.eventDate.getDate()}`}</div>
					<div>{schedule.memo}</div>
				</div>
				<button type="button">削除</button>
				<button type="button">編集</button>
			</ModalBase>
		);
	} else {
		return <></>;
	}
}
