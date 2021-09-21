function countLegs(c1,c2,p){
    return c1*2+c2*4+p*4;
}
console.log(countLegs(2,2,3));

function checkpalindrome(number){
    let remainder=0;
    let sum =0;
    while (number>0){
    remainder=number%10;
    sum=(sum*10)+remainder;
    number=number/10;
    }
    return sum;
}
console.log(checkpalindrome(343));