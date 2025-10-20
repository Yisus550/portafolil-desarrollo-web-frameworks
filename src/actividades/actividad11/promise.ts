const myPromise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
    // reject("Mi dinero se perdio");
  }, 2000);
});

function formatCurrency(total: number): string {
  return total.toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN",
    currencyDisplay: "name",
  });
}

myPromise
  .then((myMoney) => {
    console.log(`Tengo $${formatCurrency(myMoney)} en mi cuenta.`);
  })
  .catch((reason) => console.warn(reason))
  .finally(() => console.log("Termino de la Promise"));
