/**
 * a function updateStudentGradeByCity that returns an array of students for a
 * specific city with their new grade.
 * It should accept a list of students (from getListStudents), a city (String),
 * and newGrades (Array of “grade” objects) as parameters.
 * newGrades is an array of objects
 * If a student doesn’t have grade in newGrades, the final grade should be N/A.
 * You must use filter and map combined.
 */

export default function updateStudentGradeByCity(list, city, newGrades) {
  const notApp = { grade: 'N/A' };

  if (list instanceof Array) {
    return list
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || notApp).grade,
      }));
  }
  return [];
}
