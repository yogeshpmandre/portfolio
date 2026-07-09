const basePath =
  process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function assetPath(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${basePath}/${normalized}`;
}

export default basePath;
