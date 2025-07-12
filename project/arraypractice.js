let colors = ['red','green','orange','yellow'];
let iterator = colors.entries();
for(let [index,color] of iterator){
    console.log(`${index} => ${color}`);
};
const cars = ['Rolls Royce', 'Phantom','Benz'];
let it = cars.entries();
let result = it.next();
let [index, value] = result.value;
console.log(`${index + 4} => ${value}`);