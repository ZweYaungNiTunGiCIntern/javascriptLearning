
class Developer{
    constructor(name , skill , age, startCareerLifeYear){
        this.name=name;
        this.age=age;
        this.skill=skill;
        this.startCareerLifeYear = startCareerLifeYear;
    }
    experience(){
        const date = new Date();
        return date-this.startCareerLifeYear;
    }
    coding(){
        return "coffee and code, my mode at late night";
    }
    
}
class WebDev extends Developer{
    constructor(name,age,skill,startCareerLifeYear,programminglanguage){
        super(name,age,skill,startCareerLifeYear);
        this.programminglanguage=programminglanguage;
        
    }
    
    
}
let developer=new WebDev("Aung Aung","backend development",21,2020,"java");
console.log(developer.age);
console.log(developer.programminglanguage);
console.log(developer.coding());