const d = document;
const calcularTotal = () => {
  let total_pagar = d.getElementById("total-pagar");
  let todo = d.querySelectorAll(".precio");
  // console.log(todo.innerText);
  let total = [];
  todo.forEach((el) => {
    // console.log(el.innerText);
    total.push(parseInt(el.innerText));
  });
  let suma_total = 0;
  for (let i = 0; i < total.length; i++) {
    suma_total += total[i];
  }
  total_pagar.innerHTML = ` $${suma_total}`;
  return suma_total;
};

export { calcularTotal };
