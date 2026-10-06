
const form = document.querySelector('form')
form.addEventListener('submit', function(e) {
  e.preventDefault()
  document.querySelector('#bmi-category').textContent = '';
     const height = parseInt(document.querySelector('#height').value)
    const width = parseInt(document.querySelector('#weight').value)
    if (height <=0  || isNaN(height)) {
        document.querySelector('#result').textContent = 'Please enter valid numbers for height.'
        return
    } if (width <=0  || isNaN(width)) {
        document.querySelector('#result').textContent = 'Please enter valid numbers for  width.'
        return
    } else {    
        const bmi = (width / ((height * height) / 10000)).toFixed(2);
        document.querySelector('#result').textContent = `Your BMI is: ${bmi}`
        if (bmi < 18.5) {
            document.querySelector('#bmi-category').textContent += ' (Underweight)'
            document.querySelector('#bmi-category').style.color = 'red'
        } else if (bmi >= 18.5 && bmi < 24.9) {
            document.querySelector('#bmi-category').textContent += ' (Normal weight)'
            document.querySelector('#bmi-category').style.color = 'green'
        } else if (bmi >= 25 && bmi < 29.9) {
            document.querySelector('#bmi-category').textContent += ' (Overweight)'
            document.querySelector('#bmi-category').style.color = 'orange'
        } else {
            document.querySelector('#bmi-category').textContent += ' (Obese)'
            document.querySelector('#bmi-category').style.color = 'red'
        }
    }

})