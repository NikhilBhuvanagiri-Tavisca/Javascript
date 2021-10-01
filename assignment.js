var obj={
    a:2,
    b:4
}
//To convert object into array
const entries = Object.entries(obj);
console.log(entries);

//To convert object into string
var note=JSON.stringify(obj);
console.log(note);