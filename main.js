let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function fav_foods(){
    for(let i = 0; i < Object.values(person3).length; i++){
        console.log(`person2's favorite ${Object.keys(person3)[i]} is ${Object.values(person3)[i]}`)
    }   
}

fav_foods()


function Person(name, age) {
    this.name = name;
    this.age  = age;


    this.ageUp = (years) => this.age+= years;

    this.printInfo = () => console.log(this.name + " is " + this.age + " years old");
}

person1 = new Person("Kristoffer", 29);
person2 = new Person("Justice", 25);

person1.printInfo();
person2.printInfo();

person1.ageUp(3)
person1.printInfo();

const stringLength = (str) => {
    return new Promise( (small, big) => {
        if(str.length < 10){
            small("Small word")
        } else {
            big("Big word")
        }
    })
}

console.log(stringLength("Hello"))