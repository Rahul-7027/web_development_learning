// let obj = {
//     name: "Rahul Bhati",
//     age: 23
// }
// console.log(obj)

// let rabbit={
//     eats:"carrot"
// }
// let animals={
//     jumps:"jumping"
// }

// rabbit.__proto__=animals

class Animals {
    // constructor(){
    //     console.log("This is a contructor")
    // }
    constructor(name) {
        this.name = name;
        console.log(name)
    }
    eats() {
        console.log("Kha rha hu m")
    }
    jump() {
        console.log("M jumping kr rha hu")
    }
}

class Lion extends Animals {
    constructor(name) {
        super(name)
    }
    weep() {
        console.log("Lion is weeping")
    }
}

let an=new Animals("Bunny")
let a = new Lion("Sheras");
console.log(a)