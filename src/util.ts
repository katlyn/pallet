// Check if the provided argument is an object.
export const isObject = (val: unknown): val is Record<string, unknown> => {
  return typeof val === 'object' && val != null && !Array.isArray(val)
}

// Converts a snek_case string to camelCase
export const snekToCamel = (str: string): string => {
  return str.replace(/(_\w)/g, k => k[1].toUpperCase())
}

// Converts a snek_case keyed object into a camelCase keyed object.
export const snekKeysToCamel = (
  obj: Record<string, unknown>
): Record<string, unknown> => {
  const converted: Record<string, unknown> = {}
  for (const k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      const key = snekToCamel(k)
      const val = obj[k]
      converted[key] = isObject(val) ? snekKeysToCamel(val) : val

      if (Array.isArray(val)) {
        converted[key] = val.map(v => isObject(v) ? snekKeysToCamel(v) : v)
      }
    }
  }
  return converted
}
