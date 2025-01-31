    //CODIGO ORIGINAL
    function c(x: number[]): number[] {
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
    function dobraPares(numbers: number[]): number[] {
        const doubledEvenNumbers: number[] = [];
        
        for (const number of numbers) {
        if (isPar(number)) {
            doubledEvenNumbers.push(dobra(number));
        }
        }
        
        return doubledEvenNumbers;
    }
    
    function isPar(number: number): boolean {
        return number % 2 === 0;
    }
    
    function dobra(number: number): number {
        return number * 2;
    }
    
    console.log("numerosOriginais: ", numbers);
    console.log("DobraParesRefatorado: ", dobraPares(numbers));