const food = new Map([
    ["apple",200],
    ["bread",500],
    ["cheese",1000],
    ["sushi",1500]
]);
console.log(food.size)
food.set("noodles",2000)
console.log(food.size)
food.set("chicken",1000)
let menu = "";
food.forEach(function(value,key){
    menu += key + '  '+ value + '\n';
});
console.log(menu);