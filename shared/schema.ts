import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const caseStudies = pgTable("case_studies", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  subtitle: text("subtitle"),
  description: text("description").notNull(),
  challenge: text("challenge").notNull(),
  solution: text("solution").notNull(),
  results: text("results").notNull(),
  technologies: text("technologies").array().notNull(),
  industry: text("industry").notNull(),
  projectDuration: text("project_duration"),
  clientName: text("client_name"),
  imageUrl: text("image_url"),
  featured: text("featured").default("false"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  message: true,
});

export const insertCaseStudySchema = createInsertSchema(caseStudies).pick({
  title: true,
  subtitle: true,
  description: true,
  challenge: true,
  solution: true,
  results: true,
  technologies: true,
  industry: true,
  projectDuration: true,
  clientName: true,
  imageUrl: true,
  featured: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type CaseStudy = typeof caseStudies.$inferSelect;
