'use client';

import ModalBase from '@/components/ui/calendar/modals/modal-base';
import { deleteSchedule } from '@/lib/calendar/actions';
import { ModalActionButton } from '@/components/ui/calendar/buttons';
import type { Schedule } from '@/lib/calendar/types';
import { useRouter } from 'next/navigation';

export default function DeleteConfirmationModal({
	deleteTarget,
	setDeleteTarget,
	setSchedule,
}: {
	deleteTarget: Schedule | undefined;
	setDeleteTarget: (schedule: Schedule | undefined) => void;
	setSchedule: (schedule: Schedule | undefined) => void;
}) {
	const router = useRouter();

	if (deleteTarget) {
		return (
			<ModalBase setState={setDeleteTarget}>
				<div className="grid text-gray-50 border-red-900">
					<div className="pb-4 text-center text-lg">
						{deleteTarget.eventTitle} を削除してもよいですか？
					</div>
					<div className="gap-6 grid grid-cols-2">
						<ModalActionButton
							action={() => {
								deleteSchedule(deleteTarget.id);
								setDeleteTarget(undefined);
								router.refresh();
							}}
							color="red"
							text="削除"
						/>
						<ModalActionButton
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
