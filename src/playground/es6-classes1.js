class person{
    constructor (name='anonymous',age=0){
        this.name=name;
        this.age=age;
    }
    getGreeting(){
       // return 'Hi I  am' + this.name;
       return `${this.name} is ${this.age} old`;
    }
}

 
class student extends person{
    constructor(name,age,major){
        super(name,age);
        this.major=major
    }
    hasMajor(){
        return !!this.major
    }
    getGreeting(){
       let description=super.getGreeting();
       if(this.hasMajor){
description+=` their major is ${this.major}`
       } 
       return description
    }

}

class traveller extends person{
constructor(name,age,homeLocation){
    super(name,age);
    this.homeLocation=homeLocation;
}
getGreeting(){
    let greeting =super.getGreeting();
    if(this.homeLocation){
        greeting+=`I am visiting from ${this.homeLocation}`
    }
    return greeting;
}
}
const me=new student('nitish',21,'Lucknow');
console.log(me.getGreeting());
const other=new student();
console.log(other.getGreeting());