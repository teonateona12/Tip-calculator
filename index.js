"strict mode";

//select elements
const btnSix = document.querySelector(".btn-six");
const btns = document.querySelectorAll(".btn");

const billInp = document.querySelector(".bill-inp");
const peopleInp = document.querySelector(".people-inp");
const tipAmount = document.querySelector(".tip-number");
const totalNumber = document.querySelector(".total-number");
const reset = document.querySelector(".reset");
const error = document.querySelector(".error");



//only positive number of people
peopleInp.addEventListener("input", (e) => {
  e.preventDefault();
  if (peopleInp.value < 0) {
    peopleInp.value = "";
  }
});

//only positive number of bill
billInp.addEventListener("input", (e) => {
  e.preventDefault();
  if (billInp.value < 0) {
    billInp.value = "";
  }
});

//buttons click
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();
    tipAndTotal(+btns[i].value);
  });
}

//custom
btnSix.addEventListener("input", (e) => {
  e.preventDefault();
  tipAndTotal(btnSix.value);
  btnSix.classList.add("border");
});

//reset
reset.addEventListener("click", () => {
  billInp.value = "";
  peopleInp.value = "";
  totalNumber.textContent = "$0.00";
  tipAmount.textContent = "$0.00";
  btnSix.value = "";
  error.textContent = "";
  peopleInp.classList.remove("error-inp");
});

//calculate tip and total
const tipAndTotal = (persent) => {
  if (+peopleInp.value === 0) {
    error.textContent = "Can't be zero";
    peopleInp.classList.add("error-inp");
    totalNumber.textContent = "$0.00";
    tipAmount.textContent = "$0.00";
  } else {
    let devide = (billInp.value / 100) * persent;
    let result = devide / peopleInp.value;
    tipAmount.textContent = `$${result.toFixed(2)}`;
    let total = billInp.value / peopleInp.value + result;
    totalNumber.textContent = `$${total.toFixed(2)}`;
    error.textContent = "";
    peopleInp.classList.remove("error-inp");
  }

  //if number is empty
  if (peopleInp.value === "") {
    error.textContent = "";
    peopleInp.classList.remove("error-inp");
  }
};
