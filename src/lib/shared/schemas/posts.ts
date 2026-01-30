import { z } from 'zod/v4';

export const postsSchema = z.object({
  name: z.string({ message: 'Укажите название' }),
  contentBeforeImg: z.string({ message: 'Текст не может быть пустым' }).optional(),
  contentAfterImg: z.string({ message: 'Текст не может быть пустым' }).optional(),
  theme: z.string({ message: 'Укажите тему' }),
  img: z.string().optional(),
});
