export default function partialDeepEquals(a, b, keys = []) {
  if (keys.length === 0) {
    return true;
  }
  const key = keys.shift();
  if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
    return false;
  }
  if (typeof a[key] === 'object' && typeof b[key] === 'object') {
    return partialDeepEquals(a[key], b[key], keys.slice());
  }
  return a[key] === b[key];
}
