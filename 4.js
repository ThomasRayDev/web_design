let getPrice = function (hours, isImportant) {
    let priceForHour = 1500;
    if (isImportant) {
        hours *= 0.5;
        priceForHour *= 2.5;
    }

    if (hours > 150) {
        priceForHour -= 250;
    }

    return priceForHour * hours;
}

let hours = 100;
let isImportant = true;
alert(getPrice(hours, isImportant));