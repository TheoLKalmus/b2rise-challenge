function extrairValores(array, key) {
    return array.map(function (item) { return item[key]; });
}
var data = [
    { id: 1, nome: 'Alice' },
    { id: 2, nome: 'Bob' },
    { id: 3, nome: 'Maria' }
];
//Extrai valores do array e retorna um novo array buscando pelo nome
var result = extrairValores(data, 'nome');
console.log("Extração de valores :", result);
