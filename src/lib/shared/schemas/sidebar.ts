import { z } from 'zod/v4';

export const sidebarSchema = z.object({
  background: z.string().optional(),
  img: z.string().optional(),
  name: z.string({ message: 'Имя обязательно' }),
  desc: z.string({ message: 'Укажите описание' }),
  content: z.string({ message: 'Текст не может быть пустым' }),
});
