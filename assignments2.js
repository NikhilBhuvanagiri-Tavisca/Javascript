const a=[100,2,5,12,0];
let small=a[0];

for (let i=0; i<a.length;i++){
    if (a[i]<small){
        small=a[i];
    }
}   
console.log(small);
