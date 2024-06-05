/**
 * a function named cleanSet that returns a string of all the set values that
 * start with a specific string (startString). It accepts two arguments: a set
 * (Set) and a startString (String). When a value starts with startString you
 * only append the rest of the string. The string contains all the values of
 * the set separated by -.
 */

export default function cleanSet(set, startString) {
  const result = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        result.push(valueSubStr);
      }
    }
  }
  return result.join('-');
}
