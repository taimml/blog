import Elysia from 'elysia';
import { userService } from './user';
import { db } from '@/server/db';
import { postsTable } from '@/server/db/schema';
import { eq, desc, and } from 'drizzle-orm';
import { success } from 'zod';
import { postsSchema } from '@/lib/shared/schemas/posts';
import { z } from 'zod/v4';

export const postsRouter = new Elysia({ prefix: '/posts' })
  .use(userService)
  .get('/', async () => {
    return await db
      .select()
      .from(postsTable)
      .orderBy(desc(postsTable.createdAt));
  })
  .get('/:id', async ({ params }) => {
    return await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, params.id))
      .limit(1);
  })
  .post(
    '/',
    async ({ body }) => {
      const newPost = await db.insert(postsTable).values(body).returning();
      return { success: true, data: newPost };
    },
    {
      body: postsSchema,
      // hasRole: 'admin',
    },
  )
  .put(
    '/:id',
    async ({ params, body }) => {
      const { id } = params;
      const { name, contentBeforeImg, contentAfterImg, theme, img } = body;

      const [updatedPost] = await db
        .update(postsTable)
        .set({
          name,
          contentBeforeImg,
          contentAfterImg,
          theme,
          img
        })
        .where(eq(postsTable.id, id))
        .returning();

      return {
        success: true,
        data: updatedPost,
      };
    },
    {
      params: z.object({
        id: z.string(),
      }),
      body: postsSchema,
      // hasRole: 'admin',
    },
  )
  .delete(
    '/:id',
    async ({ params }) => {
      await db.delete(postsTable).where(eq(postsTable.id, params.id));
    },
    {
      params: z.object({ id: z.string() }),
      // hasRole: 'admin',
    },
  );
