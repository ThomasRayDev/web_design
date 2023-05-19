let dirtySalary = Number(prompt('Введите зарплату: '));
let calculateSalary = function (dirtySalary) {
    let salary;
    if (dirtySalary < 100000) {
        salary = dirtySalary - Math.round(dirtySalary * 0.35);
    } else {
        salary = dirtySalary - Math.round(dirtySalary * 0.45);
    }
    return salary;
}

console.log(calculateSalary(dirtySalary));