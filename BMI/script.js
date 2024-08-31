function updateHeightValue() {
    const height = document.getElementById('height').value;
    document.getElementById('heightValue').textContent = height;
  }
  
  function updateWeightValue() {
    const weight = document.getElementById('weight').value;
    document.getElementById('weightValue').textContent = weight;
  }
  
  function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let resultText = `Your BMI is ${bmi}. `;
  
    if (bmi < 18.5) {
      resultText += 'You are underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      resultText += 'You have a normal weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
      resultText += 'You are overweight.';
    } else {
      resultText += 'You are obese.';
    }
  
    document.getElementById('result').textContent = resultText;
  }
  