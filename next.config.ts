import type { NextConfig } from "next";

// GitHub Pages serves a project site under /<repo>; the deploy workflow
// passes that prefix in. Empty locally, so `npm run dev` is unchanged.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML in out/ — GitHub Pages has no Node server.
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    // No image optimizer on static hosting; this loader adds the basePath.
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
