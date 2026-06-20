function calculateEMI() {

    let principal = parseFloat(document.getElementById("loanAmount").value);
    let annualRate = parseFloat(document.getElementById("interestRate").value);
    let years = parseFloat(document.getElementById("loanTenure").value);

    if (!principal || !annualRate || !years) {
        alert("Please fill all fields");
        return;
    }

    let monthlyRate = annualRate / 12 / 100;
    let months = years * 12;

    let emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    let totalPayment = emi * months;
    let totalInterest = totalPayment - principal;

    document.getElementById("emi").innerText = emi.toFixed(2);
    document.getElementById("interest").innerText = totalInterest.toFixed(2);
    document.getElementById("payment").innerText = totalPayment.toFixed(2);
}