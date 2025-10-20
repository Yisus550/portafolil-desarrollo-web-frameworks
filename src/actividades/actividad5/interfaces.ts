export interface Student {
  readonly id: string;
  name: string;
  email?: string;
  progress: number;
}

interface Course {
  readonly id: string;
  title: string;
  units: number;
}

// Studen with email
const student: Student = {
  id: "1",
  name: "Alice",
  email: "alice@mail.com",
  progress: 85,
};

const studentWithoutEmail: Student = {
  id: "2",
  name: "Bob",
  progress: 70,
};
console.log("Student with email:", student);
console.log("Student without email:", studentWithoutEmail);

console.log("\n\n----- Inmutabilidad y coreccion legible -----\n\n");

export interface Enrollment {
  readonly studentId: string;
  readonly courseId: string;
  status: "active" | "completed" | "dropped";
}

const enrollment: Enrollment = {
  studentId: "1",
  courseId: "101",
  status: "active",
};
console.log("Enrollment:", enrollment);

console.log("\n\n----- Objetos inmutables -----\n\n");

export const students: ReadonlyArray<Student> = [
  { id: "stu-01", name: "Alice", email: "alice@correo.com", progress: 85 },
  { id: "stu-02", name: "Bob", progress: 70 },
];

export const courses: ReadonlyArray<Course> = [
  { id: "c-101", title: "Math 101", units: 3 },
  { id: "c-102", title: "History 201", units: 4 },
];

console.log(
  "\n\n----- Composicion: enxtends y segregaciones de interfaces -----\n\n",
);

export interface WithTimesTamps {
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export interface EnrollmentStudent extends Student, WithTimesTamps {
  courseId: string;
}

const enrollmentStudent: EnrollmentStudent = {
  id: "stu-01",
  name: "Alice",
  email: "alice@mail.com",
  progress: 85,
  createdAt: new Date("2023-01-01"),
  updatedAt: new Date("2023-06-01"),
  courseId: "c-101",
};
console.log("Enrollment Student:", enrollmentStudent);

console.log("\n\n----- Funciones puras que consumen interfaces -----\n\n");

export function formatStudent(student: Student): string {
  const p = Math.max(0, Math.min(100, student.progress));
  return `Student: ${student.name} (Progress: ${p}%)`;
}

console.log("\n\n----- Busqueda de un Curso-----\n\n");

export function findCourseById(
  courses: ReadonlyArray<Course>,
  courseId: string,
): Course | undefined {
  return courses.find((course) => course.id === courseId);
}

console.log("Course c-101:", findCourseById(courses, "c-101"));
console.log("Course c-999:", findCourseById(courses, "c-999"));

export function computerWorkload(courses: ReadonlyArray<Course>): string[] {
  return courses.map((course) => {
    const hours = course.units * 3; // Assuming 3 hours per unit
    return `${course.title}: ${hours} hours/week`;
  });
}

console.log("Course Workload:", computerWorkload(courses));

console.log("\n\n---- Contratos de resultado -----\n\n");

export interface Success<T> {
  ok: true;
  data: T;
}
export interface Failure {
  ok: false;
  error: string;
}
export type Result<T> = Success<T> | Failure;

export function getStudent(id: string): Result<Student> {
  const found = students.find((s) => s.id === id);
  return found
    ? { ok: true, data: found }
    : { ok: false, error: "Student not found" };
}

const findStudent = getStudent("stu-02");
console.log("Found student:", findStudent);

export function renderResults<T>(r: Result<T>, ok: (v: T) => string): string {
  switch (r.ok) {
    case true:
      return ok(r.data);

    case false:
      return `Error ${r.error}`;
  }
}
console.log(
  renderResults<Student>(
    findStudent,
    (s) => `Student selected: ${s.name} - ${s.progress}%`,
  ),
);

console.log("\n\n----- Renderizado de listas -----\n\n");

export function listRender(title: string, items: string[]): string {
  return `
    <article>
      <h2>${title}</h2>
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>
  `;
}

export function activityRender(): string {
  const studentList = students.map(formatStudent);
  const workload = computerWorkload(courses);

  const studentBlock = listRender("Student List", studentList);
  const workloadBlock = listRender("Course Workload", workload);

  return `
    <section>
      ${studentBlock}
      ${workloadBlock}
    </section>
  `;
}
