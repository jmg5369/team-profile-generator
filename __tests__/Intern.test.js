const Intern = require("../Lib/Intern")

describe("Intern", () => {
    describe("constructor", () => {
        it("should create an instance of the Intern class", () => {
            const intern = new Intern("Max", 45, "jmg5369@gmail.com", "Penn State");
            expect(intern.name).toEqual("Max");
            expect(intern.id).toEqual(45);
            expect(intern.email).toEqual("jmg5369@gmail.com")
            expect(intern.school).toEqual("Penn State");
        })
    })

    describe("getName", () => {
        it("should return the name of the Intern", () => {
            const intern = new Intern("Max", 45, "jmg5369@gmail.com", "Penn State");
            const result = intern.getName();
            expect(result).toEqual("Max")
        })
    })    

    describe("getEmail", () => {
        it("should return the Email of the Intern", () => {
             const intern = new Intern("Max", 45, "jmg5369@gmail.com", "Penn State");
            const result = intern.getEmail();
            expect(result).toEqual("jmg5369@gmail.com")
        })
    })    

    describe("getId", () => {
        it("should return the Id of the Intern", () => {
             const intern = new Intern("Max", 45, "jmg5369@gmail.com", "Penn State");
            const result = intern.getId();
            expect(result).toEqual(45)
        })
    })   
    
    describe("getRole", () => {
        it("should return the role of the Intern", () => {
             const intern = new Intern("Max", 45, "jmg5369@gmail.com", "Penn State");
            const result = intern.getRole();
            expect(result).toEqual("Intern")
        })
    })    
   
    describe("getSchool", () => {
        it("should return the School of the Intern", () => {
             const intern = new Intern("Max", 45, "jmg5369@gmail.com", "Penn State");
            const result = intern.getSchool();
            expect(result).toEqual("Penn State");
        })
    })    
})