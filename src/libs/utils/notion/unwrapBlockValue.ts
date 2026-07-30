// Notion "Sites" pages (custom-domain publishing) return every record
// double-wrapped as `{ role, value: Block }` instead of the plain `Block`
// that notion-client normally unwraps to. Detect and peel off that extra
// layer so callers always get the real block fields.
export function unwrapBlockValue<T = any>(maybeWrapped: any): T {
  return maybeWrapped?.type === undefined && maybeWrapped?.value !== undefined
    ? maybeWrapped.value
    : maybeWrapped
}
