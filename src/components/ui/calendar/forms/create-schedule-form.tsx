'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertSchedule } from '@/lib/calendar/actions';
import { type FormSchemaType, formSchema } from '@/lib/calendar/schema';
import { ModalActionButton } from '@/components/ui/calendar/buttons';

const labelStyle = 'pt-3 text-2xl text-left text-gray-50';

export default function CreateScheduleForm({
	createDate,
	setCreateDate,
}: {
	createDate: Date;
	setCreateDate: (date: Date | undefined) => void;
}) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			eventTitle: '',
			eventDate: `${createDate.getFullYear().toString()}-${(createDate.getMonth() + 1)
				.toString()
				.padStart(2, '0')}-${createDate.getDate().toString().padStart(2, '0')}`,
			memo: '',
		},
	});

	const router = useRouter();

	const onSubmit: SubmitHandler<FormSchemaType> = async (data: FormSchemaType) => {
		if (await insertSchedule(data)) {
			setCreateDate(undefined);
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
					<ModalActionButton
						action={() => {
							setCreateDate(undefined);
						}}
						color={'gray'}
						text={'閉じる'}
					/>
				</div>
				<div className="pb-4 pt-2 text-4xl text-white">予定の追加</div>
				<section className="grid">
					<label
						htmlFor="title"
						className={labelStyle}
					>
						タイトル
					</label>
					<input
						type="text"
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
						追加
					</button>
				</div>
			</div>
		</form>
	);
}
