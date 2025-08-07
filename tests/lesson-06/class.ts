class Student {
    name: string;
    city: string;
    // email: string;
    // phoneNumber: number;

    constructor(name: string, city: string){
        this.name = name;
        this.city = city;
    }

    sayMyName(){
        console.log(`My name is ${this.name}`);
    }

    saySomething(message?: string){
        if (message){
            console.log(`${this.name} says: ${message}`);
        } else{
            console.log(`Nothing`);
        }
    }

}

let student1 = new Student("Student 1", "HCM");
student1.sayMyName();
student1.saySomething("Hi nhé mn");