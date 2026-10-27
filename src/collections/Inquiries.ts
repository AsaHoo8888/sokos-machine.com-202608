import type { Access, CollectionConfig } from "payload";

const authenticated: Access = ({ req: { user } }) => Boolean(user);

export const Inquiries: CollectionConfig = {
  slug: "inquiries",
  admin: {
    defaultColumns: ["createdAt", "name", "email", "product", "status", "emailStatus"],
    useAsTitle: "email",
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticated,
    update: authenticated,
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "company", type: "text" },
    { name: "phone", type: "text" },
    { name: "capacity", type: "text" },
    { name: "country", type: "text" },
    { name: "product", type: "text" },
    { name: "inquiryType", type: "text" },
    { name: "message", type: "textarea" },
    { name: "source", type: "text", required: true },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      options: ["new", "contacted", "closed"],
      required: true,
    },
    {
      name: "emailStatus",
      type: "select",
      defaultValue: "not-configured",
      options: ["not-configured", "sent", "failed"],
      required: true,
    },
  ],
};
