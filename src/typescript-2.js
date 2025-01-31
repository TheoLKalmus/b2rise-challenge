function calculadora(operacao, num1, num2) {
    switch (operacao) {
        case 'soma':
            return num1 + num2;
        case 'subtracao':
            return num1 - num2;
        case 'multiplicacao':
            return num1 * num2;
        case 'divisao':
            if (num2 === 0) {
                throw new Error('Erro: Divisão por zero');
            }
            return num1 / num2;
        default:
            throw new Error('Erro: Operação inválida');
    }
}
try {
    console.log(calculadora('soma', 10, 5));
    console.log(calculadora('subtracao', 10, 5));
    console.log(calculadora('multiplicacao', 10, 5));
    console.log(calculadora('divisao', 10, 5));
    console.log(calculadora('divisao', 10, 0));
}
catch (error) {
    console.error(error.message);
}
