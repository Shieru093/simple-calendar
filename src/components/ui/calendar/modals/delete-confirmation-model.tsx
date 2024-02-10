import { Schedule } from '@/lib/calendar/types';
import { ModalBase } from './modal-base';
import { ModelActionButton } from '../buttons';
import { deleteSchedule } from '@/lib/calendar/actions';

export function DeleteConfirmationModal({
	deleteTarget,
	setDeleteTarget,
	setSchedule,
}: {
	deleteTarget?: Schedule;
	setDeleteTarget: Function;
	setSchedule: Function;
}) {
	if (deleteTarget) {
		return (
			<ModalBase setState={setDeleteTarget}>
				<div className="grid text-gray-50 border-red-900">
					<div className="pb-4 text-center text-lg">削除してもよいですか？</div>
					<div className="gap-6 grid grid-cols-2">
						<ModelActionButton
							action={() => {
								deleteSchedule(deleteTarget.id);
								setDeleteTarget(undefined);
							}}
							color="red"
							text="削除"
						/>
						<ModelActionButton
							action={() => {
								setDeleteTarget(undefined);
								setSchedule(deleteTarget);
							}}
							color="gray"
							text="キャンセル"
						/>
					</div>
				</div>
			</ModalBase>
		);
	} else {
		return <></>;
	}
}
