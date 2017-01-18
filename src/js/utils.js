export function nuc (comp, maxdepth) {
  if (!comp) return ''
  let prev = null, cur = comp, _maxdepth = maxdepth || 2
  while (prev != cur && cur.indexOf('+') == -1 && _maxdepth-- > 0) {
    prev = cur
    cur = decodeURIComponent(cur)
  }
  return encodeURIComponent(cur)
}
