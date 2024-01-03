//Call back function works when the other function is calling it asynchronously
function movie(name){
    return "I watch "+name+" every night.";
}
function foreignMovie(name){
    return movie(name);
}
function midnight(name){
    return "I drink coffee and "+movie(name);
}
console.log(foreignMovie("kdrama movies"));
console.log(midnight("Horror movies"));
