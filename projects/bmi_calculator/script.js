const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const results = document.getElementById('results');

    if (height === '' || height < 1 || isNaN(height)) {
        results.innerHTML = `Height is invaild! ${height}`
    } else if (weight === '' || weight < 1 || isNaN(weight)) {
        results.innerHTML = `Weight is invaild! ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) {
            results.innerHTML = `Under Weight : ${bmi}`;
        } else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = `Normal Weight : ${bmi}`;
        } else {
            results.innerHTML = `Over Weight : ${bmi}`;
        }
    }
})