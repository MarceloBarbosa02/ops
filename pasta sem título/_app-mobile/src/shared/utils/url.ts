export function UrlQuery(data: Record<string, unknown>): string {
  return Object.entries(data)
    .filter(([, val]) => val !== undefined && val !== '')
    .map(([key, val]) => `${key}=${val}`)
    .join('&');
}
