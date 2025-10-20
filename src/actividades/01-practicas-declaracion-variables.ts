export default class Practicas {
  // **** ejercicio 01 ****
  static ejercicio01() {
    console.log("Ejercicio 01");

    {
      const a = 1;
      let b = 2;
      var c = 3;
    }

    console.log(typeof a);
    console.log(typeof b);
    console.log(c); // 3 ← var “escapa” del bloque
  }

  // **** ejercicio 02 ****
  static ejercicio02() {
    console.log("Ejercicio 02");

    console.log(x);
    let x = 10;

    console.log(y);
    var y = 10;
  }

  // **** ejercicio 03 ****
  static ejercicio03() {
    console.log("Ejercicio 03");

    const user = { id: 1, name: "Ana" };
    user.name = "Ana María";
    // user = { id: 2 } // No puedes reasignar la referencia

    const nums = [1, 2, 3];
    nums.push(4);
    // nums = [] // No puedes reasignar
  }

  // **** ejercicio 04 ****
  static ejercicio04() {
    console.log("Ejercicio 04");

    const a = 1;
    // const a = 2; // redeclaración

    let b = 1;
    b = 2;
    // let b = 3; // redeclaración en el mismo bloque

    var c = 1;
    var c = 2;
  }

  // **** ejercicio 05 ****
  static ejercicio05() {
    console.log("Ejercicio 05");

    for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log("var i =", i), 0);
    }

    for (let j = 0; j < 3; j++) {
      setTimeout(() => console.log("let j =", j), 0);
    }
  }
}

/*
 * ¿Qué pasa si lees una let antes de declararla?
 *    Arroja un mensaje de error indicando que la variable es indefinida
 *
 * ¿Puedes cambiar el contenido de un objeto guardado en una const?
 *    Se pueden modificar los valores mas no la estructura del objeto
 *
 * ¿Por qué var imprime 3,3,3 en el ejemplo del for?
 *    Es porque el ciclo for termina antes de que las funciones 'setTimeout' se puedan ejecutar
 *
 * Qué ventaja da as const en TypeScript?
 *    Se crea una inmutabilidad, hace que las variables declaradas con 'as const' sean 'readonly', impidiendo la modificacion y redeclaración
 *
 * ¿En qué casos elegirías let sobre const?
 *    Cuando tenga variables que tenga que modificar para ciertas ocaciones
 * */
