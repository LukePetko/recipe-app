import { sqliteTable, AnySQLiteColumn, text, foreignKey, integer, numeric } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const users = sqliteTable("users", {
	id: text("id").primaryKey(),
});

export const recipes = sqliteTable("recipes", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	userId: text("user_id").references(() => users.id),
	title: text("title").notNull(),
	description: text("description"),
	prepTime: integer("prep_time"),
	cookTime: integer("cook_time"),
	totalTime: integer("total_time"),
	servings: integer("servings"),
	updatedAt: numeric("updated_at"),
	createdAt: numeric("created_at"),
});

export const ingredients = sqliteTable("ingredients", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	description: text("description"),
});

export const instructions = sqliteTable("instructions", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	recipeId: integer("recipe_id").references(() => recipes.id),
	title: text("title").notNull(),
	description: text("description"),
});

export const instructionSteps = sqliteTable("instruction_steps", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	instructionId: integer("instruction_id").references(() => instructions.id),
	stepNumber: integer("step_number").notNull(),
	text: text("text").notNull(),
});

export const ratings = sqliteTable("ratings", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	recipeId: integer("recipe_id").references(() => recipes.id),
	userId: text("user_id").references(() => users.id),
	rating: integer("rating"),
	comment: text("comment"),
	dateAdded: numeric("date_added").default(sql`(CURRENT_TIMESTAMP)`),
});

export const lists = sqliteTable("lists", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	userId: text("user_id").references(() => users.id),
	name: text("name").notNull(),
	description: text("description"),
	isShareable: numeric("is_shareable").notNull(),
	createdAt: numeric("created_at"),
	updatedAt: numeric("updated_at"),
});

export const recipeLists = sqliteTable("recipe_lists", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	recipeId: integer("recipe_id").references(() => recipes.id),
	listId: integer("list_id").references(() => lists.id),
});

export const sharedRecipes = sqliteTable("shared_recipes", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	recipeId: integer("recipe_id").references(() => recipes.id),
	ownerUserId: text("owner_user_id").references(() => users.id),
	targetUserId: text("target_user_id").references(() => users.id),
	sharedOn: numeric("shared_on").default(sql`(CURRENT_TIMESTAMP)`),
});

export const sharedLists = sqliteTable("shared_lists", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	listId: integer("list_id").references(() => lists.id),
	ownerUserId: text("owner_user_id").references(() => users.id),
	targetUserId: text("target_user_id").references(() => users.id),
	sharedOn: numeric("shared_on").default(sql`(CURRENT_TIMESTAMP)`),
});

export const recipeImages = sqliteTable("recipe_images", {
	imageId: integer("image_id").primaryKey({ autoIncrement: true }),
	recipeId: integer("recipe_id").references(() => recipes.id),
	imagePath: text("image_path").notNull(),
	description: text("description"),
});