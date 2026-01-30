import Elysia from 'elysia';
import { userService } from './user';
import { worksTable } from '@/server/db/schema';
import { db } from '@/server/db';
import { worksSchema } from '@/lib/shared/schemas/works';
import { eq } from 'drizzle-orm';

export const worksRouter = new Elysia({ prefix: '/works' })
  .use(userService)
  .get('/', async () => {
    return await db.select().from(worksTable);
  })
  .post(
    '/',
    async ({ body }) => {
      const newWork = await db.insert(worksTable).values(body).returning();
      return { success: true, data: newWork };
    },
    {
      body: worksSchema,
      // hasRole: 'admin',
    },
  )
  // .put('/:id', async({params, body}) => {
  //   const {id} = params;
  //   const {img, name, content, tag1, tag2, tag3} = body;

  //   const [updatedWork] = await db
  //     .update(worksTable).set({img, name, content, tag1, tag2, tag3}).where(eq(worksTable.id, id))
  // });
