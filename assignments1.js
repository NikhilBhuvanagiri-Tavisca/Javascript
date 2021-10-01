function first(array,n){
    if (array.length<n){
        return array;
    }
    else if(array.length==0 || n<0){
        return [];
    }else if (array.length>n){
        let array1=[];
        for (let i=0;i<n;i++){
            array1.push(array[i]);
        }
        return array1;
    }else{
        return array[0];
    }
}
console.log(first([1,2,3,4,5,6,8],3));

// class Example
// {
// constructor(array,n)
// {
// this.array=array;
// this.n=n;
// }
// print()
// {
// if(this.array.length>this.n)
// {
// let array1=[];
// for(let i=0;i<this.n;i++)
// {
// array1.push(this.array[i]);
// }
// console.log(array1);
// }
// else if(this.array.length<this.n)
// {
// console.log(this.array);
// }
// else if(this.n<0 || this.array.length==0)
// {
// console.log("[]");
// }
// else
// console.log(this.array[0]);
// }
// }

// let arraysAndNum=new Example([7, 9, 0, -2]);
// arraysAndNum.print();