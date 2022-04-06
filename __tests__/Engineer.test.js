const Engineer = require("../Lib/Engineer")

describe("Engineer", () => {
    describe("constructor", () => {
        it("should create an instance of the Engineer class", () => {
            const engineer = new Engineer("Max", 45, "jmg5369@gmail.com", "jmg5369");
            expect(engineer.name).toEqual("Max");
            expect(engineer.id).toEqual(45);
            expect(engineer.email).toEqual("jmg5369@gmail.com")
            expect(engineer.github).toEqual("jmg5369");
        })
    })

    describe("getName", () => {
        it("should return the name of the Engineer", () => {
            const engineer = new Engineer("Max", 45, "jmg5369@gmail.com", "jmg5369");
            const result = engineer.getName();
            expect(result).toEqual("Max")
        })
    })    

    describe("getEmail", () => {
        it("should return the Email of the Engineer", () => {
             const engineer = new Engineer("Max", 45, "jmg5369@gmail.com", "jmg5369");
            const result = engineer.getEmail();
            expect(result).toEqual("jmg5369@gmail.com")
        })
    })    

    describe("getId", () => {
        it("should return the Id of the Engineer", () => {
             const engineer = new Engineer("Max", 45, "jmg5369@gmail.com", "jmg5369");
            const result = engineer.getId();
            expect(result).toEqual(45)
        })
    })   
    
    describe("getRole", () => {
        it("should return the role of the Engineer", () => {
             const engineer = new Engineer("Max", 45, "jmg5369@gmail.com", "jmg5369");
            const result = engineer.getRole();
            expect(result).toEqual("Engineer")
        })
    })    
   
    describe("getGithub", () => {
        it("should return the Github username of the Engineer", () => {
             const engineer = new Engineer("Max", 45, "jmg5369@gmail.com", "jmg5369");
            const result = engineer.getGithub();
            expect(result).toEqual("jmg5369");
        })
    })    
})