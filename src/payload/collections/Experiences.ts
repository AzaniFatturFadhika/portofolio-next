import type { CollectionConfig } from "payload";

export const Experiences: CollectionConfig = {
  slug: "experiences",
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
      admin: { description: "Stable key e.g. exp-1." },
    },
    { name: "role", type: "text", localized: true, required: true },
    { name: "institution", type: "text" },
    { name: "period", type: "text" },
    {
      name: "type",
      type: "select",
      options: [
        { label: "Work", value: "work" },
        { label: "Education", value: "education" },
      ],
    },
    { name: "description", type: "textarea", localized: true },
    { name: "achievements", type: "text", hasMany: true, localized: true },
  ],
};
