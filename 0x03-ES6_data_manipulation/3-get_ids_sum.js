/**
 * a function getStudentIdsSum that returns the sum of all the student ids. It
 * should accept a list of students (from getListStudents) as a parameter. You
 * must use the reduce function on the array.
 */

export default function getStudentIdsSum(list) {
  if (list instanceof Array) {
    return list.reduce(
      (previousSt, currentSt) => previousSt.id || previousSt + currentSt.id,
      0,
    );
  }
  return [];
}
