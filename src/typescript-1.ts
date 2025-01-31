function extrairValores<T, K extends keyof T>(array: T[], key: K): T[K][] {
    return array.map(
      item => item[key]
    );
  }
  
  const data = [
    { id: 1, nome: 'Alice' },
    { id: 2, nome: 'Bob' },
    { id: 3, nome: 'Maria'}
  ];
  
  //Extrai valores do array e retorna um novo array buscando pelo nome
  const result = extrairValores(data, 'nome');

  console.log("Extração de valores :",result);