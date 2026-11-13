/**
 * Resolves static assets (images, videos, posters) so they load seamlessly
 * whether the site is served via:
 * 1) Local filesystem (file:///path/to/dist/index.html)
 * 2) Vite dev server (http://localhost:5173/)
 * 3) Production web server / subfolder domain (https://schahrsad-shahmirzadi.com/)
 */
export function resolveAsset(path: string | undefined | null): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  // Remove leading slash or ensure leading ./
  if (path.startsWith('./')) {
    return path;
  }
  if (path.startsWith('/')) {
    return `.${path}`;
  }
  return `./${path}`;
}
