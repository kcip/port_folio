/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
// import { schemaTypes } from "sanity";
import { schemaTypes } from "@/app/studio/schemas/index";

export default defineConfig({
  projectId,
  dataset,
  title: "My Personal Website",
  basePath: "/studio",
  apiVersion,

  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
