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
const price1 = 120;
const price2 = 80;
const isPremium1 = true;
const isPremium2 = false;
console.log(`Preço com desconto (Premium, >100): ${calculateDiscountRefatorado(price1, isPremium1)}`);
console.log(`Preço com desconto (Standard, >100): ${calculateDiscountRefatorado(price2, isPremium2)}`);
console.log(`Preço com desconto (Premium, <=100): ${calculateDiscountRefatorado(price2, isPremium1)}`);
console.log(`Preço com desconto (Standard, <=100): ${calculateDiscountRefatorado(price2, isPremium2)}`);
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
    const discount = isPremium ? getPremiumDiscount(price) : getStandardDiscount(price);
    return applyDiscount(price, discount);
}
const preco1 = 120;
const preco2 = 80;
const ePremium1 = true;
const ePremium2 = false;
console.log(`Preço com desconto REFATORADO(Premium, >100): ${calculateDiscountRefatorado(preco1, ePremium1)}`);
console.log(`Preço com desconto REFATORADO(Standard, >100): ${calculateDiscountRefatorado(preco2, ePremium2)}`);
console.log(`Preço com desconto REFATORADO(Premium, <=100): ${calculateDiscountRefatorado(preco1, ePremium1)}`);
console.log(`Preço com desconto REFATORADO(Standard, <=100): ${calculateDiscountRefatorado(preco2, ePremium2)}`);
