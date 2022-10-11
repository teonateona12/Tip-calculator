"strict mode";

//select elements
const btnSix = document.querySelector(".btn-six");
const billInp = document.querySelector(".bill-inp");
const peopleInp = document.querySelector(".people-inp");
const tipAmount = document.querySelector(".tip-number");
const totalNumber = document.querySelector(".total-number");
const reset = document.querySelector(".reset");
const error = document.querySelector(".error");
const btnDiv = document.getElementById("btn-div-two");

// Functions

//calculate function
let tipPercent;
const calculate = () => {
  if (billInp.value && peopleInp.value && tipPercent) {
    let billInputValue = parseFloat(billInp.value);
    let tip = billInputValue * tipPercent;
    let totalPerPerson = (billInputValue + tip) / peopleInp.value;
    let tipPerPersent = tip / peopleInp.value;
    totalNumber.textContent = `$${totalPerPerson.toFixed(2)}`;
    tipAmount.textContent = `$${tipPerPersent.toFixed(2)}`;
    emptyOrFull();
  }
};

//if number of people is 0, or empty
const emptyOrFull = () => {
  if (peopleInp.value === "") {
    error.textContent = "";
    peopleInp.classList.remove("error-inp");
  }
  if (+peopleInp.value === 0) {
    error.textContent = "Can't be zero";
    peopleInp.classList.add("error-inp");
    totalNumber.textContent = "$0.00";
    tipAmount.textContent = "$0.00";
  } else {
    error.textContent = "";
    peopleInp.classList.remove("error-inp");
  }
};

// buttons
btnDiv.addEventListener("click", (e) => {
  tipPercent = parseFloat(e.target.value) / 100;
  calculate();
});

//custom button
btnSix.addEventListener("input", (e) => {
  e.preventDefault();
  positiveNumbers();
  btnSix.classList.add("border");
  tipPercent = Number(e.target.value) / 100;
  calculate();
});

//only positive number of people
const positiveNumbers = () => {
  if (billInp.value <= 0) {
    billInp.value = "";
  }
  if (peopleInp.value <= 0) {
    peopleInp.value = "";
  }
  if (btnSix.value <= 0) {
    btnSix.value = "";
  }

  
};

//number of people
peopleInp.addEventListener("input", (e) => {
  e.preventDefault();
  positiveNumbers();
  calculate();
});

//number of bill
billInp.addEventListener("input", (e) => {
  e.preventDefault();
  positiveNumbers();
  calculate();
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
