"strict mode";
//select buttons
const btnOne = document.querySelector(".btn-one");
const btnTwo = document.querySelector(".btn-two");
const btnThree = document.querySelector(".btn-three");
const btnFour = document.querySelector(".btn-four");
const btnFive = document.querySelector(".btn-five");
const btnSix = document.querySelector(".btn-six");

const billInp = document.querySelector(".bill-inp");
const peopleInp = document.querySelector(".people-inp");
const tipAmount = document.querySelector(".tip-number");
const totalNumber = document.querySelector(".total-number");
const reset = document.querySelector(".reset");

// button addeventlisteners
btnOne.addEventListener("click", (e) => {
  e.preventDefault();
  tipAndTotal(5);
});
btnTwo.addEventListener("click", (e) => {
  e.preventDefault();
  tipAndTotal(10);
});
btnThree.addEventListener("click", (e) => {
  e.preventDefault();
  tipAndTotal(15);
});
btnFour.addEventListener("click", (e) => {
  e.preventDefault();
  tipAndTotal(25);
});
btnFive.addEventListener("click", (e) => {
  e.preventDefault();
  tipAndTotal(50);
});

// btnSix.addEventListener("click", (e) => {
//   e.preventDefault();
//   tipAndTotal(btnSix.textContent);
// });

//reset
reset.addEventListener("click", () => {
  billInp.value = "";
  peopleInp.value = "";
  totalNumber.textContent = "$0.00";
  tipAmount.textContent = "$0.00";
});

//
const tipAndTotal = (persent) => {
  let devide = (billInp.value / 100) * persent;
  let result = devide / peopleInp.value;
  tipAmount.textContent = `$${Math.round(result)}`;
  let total = billInp.value / peopleInp.value + result;
  totalNumber.textContent = `$${Math.round(total)}`;
};
