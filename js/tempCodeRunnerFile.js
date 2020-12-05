const ukraine = {
    tax: 0.195,
    middleSalary: 1789,
    vacancies: 11476
};
const latvia = {
    tax: 0.25,
    middleSalary: 1586,
    vacancies: 3921
};
const litva = {
    tax: 0.15,
    middleSalary: 1509,
    vacancies: 1114
};

function getMyTaxes(salary) {
    return +(salary * this.tax).toFixed(2);
}

function getMiddleTaxes() {
    return +(this.middleSalary * this.tax).toFixed(2);
}

function getTotalTaxes() {
    return +(getMiddleTaxes.call(this) * this.vacancies).toFixed(2);
}

function getMySalary(country) {
    function salaryInfo() {
        const minSalary = 1500;
        const maxSalary = 2000;
        const salary = Math.floor(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
        const taxes = getMyTaxes.call(this, salary);
        const profit = +(salary - taxes).toFixed(2);
        return {
            salary,
            taxes,
            profit
        };
    }
    return setInterval(() => {
        console.log(salaryInfo.call(country));
    }, 10000);
}
console.log(`
скільки податку ви заплатите у Латвії заробляючи 1000$ ,буде ${getMyTaxes.call(latvia , 1000)}$
 У Латвії ІТ-спеціалісти в середньому сплачують${getMiddleTaxes.call(latvia)}$
 взагальному у Латвії всі ІТ-спеціалісти платят ${getTotalTaxes.call(latvia)}
 функція getMySalary зявиться незабаром ) `);
getMySalary(latvia);