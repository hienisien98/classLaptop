type Item = {
        name: string;
        price: number;
        amount: number;
        discount: number;
    }

class Order{

    orderId: string;
    customerName: string;
    items: Item[];
    totalAmount: number;

    constructor(orderId: string, customerName: string){
        this.orderId = orderId;
        this.customerName = customerName;
        this.items = [];
        this.totalAmount = 0;
    }

    addItem(item: Item){
        this.items.push(item);
    }

}

