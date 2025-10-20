console.log(`\n\n----- Destructuracion con Arreglos -----\n\n`);

// Crear un arreglo denominado characterNames
const characterNames = ["Leonel Messi", "Cristiano Ronaldo", "Neymar Jr"];

// Obtener datos del array usando destructuracion
const [data1, data2, data3] = characterNames;
console.log(`${data1} - ${data2} - ${data3}`);

// Obtener datos de una sola propiedad ignorando las otras
const [, , futbolista3] = characterNames;
console.log(futbolista3);

// Crear una funcion que retorne un array
const getArray = () => {
  return ["ABC", 123] as const;
};
/* console.log(getArray()); */

const [letters, numbers] = getArray();
console.log(letters, numbers);

// Tarea en clase
function useState(value: string): [string, () => void] {
  return [value, () => console.log(`${value} desde Brasil`)];
}

const [value, consola] = useState("Roberto Carlos");
console.log(value);
consola();
