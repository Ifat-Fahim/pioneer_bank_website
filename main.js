// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});

// deposit button event handler
const depositBtn = document.getElementById("add-deposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("deposit-amount");

    updateSpanText("current-balance", depositNumber);
    updateSpanText("current-deposit", depositNumber);

    document.getElementById("deposit-amount").value = "";
});

// withdraw button event handler
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
    const withdrawAmountNumber = getInputNumber("withdraw-amount");

    updateSpanText("current-withdraw", withdrawAmountNumber);
    updateSpanText("current-balance", -1 * withdrawAmountNumber);

    document.getElementById("withdraw-amount").value = "";
});

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}

function getInputNumber(id) {
    const inputAmount = document.getElementById(id).value;
    const inputAmountNumber = parseFloat(inputAmount);
    return inputAmountNumber;
}
