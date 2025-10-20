const nombre = "Jesus";
const curso = "JS/TS";

const msg1 = `Hola ${nombre}. Bienvenido al curso ${curso}.`;
const msg2 = `Hoy es ${new Date().toLocaleString()}`;
console.log(msg1, msg2);

const a = 7,
  b = 5;
const etiqueta = (n: number) => (n % 2 === 2 ? "par" : "impar");
console.log(
  `${a} es ${etiqueta(a)} y ${b} es ${etiqueta(b)}: total -> ${a} + ${b} = ${
    a + b
  }`
);

const ayuda = `
Comandos utiles:
    - npm run dev
    - npm run build
    - npm run preview
`;
console.log(ayuda.trim());

export function renderFase4TemplateHTML() {
  const alumno = {
    nombre: "Jesus",
    avance: 85,
    tema: "Template Strings",
  };

  const tarjeta = `
        <article class="card">
            <h2>${alumno.nombre}</h2>
            <p>Tema: <strong>${alumno.tema}</strong></p>
            <p>Avance: ${alumno.avance}%</p>
        </article>
    `;

  return tarjeta;
}

const precio = 1234.5;
const mxn = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
}).format(precio);
const hoy = new Intl.DateTimeFormat("es-MX", {
  dateStyle: "medium",
  timeStyle: "long",
}).format(new Date());
console.log(`Total: ${mxn} | Fecha: ${hoy}`);

const reporte = {
  curso: "JS/TS Bases",
  unidad: 1,
  temas: ["Variables", "Template Strings", "Funciones"],
  completado: 0.4,
};

export const templateHTMLReporte = `
  <section>
    <h3>Curso: ${reporte.curso} (Unidad: ${reporte.unidad})</h3>
    <p>Temas: ${reporte.temas.join(", ")}</p>
    <p>Progreso: ${Math.round(reporte.completado * 100)}%</p>
  </section>
`;
