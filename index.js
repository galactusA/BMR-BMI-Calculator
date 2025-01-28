function calculateBMR() {
    var gender = document.getElementById("gender").value;
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    var age = parseInt(document.getElementById("age").value);

    var bmr;

    if (gender === "M") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === "F") {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    document.getElementById("bmrResult").innerHTML = "BMR: " + bmr.toFixed(2) + " calories/day";
}

function calculateBMI() {
    var weightBMI = parseFloat(document.getElementById("weightBMI").value);
    var heightBMI = parseFloat(document.getElementById("heightBMI").value) / 100; // Convert cm to meters

    var bmi = weightBMI / (heightBMI * heightBMI);

    document.getElementById("bmiResult").innerHTML = "BMI: " + bmi.toFixed(2) + " - " + interpretBMICategory(bmi);
}

function interpretBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obesity";
    }
}