window.onload = () => {
    let calculateButton = document.querySelector("#calculateButton");

    calculateButton.addEventListener("click", calculateBMI);
};

function calculateBMI() {
    let heightInput = parseFloat(document.querySelector("#heightInput").value);
    let weightInput = parseFloat(document.querySelector("#weightInput").value);
    let resultDisplay = document.querySelector("#resultDisplay");

    if (isNaN(heightInput) || heightInput === "" || isNaN(weightInput) || weightInput === "") {
        resultDisplay.innerHTML = "Please enter valid values for height and weight.";
    } else {
        let bmi = (weightInput / ((heightInput * heightInput) / 10000)).toFixed(2);

        if (bmi < 18.5) {
            resultDisplay.innerHTML = `Your BMI is: <span>${bmi}</span>. You are underweight.`;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultDisplay.innerHTML = `Your BMI is: <span>${bmi}</span>. You have a normal weight.`;
        } else {
            resultDisplay.innerHTML = `Your BMI is: <span>${bmi}</span>. You are overweight.`;
        }
    }
}
