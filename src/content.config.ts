import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const legal = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/legal" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

const impressum = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/impressum" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

// const plates = defineCollection({
// 	loader: file("src/data/plates.json"),
// 	schema: z.object({
// 		slug: z.string(),
// 		prettyName: z.string(),
// 		description: z.string(),
// 		plates: z.array(
// 			z.object({
// 				name: z.string(),
// 				description: z.string(),
// 				price: z.number(),
// 			})
// 		),
// 	}),
// });

// const reviews = defineCollection({
// 	loader: file("src/data/reviews.json"),
// 	schema: z.object({
// 		author: z.string(),
// 		review: z.string(),
// 	}),
// });

// const gallery = defineCollection({
// 	loader: file("src/data/gallery.json"),
// 	schema: ({ image }) =>
// 		z.object({
// 			title: z.string(),
// 			alt: z.string(),
// 			image: image(),
// 		}),
// });

export const collections = { legal, impressum };
