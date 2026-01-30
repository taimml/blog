import { z } from 'zod/v4';

export const worksSchema = z.object({
  img: z.string({ message: 'Вставьте изображение' }),
  name: z.string({ message: 'Название обязательно' }),
  content: z.string({ message: 'Текст не может быть пустым' }),
  tag1: z.string().optional(),
  tag2: z.string().optional(),
  tag3: z.string().optional(),
});
