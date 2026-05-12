import "dotenv/config";
import { defineConfig } from "prisma/config";
import path from "path";

export default defineConfig({
  // path.join assicura che il percorso sia corretto su qualsiasi sistema (Windows o Linux/Vercel)
  schema: path.join(process.cwd(), "prisma", "schema.prisma"),
  migrations: {
    path: path.join(process.cwd(), "prisma", "migrations"),
  },
});
