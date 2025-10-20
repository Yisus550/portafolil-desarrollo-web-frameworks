const myArray: number[] = [1, 2, 3, 4, 5, 6];

for (const number of myArray) {
  console.log(number);
}

myArray.push(7);
myArray.push(8);
console.log(myArray);

const myArray2 = [...myArray];
console.log(myArray, myArray2);

myArray2.push(9);
myArray2.push(10);
myArray2.push(11);

console.log(myArray2);

const numbersA: number[] = [1, 2, 3];
const numbersB: number[] = [4, 5, 6];
const tags: string[] = ["frontend", "typescript"];
const mixed: Array<number | string> = [1, "tow", 3];
console.log(numbersA, numbersB, tags, mixed);

const base: ReadonlyArray<number> = [10, 20, 25, 40, 50, 5, 30];
const sortedCopy = [...base].sort((a, b) => a - b);
const addCopy = [...base, 40];
const filtered = [...base].filter((n) => n > 15);
console.table({ base, sortedCopy, addCopy, filtered });
