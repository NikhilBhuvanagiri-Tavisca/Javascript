const cookie={
    name:  "choco chip",
    //"cookie name":"choco chip"
    isGlutenFree: true,
    "@taste": "Sweet",
    eatcookie: function(){
        console.log("Im eating " + this.name);
    }
}
//cookie.color="Brown";
//cookie.name="chip choco";
//console.log(cookie.name);
//console.log(cookie["@taste"]);
//console.log(cookie);
cookie.eatcookie();

class Cookie{
    constructor(name, isGlutenFree){
        this.name=name;
        this.isGlutenFree=isGlutenFree;
    }
    eatCookie(){
        console.log("Im eating " + this.name);

    }
}

const mycookie=new Cookie("oatmeal", true);
mycookie.eatCookie();

//console.log(mycookie);
//console.log(mycookie["name"]);