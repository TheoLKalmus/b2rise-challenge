//CODIGO ORIGINAL
function c(x) {
    const r = [];
    for (let i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0) {
            r.push(x[i] * 2);
        }
    }
    return r;
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log("numerosOriginais: ", numbers);
console.log("DobraPares: ", c(numbers));
//CODIGO REFATORADO
function dobraPares(numbers) {
    const doubledEvenNumbers = [];
    for (const number of numbers) {
        if (isPar(number)) {
            doubledEvenNumbers.push(dobra(number));
        }
    }
    return doubledEvenNumbers;
}
function isPar(number) {
    return number % 2 === 0;
}
function dobra(number) {
    return number * 2;
}
console.log("numerosOriginais: ", numbers);
console.log("DobraParesRefatorado: ", dobraPares(numbers));
