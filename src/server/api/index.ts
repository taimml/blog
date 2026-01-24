import { Elysia } from 'elysia';
import { treaty } from '@elysiajs/eden';
import { userRouter } from './routers/user';
import { postsRouter } from './routers/posts';
import { commentsRouter } from './routers/comments';
import { messagesRouter } from './routers/messages';
import { sidebarRouter } from './routers/sidebar';
import { headers as getNextHeaders } from "next/headers";

export const app = new Elysia({
  name: 'app',
  prefix: '/api',
})
.get('/', () => 'Hello World!')
  .use(userRouter)
  .use(postsRouter)
  .use(commentsRouter)
  .use(messagesRouter)
  .use(sidebarRouter);

export type App = typeof app;
export const api = treaty(app).api;

export async function headers(): Promise<Record<string, string | undefined>> {
  const h = await getNextHeaders();
  const headers: Record<string, string | undefined> = {};
  for (const [key, value] of h.entries()) {
    headers[key] = value;
  }
  return headers;
}
