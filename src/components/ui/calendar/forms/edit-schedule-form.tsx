'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { type FormSchemaType, formSchema } from '@/lib/calendar/schema';
import { ModalActionButton } from '@/components/ui/calendar/buttons';
import { updateSchedule } from '@/lib/calendar/actions';
import type { Schedule } from '@/lib/calendar/types';

const labelStyle = 'pt-3 text-2xl text-left text-gray-50';

export default function EditScheduleForm({
	schedule,
	setEditTarget,
	setSchedule,
}: {
	schedule: Schedule;
	setEditTarget: Function;
	setSchedule: Function;
}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			eventTitle: schedule.eventTitle,
			eventDate: `${schedule.eventDate.getFullYear().toString()}-${(
				schedule.eventDate.getMonth() + 1
			)
				.toString()
				.padStart(2, '0')}-${schedule.eventDate.getDate().toString().padStart(2, '0')}`,
			memo: schedule.memo,
		},
	});
	const router = useRouter();

	const onSubmit: SubmitHandler<FormSchemaType> = async (data: FormSchemaType) => {
		if (await updateSchedule(schedule.id, data)) {
			setEditTarget(undefined);
			router.refresh();
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="text-center"
		>
			<div className="px-3  grid">
				<div className="text-right">
					{/* <ModalCloseButton setModalParam={setSchedule} /> */}
					<ModalActionButton
						action={() => {
							setEditTarget(undefined);
							setSchedule(schedule);
						}}
						color={'gray'}
						text={'戻る'}
					/>
				</div>
				<div className="pb-4 pt-2 text-4xl text-white">予定の編集</div>
				<section className="grid">
					<label
						htmlFor="title"
						className={labelStyle}
					>
						タイトル
					</label>
					<input
						type="text"
						id="title"
						{...register('eventTitle')}
						placeholder="タイトル"
					/>
					{errors.eventTitle && <p>{errors.eventTitle.message}</p>}
				</section>
				<section className="grid">
					<label
						htmlFor="eventDate"
						className={labelStyle}
					>
						日付
					</label>
					<input
						type="date"
						id="eventDate"
						{...register('eventDate')}
					/>
					{errors.eventDate && <p>{errors.eventDate.message}</p>}
				</section>
				<section className="grid">
					<label
						htmlFor="memo"
						className={labelStyle}
					>
						メモ
					</label>
					<textarea
						id="memo"
						rows={4}
						cols={30}
						{...register('memo')}
						placeholder="メモ"
					/>
					{errors.memo && <p>{errors.memo.message}</p>}
				</section>
				<div className="py-3 text-center">
					<button
						type="submit"
						className="bg-green-600 px-8 rounded-lg text-gray-50"
					>
						上書き保存
					</button>
				</div>
			</div>
		</form>
	);
}
