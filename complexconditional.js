const dish = {
    price : 200,
    category: "non-veg",
    isSpicy : true
}

if ((dish.price>200 && dish.category==="non-veg")|| dish.isSpicy===false){
    console.log("we'll take it");
}else{
    console.log("we will not take it");
}