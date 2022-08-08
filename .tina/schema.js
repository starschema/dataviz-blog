import { defineConfig, defineSchema, RouteMappingPlugin } from "tinacms";
import { client } from "./__generated__/client";

const schema = defineSchema({
  config: {
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    branch:
      process.env.NEXT_PUBLIC_TINA_BRANCH ||
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
      process.env.HEAD,
    token: process.env.TINA_TOKEN,
    media: {
      tina: {
        mediaRoot: "uploads",
        publicFolder: "public",
      },
    },
  },
  collections: [
    {
      label: "Author",
      name: "author",
      path: "content/author",
      fields: [
        {
          type: "string",
          name: "name",
          label: "Name",
        },
        {
          type: "image",
          name: "avatar",
          label: "Avatar",
        },
      ],
    },
    {
      label: "Blog Posts",
      name: "post",
      path: "content/post",
      format: "md",
      fields: [
        {
          type: "string",
          label: "Title",
          name: "title",
          required: true,
        },
        {
          type: "string",
          label: "Slug",
          name: "slug",
          required: true,
        },
        {
          type: "string",
          label: "Summary",
          name: "summary",
          required: true,
        },
        {
          type: "number",
          label: "Reading Time",
          name: "readingTime",
          required: true,
        },
        {
          type: "datetime",
          label: "Published On",
          name: "publishedOn",
          required: true,
        },
        {
          type: "reference",
          label: "Author",
          name: "author",
          required: true,
          collections: ["author"],
        },
        {
          type: "image",
          label: "Thumbnail",
          name: "thumbnail",
          required: true,
        },
        {
          type: "string",
          label: "Blog Post Body",
          name: "body",
          required: true,
          isBody: true,
          ui: {
            component: "textarea",
          },
        },
      ],
    },
  ],
});

export default schema;

export const tinaConfig = defineConfig({
  client,
  schema,
  cmsCallback: (cms) => {
    const RouteMapping = new RouteMappingPlugin((collection, document) => {
      if (["page"].includes(collection.name)) {
        if (document._sys.filename === "home") {
          return "/";
        }
      }

      if (["post"].includes(collection.name)) {
        return `/posts/${document._sys.filename}`;
      }

      return undefined;
    });

    cms.plugins.add(RouteMapping);

    return cms;
  },
});
