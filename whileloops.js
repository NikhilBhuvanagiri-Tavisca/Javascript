let factorial =1;
let number=5;
let original = number;

do{
    factorial=factorial * number;
    number--;
}while(number>0);

console.log(original +" factorial is "+ factorial);

while(number>0){
    factorial=factorial*number;
    number--;
}
console.log(original + " factorial is " + factorial);