import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: { useAsTitle: "key" },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  versions: { drafts: true },
  fields: [
    {
      name: "key",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { description: "Stable key e.g. project-1." },
    },
    { name: "title", type: "text", localized: true, required: true },
    { name: "description", type: "textarea", localized: true },
    { name: "longDescription", type: "textarea", localized: true },
    { name: "features", type: "text", hasMany: true, localized: true },
    { name: "challenges", type: "textarea", localized: true },
    { name: "solutions", type: "textarea", localized: true },
    { name: "techStack", type: "text", hasMany: true },
    { name: "category", type: "text" },
    { name: "githubUrl", type: "text" },
    { name: "demoUrl", type: "text" },
    { name: "image", type: "upload", relationTo: "media" },
  ],
};
