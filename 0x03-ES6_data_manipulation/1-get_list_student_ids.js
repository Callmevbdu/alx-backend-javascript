/**
 * a function getListStudentIds that returns an array of ids from a list of
 * object. This function is taking one argument which is an array of objects -
 * and this array is the same format as getListStudents from the previous task.
 * If the argument is not an array, the function is returning an empty array.
 */

export default function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.map(student => student.id);
}
