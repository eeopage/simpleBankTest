const depositBord = document.querySelector(".deposit .amout span");
const balanceBord = document.querySelector(".balance span");
const withBord = document.querySelector(".withdraw span");
const depositInput = document.querySelector(".deposit-card input");
const withdrawInput = document.querySelector(".withdraw-card input");
const Btndeposit = document.querySelector(".btn-deposit");
const btnWithdraw = document.querySelector(".btn-withdraw");

Btndeposit.addEventListener("click", () => {
  if (Number(depositInput.value) == 0) {
    alert("please enter a number");
  } else {
    depositBord.innerText = depositInput.value;
    const valuebalanceBord = balanceBord.innerText;
    balanceBord.innerText =
      Number(depositInput.value) + Number(valuebalanceBord);
    depositInput.value = "";
  }
});

btnWithdraw.addEventListener("click", () => {
  if (Number(balanceBord.innerText) < Number(withdrawInput.value)) {
    alert("insuficient balance");
  } else if (Number(withdrawInput.value) == 0) {
    alert("please enter a number");
  } else {
    withBord.innerText = withdrawInput.value;
    const valueBalance = balanceBord.innerText;
    balanceBord.innerText = Number(valueBalance) - Number(withdrawInput.value);
  }

  withdrawInput.value = "";
});
