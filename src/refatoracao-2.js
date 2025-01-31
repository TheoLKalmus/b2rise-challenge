//CODIGO ORIGINAL
function calculateDiscount(price, isPremium) {
    if (isPremium) {
        if (price > 100) {
            return price * 0.8;
        }
        else {
            return price * 0.9;
        }
    }
    else {
        if (price > 100) {
            return price * 0.9;
        }
        else {
            return price;
        }
    }
}
var price1 = 120;
var price2 = 80;
var isPremium1 = true;
var isPremium2 = false;
console.log("Pre\u00E7o com desconto (Premium, >100): ".concat(calculateDiscountRefatorado(price1, isPremium1)));
console.log("Pre\u00E7o com desconto (Standard, >100): ".concat(calculateDiscountRefatorado(price2, isPremium2)));
console.log("Pre\u00E7o com desconto (Premium, <=100): ".concat(calculateDiscountRefatorado(price2, isPremium1)));
console.log("Pre\u00E7o com desconto (Standard, <=100): ".concat(calculateDiscountRefatorado(price2, isPremium2)));
//CODIGO REFATORADO
function applyDiscount(price, discount) {
    return price * discount;
}
function getPremiumDiscount(price) {
    return price > 100 ? 0.8 : 0.9;
}
function getStandardDiscount(price) {
    return price > 100 ? 0.9 : 1;
}
function calculateDiscountRefatorado(price, isPremium) {
    var discount = isPremium ? getPremiumDiscount(price) : getStandardDiscount(price);
    return applyDiscount(price, discount);
}
var preco1 = 120;
var preco2 = 80;
var ePremium1 = true;
var ePremium2 = false;
console.log("Pre\u00E7o com desconto REFATORADO(Premium, >100): ".concat(calculateDiscountRefatorado(preco1, ePremium1)));
console.log("Pre\u00E7o com desconto REFATORADO(Standard, >100): ".concat(calculateDiscountRefatorado(preco2, ePremium2)));
console.log("Pre\u00E7o com desconto REFATORADO(Premium, <=100): ".concat(calculateDiscountRefatorado(preco1, ePremium1)));
console.log("Pre\u00E7o com desconto REFATORADO(Standard, <=100): ".concat(calculateDiscountRefatorado(preco2, ePremium2)));
