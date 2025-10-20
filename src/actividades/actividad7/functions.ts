function greet(name: string) {
  return `Hola ${name}`;
}

const message = greet("Jesus");
console.log(message);

const greet2 = (name: string): string => {
  return `Hola ${name}`;
};

const message2 = greet2("Maria");
console.log(message, message2);

function getUser() {
  return {
    uid: "ABC-123",
    username: "elprofesor",
  };
}

const user = getUser();
console.log(user);

const getUser2 = () => ({ uid: "ABC-123", username: "elprofesor" });

const user2 = getUser2();
console.log(user2);

const getStudent = () => ({ uid: "XYZ-456", studentName: "Juan" });

const student = getStudent();
console.log(student);

const myNumbers = [1, 2, 3, 4, 5, 6, 7];

myNumbers.forEach(function (element) {
  console.log({ element });
});

myNumbers.forEach((element) => {
  console.log({ element });
});

function greet3(name: string, title?: string): string {
  return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
}

function padLeft(text: string, count: number = 2, char: string): string {
  return char.repeat(count) + text;
}

function average(...values: number[]): number {
  return values.length ? values.reduce((a, b) => a + b) / values.length : 0;
}

type FormatOpts = {
  upper?: boolean;
  trim?: boolean;
  prefix?: string;
};

function formatText(
  text: string,
  { upper = false, trim = true, prefix = "" }: FormatOpts = {},
) {
  const cleaned = trim ? text.trim() : text;
  const core = upper ? cleaned.toUpperCase() : cleaned;
  return `${prefix}${core}`;
}

console.log(greet3("Ana"), greet3("Ana", "Dr."));
console.log(padLeft("TS", 3, "-"), average(10, 20, 30));
console.log(formatText("   hello ", { upper: true, prefix: ">" }));
