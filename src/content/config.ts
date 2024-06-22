import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		cover: image(),
	})
})

export const collections = {
	blog: blogCollection
}
