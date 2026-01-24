import { z } from 'zod/v4';

export const postsSchema = z.object({
  name: z.string({ message: 'Укажите название' }),
  content: z.string({ message: 'Текст не может быть пустым' }),
  theme: z.string({ message: 'Укажите тему' }),
  img: z.string().optional(),
});
