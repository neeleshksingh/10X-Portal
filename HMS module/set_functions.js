let set = new Set();
set.add(1);//[1, 1]
set.add("2");//["2", "2"]
set.add(7);
console.log(set);
 
console.log(set.has("2"));//true
console.log(set.has(7));//true
console.log(set.has(5));//false
 
set.add(2);
console.log(set);
 
//iterate over keys
for(let key of set.keys()){
    console.log(key);
}
 
//iterate over values
for(let val of set.values()){
    console.log(val);
}
 
//iterate over pairs
for(let entry of set.entries()) {
    console.log(entry);
}
 
//iterate over pairs
for(let entry of set) {
    console.log(entry);
}
 
set.delete(7);
console.log(set);
 
// let set1 = new Set(["2", 2, "4"]);
// console.log(set1);
