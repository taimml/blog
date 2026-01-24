CREATE TABLE "sidebar" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	"background" varchar(50),
	"img" varchar(50),
	"name" varchar(30) NOT NULL,
	"desc" varchar(30) NOT NULL,
	"content" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "social_links" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"deleted_at" timestamp,
	"name" varchar(30) NOT NULL,
	"url" text NOT NULL,
	"icon" varchar(50)
);
