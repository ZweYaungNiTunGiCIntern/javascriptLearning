//constructor
function Student(name,age,skill){
    this.name=name;
    this.age=age;
    this.skill=skill;
    this.coffee=function(){
        return "I drink coffee every night";
    }
}
//use prototype to add properties to all instance objects of class
Student.prototype.language = "Japanese";
Student.prototype.work=function(){
    return this.name+" work as internship developer at GIC JP.";
};

const AungAung = new Student("Aung Aung",21,"coding")
const Yamakawasan = new Student("Yamakawa",26,"project management")
console.log(AungAung.language)
AungAung.name="Aung Sann"
console.log(AungAung.name)
console.log(AungAung.work())
console.log(AungAung.coffee())
