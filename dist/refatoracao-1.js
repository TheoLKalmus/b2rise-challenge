//CODIGO ORIGINAL
function processItems(items) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].price > 100) {
            console.log(items[i].name + ' is expensive');
        }
    }
}
const items = [
    { name: "Laptop", price: 1500 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 120 },
    { name: "Headphones", price: 90 }
];
console.log("processItens:");
processItems(items);
function isExpensive(item) {
    return item.price > 100;
}
function processItemsRefatored(items) {
    for (const item of items) {
        if (isExpensive(item)) {
            console.log(`${item.name} is expensive`);
        }
    }
}
console.log("processItensRefatorado:");
processItemsRefatored(items);
