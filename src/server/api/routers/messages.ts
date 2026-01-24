import Elysia from "elysia";
import { userService } from "./user";
import { db } from "@/server/db";
import { isNull } from "drizzle-orm";
import { messagesTable } from "@/server/db/schema";
import { messagesSchema } from "@/lib/shared/schemas/messages";

export const messagesRouter = new Elysia({ prefix: '/messages'})
  .use(userService)
  .get('/', async () => {
    return await db.query.messagesTable.findMany({
      where: isNull(messagesTable.deletedAt),
      orderBy: (forms, { desc }) => [desc(messagesTable.createdAt)],
    });
  }, {
    hasRole: 'admin'
  })
  .post('/', async ({body}) => {
    const result = await db.insert(messagesTable).values(body);
    return result;
  }, {
    body: messagesSchema
  })