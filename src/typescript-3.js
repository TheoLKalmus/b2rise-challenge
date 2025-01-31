function makeAllPositive(numeros) {
    return numeros.map(function (num) { return Math.abs(num); });
}
var numeros = [-1, 2, -3, 4];
var processado = makeAllPositive(numeros);
console.log("Lista original :", numeros);
console.log("Lista positiva :", processado);
