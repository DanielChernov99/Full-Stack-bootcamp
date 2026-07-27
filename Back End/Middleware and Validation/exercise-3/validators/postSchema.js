const { z } = require("zod");

const postSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must be at most 100 characters"),

  content: z
    .string()
    .min(10, "Content must be at least 10 characters")
    .max(1000, "Content must be at most 1000 characters"),

  tags: z.array(z.string()),

  category: z.string().optional(),
});

module.exports = postSchema;
