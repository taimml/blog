import { z } from 'zod/v4';

export const messagesSchema = z.object({
  name: z.string({ message: 'Укажите название' }),
  email: z.email({ message: 'Укажите почту'}),
  content: z.string({ message: 'Комментарий не может быть пустым' }),
});
