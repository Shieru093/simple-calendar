import { ModalBase } from '@/components/ui/calendar/modals/modal-base';
import { Schedule } from '@/lib/calendar/types';
import { ModalCloseButton, ModelActionButton } from '../buttons';

export function ScheduleDetailModal({
	schedule,
	setSchedule,
	setDeleteTarget,
	setEditTarget,
}: {
	schedule: Schedule | undefined;
	setSchedule: Function;
	setDeleteTarget: Function;
	setEditTarget: Function;
}) {
	if (schedule) {
		return (
			<ModalBase setState={setSchedule}>
				<div className="grid px-4">
					<div className="text-right">
						<ModalCloseButton setModalParam={setSchedule} />
					</div>
					<div className="grid text-gray-50">
						<div className="px-4 py-2 text-4xl">{schedule.eventTitle}</div>
						<div className="text-xl">{`${schedule.eventDate.getFullYear()}/${
							schedule.eventDate.getMonth() + 1
						}/${schedule.eventDate.getDate()}`}</div>
						<div>{schedule.memo}</div>
					</div>
					<div className="gap-6 grid grid-cols-2 pt-3 text-gray-50">
						<ModelActionButton
							action={() => {
								setSchedule(undefined);
								setDeleteTarget(schedule);
							}}
							color="red"
							text="削除"
						/>
						<ModelActionButton
							action={() => {
								setSchedule(undefined);
								setEditTarget(schedule);
							}}
							color="blue"
							text="編集"
						/>
					</div>
				</div>
			</ModalBase>
		);
	} else {
		return <></>;
	}
}
