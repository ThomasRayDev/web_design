let groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
let shoppingList = '';

for (let i = 0; i <= groceries.length - 1; i++) {
    if (i === groceries.length - 1) {
        shoppingList += groceries[i];
    } else {
        shoppingList += `${groceries[i]}, `;
    }
}

console.log(shoppingList);