import { Elysia } from 'elysia';
import { treaty } from '@elysiajs/eden';
import { userRouter } from './routers/user';
import { postsRouter } from './routers/posts';
import { commentsRouter } from './routers/comments';
import { messagesRouter } from './routers/messages';
import { sidebarRouter } from './routers/sidebar';
import { worksRouter } from './routers/works';

export const app = new Elysia({
  name: 'app',
  prefix: '/api',
})
  .get('/', () => 'Hello World!')
  .use(userRouter)
  .use(postsRouter)
  .use(commentsRouter)
  .use(messagesRouter)
  .use(sidebarRouter)
  .use(worksRouter);

export type App = typeof app;
export const api = treaty(app).api;