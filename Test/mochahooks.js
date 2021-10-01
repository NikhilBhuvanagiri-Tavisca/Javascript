describe("Mocha-Hooks", function(){
    before("Execute before all tests", function(){
        console.log("Execute before all tests");
    })
    beforeEach("Execute before each tests", function(){
        console.log("Execute before each test");
    })
    after("Execute after all tests", function(){
        console.log("Execute after all tests");
    })
    afterEach("Execute after each tests", function(){
        console.log("Execute after each test");
    })
    it("Mocha-Hooks Test", function(){
        console.log("MOcha-Hooks Testing");
    })

})