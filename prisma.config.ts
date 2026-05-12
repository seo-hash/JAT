import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  // Aggiungi il ./ davanti ai percorsi
  schema: "./prisma/schema.prisma", 
  migrations: {
    path: "./prisma/migrations",
  },
});
