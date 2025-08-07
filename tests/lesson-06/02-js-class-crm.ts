
class Customer {
    id: string;
    name: string;
    email: string;
    phone: string;

    constructor(id: string, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayInfo() {
        console.log("Thông tin khách hàng: ");
        console.log(`ID: ${this.id}`);
        console.log(`Tên: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone number: ${this.phone}`);
    }

    updateEmail(updateEmail: string){
        this.email = updateEmail;
        console.log(`Email của khách hàng đã được cập nhật: ${this.email}`);
    }
}

const customer1 = new Customer("KH01", "Hiền Phan", "hienishien98@gmail.com", "0822736466");
console.log("---- Thông tin ban đầu ----");
customer1.displayInfo();
console.log("---- Cập nhật email của khách hàng ----");
customer1.updateEmail("hienphan@gmail.com");
console.log("---- Thông tin sau khi update email ----");
customer1.displayInfo();