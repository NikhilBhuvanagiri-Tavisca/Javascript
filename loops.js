const a=[1,1,2,3,4,5,6,7,8,9,10,1,2,3];

const b=[];

for (let i=0;i<a.length;i++){
    if (a[i]===a[i+1]){
        b.push(a[i]);
        console.log(b);
    }
}