function makeAllPositive(numeros) {
    return numeros.map(num => Math.abs(num));
}
const numeros = [-1, 2, -3, 4];
const processado = makeAllPositive(numeros);
console.log("Lista original :", numeros);
console.log("Lista positiva :", processado);
