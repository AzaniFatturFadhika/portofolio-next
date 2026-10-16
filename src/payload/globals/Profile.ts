import type { GlobalConfig } from "payload";

export const Profile: GlobalConfig = {
  slug: "profile",
  access: {
    read: () => true,
    update: ({ req }) => !!req.user,
  },
  versions: { drafts: true },
  fields: [
    { name: "tagline", type: "text", localized: true },
    { name: "shortBio", type: "textarea", localized: true },
    { name: "longBio", type: "textarea", localized: true },
    { name: "outsideCode", type: "textarea", localized: true },
    {
      name: "values",
      type: "array",
      localized: true,
      fields: [
        { name: "title", type: "text", required: true },
        { name: "description", type: "textarea" },
      ],
    },
    { name: "photo", type: "upload", relationTo: "media" },
  ],
};
