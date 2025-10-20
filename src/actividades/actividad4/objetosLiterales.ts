console.log("\n\n------- Crear un objeto -------\n\n");

const student = {
  name: "Ana",
  age: 20,
  active: true,
  major: "Software Engineering",
};

console.log("Student:", student);

console.log(
  "\n\n------- Acceso, actualizacion y propiedades inexistentes -------\n\n"
);

console.log(student.name);
console.log(student["major"]);

student.age = 21;
student.semestre = 3;

console.log(student.noExistente);

console.log(student.tutor?.name ?? "No tiene tutor asignado");

console.log("\n\n------- Métodos y this -------\n\n");

const course = {
  title: "JS/TS Basics",
  enrolled: 25,
  add(n: number) {
    this.enrolled += n;
  },
  summary() {
    return `${this.title} (${this.enrolled})`;
  },
};
course.add(5);
console.log(course.summary());

console.log("\n\n------- Atajos y propiedades computadas -------\n\n");

const name = "Jalil";
const group = "IS-301";

const profile = { name, group };
console.log(profile);

const fieldKey = "average";
const record = { [fieldKey]: 89, status: "Regular" };
console.log(record);

console.log("\n\n------- Copias superfisiales y funsion (spread) -------\n\n");

const base = { x: 1, nested: { z: 2 } };

const shallowCopy = { ...base, x: 9 };
console.log("shallowCopy:", shallowCopy);

const preference = { theme: "dark" };
const user = { id: 7, name: "Ana" };
const userProfile = { ...user, ...preference };
console.log("userProfile:", userProfile);

shallowCopy.nested.z = 99;
console.log(base.nested.z);

console.log("\n\n------- Arreglos de objetos + render en DOM -------\n\n");

const students = [
  { name: "Ana", progress: 85, topic: "Objects" },
  { name: "Luis", progress: 72, topic: "Destructuring" },
  { name: "Mia", progress: 91, topic: "Spread" },
];

const listHTML = `
    <section>
        <h2>Students</h2>
        <ul>
            ${students
              .map(
                (student) =>
                  `<li>${student.name} - ${student.topic} (${student.progress}%)</li>`
              )
              .join("")}
        </ul>
    </section>
`;

export function renderListHTML() {
  return listHTML;
}

console.log("\n\n------- Destructuracion con valores por defecto -------\n\n");

const config = { port: 5173, mode: "dev" };

const { port, mode, host = "localhost" } = config;
console.log(`Server running at http://${host}:${port} [${mode}]`);

console.log("\n\n------- JSON: serializar y recuperar -------\n\n");

const jsonText = JSON.stringify(students);
console.log("JSON:", jsonText);

const studentsParsed = JSON.parse(jsonText);
console.log("studentsParsed:", studentsParsed);
