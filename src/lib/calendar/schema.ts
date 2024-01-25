import { z } from 'zod';

export const formSchema = z.object({
	eventTitle: z
		.string({ required_error: 'タイトルは必須です' })
		.max(20, { message: '20字以内に収めてください' }),
	eventDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	memo: z.string().max(150, { message: '150字以内に収めてください' }),
});

/** フォームのデータを格納する型 */
export type FormSchemaType = z.infer<typeof formSchema>;
