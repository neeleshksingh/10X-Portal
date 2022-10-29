let map = new Map();
map.set("1", "str1");
map.set(1, "num1");
map.set(true, "bool1");
map.set("val", 1);
 
console.log(map);
console.log(map.get(1));
console.log(map.get("1"));
console.log(map.size);
console.log(map.get("2"));
 
map.set(1, "num2");
map.set(null, "num2");
 
console.log(map);
 
//iterate over keys
for(let key of map.keys()){
    console.log(key);
}
 
//iterate over values
for(let val of map.values()){
    console.log(val);
}
 
//iterate over pairs
for(let entry of map.entries()) {
    console.log(entry);
}
 
//iterate over pairs
for(let entry of map){
    console.log(entry);
}
 
let map1 = new Map([
    ["1", 1],
    [1, "num1"]
]);
console.log(map1);
