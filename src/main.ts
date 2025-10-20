import "./style.css";
import "./base/01-const-let.ts";
import "./base/02-template-string.ts";
import "./base/03-objetos-literales.ts";
import "./actividades/actividad3/templateHTML.ts";
import "./actividades/actividad4/objetosLiterales.ts";
import {
  renderFase4TemplateHTML,
  templateHTMLReporte,
} from "./actividades/actividad3/templateHTML.ts";
import { renderListHTML } from "./actividades/actividad4/objetosLiterales.ts";
import "./actividades/actividad5/interfaces.ts";
import {
  type Student,
  formatStudent,
  activityRender,
} from "./actividades/actividad5/interfaces.ts";
import "./actividades/actividad6/actividad6.ts";
import "./actividades/actividad8/destructuracion.ts";
import "./actividades/actividad9/destructuracion-arreglos.ts";
import {
  getHeroById,
  getHerosByOwner,
} from "./actividades/actividad10/getHeroData.ts";
import "./actividades/actividad11/promise.ts";
import "./actividades/actividad12/fetch-api.ts";
import "./actividades/actividad13/async-await.ts";

const student: Student = {
  id: "stu-01",
  name: "Alice",
  email: "alice@mail.com",
  progress: 85,
};
const formattedStudent = formatStudent(student);

console.log(getHeroById(6));
console.log(getHerosByOwner("Marvel"));

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    ${renderFase4TemplateHTML()}
    ${templateHTMLReporte}
    ${renderListHTML()}

    <h2>Actividad 5: Interfaces</h2>
    <h3>Student Formateado:</h3>
    <section>${formattedStudent}</section>
    ${activityRender()}
  </div>
`;
