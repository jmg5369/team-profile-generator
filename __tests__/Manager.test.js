const Manager = require("../Lib/Manager")

describe("Manager", () => {
    describe("constructor", () => {
        it("should create an instance of the Manager class", () => {
            const manager = new Manager("Max", 45, "jmg5369@gmail.com", 9);
            expect(manager.name).toEqual("Max");
            expect(manager.id).toEqual(45);
            expect(manager.email).toEqual("jmg5369@gmail.com")
            expect(manager.officeNumber).toEqual(9);
        })
    })

    describe("getName", () => {
        it("should return the name of the Manager", () => {
            const manager = new Manager("Max", 45, "jmg5369@gmail.com", 9);
            const result = manager.getName();
            expect(result).toEqual("Max")
        })
    })    

    describe("getEmail", () => {
        it("should return the Email of the Manager", () => {
            const manager = new Manager("Max", 45, "jmg5369@gmail.com", 9);
            const result = manager.getEmail();
            expect(result).toEqual("jmg5369@gmail.com")
        })
    })    

    describe("getId", () => {
        it("should return the Id of the Manager", () => {
            const manager = new Manager("Max", 45, "jmg5369@gmail.com", 9);
            const result = manager.getId();
            expect(result).toEqual(45)
        })
    })   
    
    describe("getRole", () => {
        it("should return the role of the Manager", () => {
            const manager = new Manager("Max", 45, "jmg5369@gmail.com", 9);
            const result = manager.getRole();
            expect(result).toEqual("Manager")
        })
    })    
})