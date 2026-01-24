import { z } from 'zod/v4';

export const commentsSchema = z.object({
  content: z.string({ message: 'Комментарий не может быть пустым' })
});
