// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [extraProp: string]: any;
}

// Define the Teacher class
class TeacherClass implements Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;

  constructor(firstName: string, lastName: string, fullTimeEmployee: boolean, location: string, yearsOfExperience?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullTimeEmployee = fullTimeEmployee;
    this.location = location;
    if (yearsOfExperience) {
      this.yearsOfExperience = yearsOfExperience;
    }
  }
}

// Create a new teacher
const teacher3: Teacher = new TeacherClass('John', 'Doe', false, 'London');
teacher3.contract = false;

console.log(teacher3);

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a new director
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Define the PrintTeacherFunction interface
interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example usage
console.log(printTeacher("John", "Doe")); // Outputs: J. Doe

// Define the StudentConstructor interface
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Define the StudentInterface interface
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Define the StudentClass class
class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Ensure the class matches the StudentConstructor interface
const StudentClassType: StudentConstructor = StudentClass;

// Example usage
const student = new StudentClassType('John', 'Doe');
console.log(student.workOnHomework()); // Outputs: Currently working
console.log(student.displayName()); // Outputs: John
