import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		CLERK_SECRET_KEY: z.string().optional(),
		DATABASE_URL: z.string().optional(),
		OPENAI_API_KEY: z.string().optional(),
		E2B_API_KEY: z.string().optional(),
		GITHUB_ID: z.string().optional(),
		GITHUB_SECRET: z.string().optional(),
		GITHUB_ACCESS_TOKEN: z.string().optional(),
		INNGEST_EVENT_KEY: z.string().optional(),
		INNGEST_SIGNING_KEY: z.string().optional(),
		NEXT_PUBLIC_APP_URL: z.string().min(1),
		NODE_ENV: z.string().min(1),
		PREVIEW_URL_SECRET: z.string().optional(),
	},
	client: {
		NEXT_PUBLIC_APP_URL: z.string().min(1),
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().optional(),
		NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1),
		NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1),
		NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: z.string().min(1),
		NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: z.string().min(1),
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().optional(),
	},
	runtimeEnv: {
		CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
		DATABASE_URL: process.env.DATABASE_URL,
		OPENAI_API_KEY: process.env.OPENAI_API_KEY,
		E2B_API_KEY: process.env.E2B_API_KEY,
		GITHUB_ID: process.env.GITHUB_ID,
		GITHUB_SECRET: process.env.GITHUB_SECRET,
		GITHUB_ACCESS_TOKEN: process.env.GITHUB_ACCESS_TOKEN,
		INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
		INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
			process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
		NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
		NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
		NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL:
			process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL,
		NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL:
			process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL,
		NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
		NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
			process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
		NODE_ENV: process.env.NODE_ENV,
		PREVIEW_URL_SECRET: process.env.PREVIEW_URL_SECRET,
	},
});
