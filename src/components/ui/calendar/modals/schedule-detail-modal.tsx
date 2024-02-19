import ModalBase from '@/components/ui/calendar/modals/modal-base';
import { ModalActionButton } from '@/components/ui/calendar/buttons';
import type { Schedule } from '@/lib/calendar/types';

export default function ScheduleDetailModal({
	schedule,
	setSchedule,
	setDeleteTarget,
	setEditTarget,
}: {
	schedule: Schedule | undefined;
	setSchedule: (schedule: Schedule | undefined) => void;
	setDeleteTarget: (schedule: Schedule | undefined) => void;
	setEditTarget: (schedule: Schedule | undefined) => void;
}) {
	if (schedule) {
		return (
			<ModalBase setState={setSchedule}>
				<div className="grid px-4">
					<div className="text-right">
						<ModalActionButton
							action={() => {
								setSchedule(undefined);
							}}
							color={'gray'}
							text={'閉じる'}
						/>
					</div>
					<div className="grid text-gray-50">
						<div className="px-4 py-2 text-4xl">{schedule.eventTitle}</div>
						<div className="text-xl">{`${schedule.eventDate.getFullYear()}/${
							schedule.eventDate.getMonth() + 1
						}/${schedule.eventDate.getDate()}`}</div>
						<div>{schedule.memo}</div>
					</div>
					<div className="gap-6 grid grid-cols-2 pt-3 text-gray-50">
						<ModalActionButton
							action={() => {
								setSchedule(undefined);
								setDeleteTarget(schedule);
							}}
							color="red"
							text="削除"
						/>
						<ModalActionButton
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
