//CODIGO ORIGINAL
function c(x) {
    var r = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i] % 2 === 0) {
            r.push(x[i] * 2);
        }
    }
    return r;
}
var numbers = [1, 2, 3, 4, 5, 6];
console.log("numerosOriginais: ", numbers);
console.log("DobraPares: ", c(numbers));
//CODIGO REFATORADO
function dobraPares(numbers) {
    var doubledEvenNumbers = [];
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
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
