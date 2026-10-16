import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { Users } from "./src/payload/collections/Users";
import { Media } from "./src/payload/collections/Media";
import { Posts } from "./src/payload/collections/Posts";
import { Projects } from "./src/payload/collections/Projects";
import { Experiences } from "./src/payload/collections/Experiences";
import { Profile } from "./src/payload/globals/Profile";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || "dev-secret-change-me",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  localization: {
    locales: ["id", "en"],
    defaultLocale: "id",
    fallback: true,
  },
  editor: lexicalEditor(),
  collections: [Users, Media, Posts, Projects, Experiences],
  globals: [Profile],
  typescript: {
    outputFile: path.resolve(dirname, "src/payload-types.ts"),
  },
  plugins: [
    s3Storage({
      bucket: process.env.S3_BUCKET || "",
      config: {
        endpoint: process.env.AWS_ENDPOINT_URL_S3,
        region: process.env.AWS_REGION || "us-east-1",
        forcePathStyle: true,
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
        },
      },
      collections: { media: true },
      clientUploads: true,
    }),
  ],
  admin: {
    importMap: { baseDir: path.resolve(dirname) },
    user: Users.slug,
  },
});
