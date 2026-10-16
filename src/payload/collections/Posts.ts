import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
  admin: { useAsTitle: "slug" },
  access: {
    read: () => true,
    create: ({ req }) => !!req.user,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  versions: { drafts: true },
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: { description: "Stable non-localized slug, identical both locales." },
    },
    { name: "title", type: "text", localized: true, required: true },
    { name: "excerpt", type: "textarea", localized: true, required: true },
    {
      name: "content",
      type: "richText",
      localized: true,
      required: true,
    },
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
    },
    { name: "category", type: "text" },
    { name: "date", type: "text" },
    { name: "readTime", type: "text" },
  ],
};
