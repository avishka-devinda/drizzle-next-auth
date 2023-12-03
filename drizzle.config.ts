import 'dotenv/config';
import type { Config } from 'drizzle-kit';
 
export default {
	schema: './src/db/schema.ts',
	driver: 'pg', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
	out: './drizzle',
	dbCredentials: {
        connectionString: process.env.DRIZZLE_DATABASE_URL!
	},
} satisfies Config;