const { z } = require("zod");

const postSchema = z.object({
  title: z
    .string()
    .min(5, "Title must be at least 5 characters")
    .max(100, "Title must be at most 100 characters"),

  content: z
    .string()
    .min(10, "Content must be at least 10 characters")
    .max(500, "Content must be at most 500 characters"),

  tags: z.array(z.string()),

  category: z.string().optional(),
});

module.exports = postSchema;
