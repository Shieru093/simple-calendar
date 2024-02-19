import ModalBase from '@/components/ui/calendar/modals/modal-base';
import { ModalActionButton } from '@/components/ui/calendar/buttons';
import type { Holiday } from '@/lib/calendar/types';

export default function HolidayModal({
	holiday,
	setHoliday,
}: {
	holiday: Holiday | undefined;
	setHoliday: (holiday: Holiday | undefined) => void;
}) {
	if (holiday) {
		return (
			<ModalBase setState={setHoliday}>
				<div className="grid px-4">
					<div className="text-right">
						<ModalActionButton
							action={() => {
								setHoliday(undefined);
							}}
							color={'gray'}
							text={'閉じる'}
						/>
					</div>
					<div className="grid text-gray-50">
						<div className="px-4 py-2 text-4xl">{holiday.name}</div>
						<div className="text-xl">{`${holiday.date.getFullYear()}/${
							holiday.date.getMonth() + 1
						}/${holiday.date.getDate()}`}</div>
						<div>{holiday.type}</div>
					</div>
				</div>
			</ModalBase>
		);
	} else {
		return <></>;
	}
}
