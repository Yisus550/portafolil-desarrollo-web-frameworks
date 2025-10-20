console.log(
  "\n\n----- Destructuración de arreglos y objetos en TypeScript -----\n\n",
);

// Trabajar con funciones, objetos, interface y destructuración
interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const person: Hero = {
  name: "Tony Stark",
  age: 45,
  key: "Ironman",
};

// Recuperando datos de un objeto usando destructuración
const { name, age, key } = person;
console.log(`${name} - ${age} - ${key}`);

// Utilizando alias
const { name: nameHero, age: ageHero, key: keyHero } = person;
console.log(`${nameHero} - ${ageHero} - ${keyHero}`);

const useContext = (hero: Hero) => {
  const { name, age, key, rank } = hero;
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  };
};

const context = useContext(person);
console.log(context);

// Tarea: crear un objeto denominado user, despues destructura sus propiedades y agrega un alias a las propiedades desestructuradas e imprimelas por consola
const user = {
  name: "Jesus",
  age: 21,
  group: "002",
};

const { name: nombre, age: edad, group: grupo } = user;
console.log(`${nombre} - ${edad} - ${grupo}`);
