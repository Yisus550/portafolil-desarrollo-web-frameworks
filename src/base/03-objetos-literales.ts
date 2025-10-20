console.log("\n\n***** Objetos Literales *****\n\n");

const person = {
  firstName: "Cristiano",
  lastName: "Ronaldo",
  age: 39,
  address: {
    postalCode: 83456,
    city: "Hermosillo",
  },
};
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

person.firstName = "Leonel";
person.lastName = "Messi";
person.age = 38;
console.log(person);

const student = person;
console.log(student);

student.firstName = "Mario";
student.lastName = "Almada";
student.age = 70;
console.log(person, student);

const student2 = {
  ...person,
  address: {
    postalCode: 83456,
    city: "Hermosillo",
  },
};
student2.firstName = "Jesus";
student2.lastName = "Romero";
student2.age = 21;
console.log(student2);

const employee = {
  ...person,
};
console.log(employee);

employee.firstName = "Carlos";
employee.lastName = "Figeroa";
employee.age = 20;
employee.address.city = "Guaymas";
console.log(employee);

const otherPerson = structuredClone(person);
console.log(otherPerson);
