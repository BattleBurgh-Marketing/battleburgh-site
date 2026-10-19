import type { ImageLoaderProps } from "next/image";

/**
 * Static hosting has no image optimizer, so images are served as-is.
 * Prefixes the basePath (next/image doesn't) for paths like "/photos/x.jpg";
 * the width param only stops Next warning that the loader ignores it.
 */
export default function imageLoader({ src, width }: ImageLoaderProps) {
  if (!src.startsWith("/")) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH}${src}?w=${width}`;
}
