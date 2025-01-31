    //CODIGO ORIGINAL
    function processItems(items: any[]) {
        for (let i = 0; i < items.length; i++) {
        if (items[i].price > 100) {
            console.log(items[i].name + ' is expensive');
        }
        }
    }

    const items: Item[] = [
        { name: "Laptop", price: 1500 },
        { name: "Mouse", price: 50 },
        { name: "Keyboard", price: 120 },
        { name: "Headphones", price: 90 }
    ];

    console.log("processItens:");
    processItems(items);
 
    //CODIGO REFATORADO
    interface Item {
        name: string;
        price: number;
    }
    
    function isExpensive(item: Item): boolean {
        return item.price > 100;
    }
    
    function processItemsRefatored(items: Item[]): void {
        for (const item of items) {
        if (isExpensive(item)) {
            console.log(`${item.name} is expensive`);
        }
        }
    }

    console.log("processItensRefatorado:");
    processItemsRefatored(items);