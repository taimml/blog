import { eq, desc, and } from 'drizzle-orm';
import { db } from '../../db';
import { commentsTable } from '../../db/schema';
import Elysia from 'elysia';
import { z } from 'zod/v4';
import { userService } from './user';

export const commentsRouter = new Elysia({ prefix: '/comments' })
  .use(userService)
  .get(
    '/post/:postId',
    async ({ params }) => {
      const comments = await db
        .select()
        .from(commentsTable)
        .where(eq(commentsTable.postId, params.postId))
        .orderBy(desc(commentsTable.createdAt));
      return comments;
    },
    {
      params: z.object({
        postId: z.uuid(),
      }),
    },
  )
  // .post('/', async ({body, user}) => {
  //   if(!user) {
  //     return{
  //       success: false,
  //       error: 'Необходимо авторизоваться'
  //     };
  //   }
  //   const [newComment] = await db
  //     .insert(commentsTable).values({...body, authorId:user.id})
  //     .returning();

  //   return {
  //     success: true,
  //     data: newComment
  //   };
  // }, {
  //   body: z.object({
  //     content: z.string().min(1).max(2000),
  //     postId: z.string(),
  //   }),
  // });
  .delete(
    '/:id',
    async ({ params }) => {
      await db.delete(commentsTable).where(eq(commentsTable.id, params.id));
    },
    {
      params: z.object({ id: z.string() }),
      hasRole: 'admin',
    },
  );
