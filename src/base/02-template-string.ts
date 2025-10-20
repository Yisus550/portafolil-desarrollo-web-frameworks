console.log("\n***** Template String *****\n");

const firstName = "Jesus";
const lastName = "Romero";

console.log(firstName, " ", lastName);

const lastNameText = '"Jesus" es nombre de persona';
console.log(lastNameText);

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const multiLineText = `
  En este espacio podemos agregar bloques de codigo, por ejemplo:
  El nombre completo es: ${fullName}.
`;

console.log(multiLineText);

console.log(`${5 + 6}`);
let price = 10;
let IVA = 0.25;
let total = `Total: ${(price * (1 + IVA)).toFixed(2)}`;
console.log(total);

const template = `
  <section>
    <h2>Section #1</h2>
    <p>Helloooooo</p>
  </section>
`;
console.log(template);

const tags = ["Template String", "JavaScript", "ES6"];
let template2;
tags.map((tag) => {
  template2 = `<i>${tag}</i>`;
});
