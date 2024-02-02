-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `users` (
	`id` text PRIMARY KEY
);
--> statement-breakpoint
CREATE TABLE `recipes` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`user_id` text,
	`title` text NOT NULL,
	`description` text,
	`prep_time` integer,
	`cook_time` integer,
	`total_time` integer,
	`servings` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `ingredients` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `instructions` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`recipe_id` integer,
	`title` text NOT NULL,
	`description` text,
	FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `instruction_steps` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`instruction_id` integer,
	`step_number` integer NOT NULL,
	`text` text NOT NULL,
	FOREIGN KEY (`instruction_id`) REFERENCES `instructions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `ratings` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`recipe_id` integer,
	`user_id` text,
	`rating` integer,
	`comment` text,
	`date_added` numeric DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `lists` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`user_id` text,
	`name` text NOT NULL,
	`description` text,
	`is_shareable` numeric NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `recipe_lists` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`recipe_id` integer,
	`list_id` integer,
	FOREIGN KEY (`list_id`) REFERENCES `lists`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `shared_recipes` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`recipe_id` integer,
	`owner_user_id` text,
	`target_user_id` text,
	`shared_on` numeric DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`target_user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`owner_user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `shared_lists` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`list_id` integer,
	`owner_user_id` text,
	`target_user_id` text,
	`shared_on` numeric DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`target_user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`owner_user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`list_id`) REFERENCES `lists`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `recipe_images` (
	`image_id` integer PRIMARY KEY AUTOINCREMENT,
	`recipe_id` integer,
	`image_path` text NOT NULL,
	`description` text,
	FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON UPDATE no action ON DELETE no action
);

*/