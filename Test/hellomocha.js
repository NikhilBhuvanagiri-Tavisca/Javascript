var assert=require("assert");
describe("Math operations-test suite", function(){
    //suit level -this.timeout(5000);
    beforeEach("Hook Level Timeout", function(done){
        this.timeout(500);
        setTimeout(done, 3000);
    })
    var a=10;
    var b=10;    
    it.only ("Addition of two numbers", function(done){
        //Test level
        this.timeout(500);
        setTimeout(done,3000);
        var c=a+b;
        assert.equal(c,20);
    })
    it.skip ("Subtraction of two numbers", function(){
        var c=a-b;
        assert.equal(c,0);
    })
    it ("Multiplication of two numbers", function(){
        var c=a*b;
        assert.equal(c,100);
    })
    it ("Division of two numbers", function(){
        var c=a/b;
        assert.equal(c,1);
    })
})