import {
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
export * from './auth-schema';

const commonFields = {
  id: varchar('id', { length: 255 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  createdAt: timestamp('created_at').defaultNow(),
  deletedAt: timestamp('deleted_at'),
};

export const postsTable = pgTable('posts', {
  ...commonFields,
  name: varchar('name', { length: 120 }).notNull(),
  contentBeforeImg: text('contentBeforeImg'),
  contentAfterImg: text('contentAfterImg'),
  theme: text('theme').notNull(),
  img: varchar('img', { length: 50 }),
});

export const commentsTable = pgTable('comments', {
  ...commonFields,
  content: text('content').notNull(),
  authorId: text('author_id').notNull(),
  postId: varchar('post_id', { length: 255 })
    .notNull()
    .references(() => postsTable.id, { onDelete: 'cascade' }),
});

export const messagesTable = pgTable('messages', {
  ...commonFields,
  name: varchar('name', { length: 30 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  content: text('content').notNull(),
});

export const sidebarTable = pgTable('sidebar', {
  ...commonFields,
  background: varchar('background', { length: 50 }),
  img: varchar('img', { length: 50 }),
  name: varchar('name', { length: 30 }).notNull(),
  desc: varchar('desc', { length: 30 }).notNull(),
  content: text('content').notNull(),
});

export const socialLinks = pgTable('social_links', {
  ...commonFields,
  name: varchar('name', { length: 30 }).notNull(),
  url: text('url').notNull(),
  icon: varchar('icon', { length: 50 }),
});

export const worksTable = pgTable('works', {
  ...commonFields,
  img: varchar('img', { length: 50 }),
  name: varchar('name', { length: 30 }).notNull(),
  content: text('content').notNull(),
  tag1: varchar('tag1', { length: 30 }),
  tag2: varchar('tag2', { length: 30 }),
  tag3: varchar('tag3', { length: 30 }),
});
