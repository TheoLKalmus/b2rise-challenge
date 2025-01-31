//CODIGO ORIGINAL
function processItems(items) {
    for (var i = 0; i < items.length; i++) {
        if (items[i].price > 100) {
            console.log(items[i].name + ' is expensive');
        }
    }
}
var items = [
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
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (isExpensive(item)) {
            console.log("".concat(item.name, " is expensive"));
        }
    }
}
console.log("processItensRefatorado:");
processItemsRefatored(items);
