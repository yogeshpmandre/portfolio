const basePath =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  const encoded = normalized
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");

  return `${basePath}/${encoded}`;
}

export default basePath;
