const Employee = require("../Lib/Employee")

describe("Employee", () => {
    describe("constructor", () => {
        it("should create an instance of the employee class", () => {
            const employee = new Employee("Max", 45, "jmg5369@gmail.com");
            expect(employee.name).toEqual("Max");
            expect(employee.id).toEqual(45);
            expect(employee.email).toEqual("jmg5369@gmail.com")
        })
    })

    describe("getName", () => {
        it("should return the name of the employee", () => {
            const employee = new Employee("Max", 45, "jmg5369@gmail.com");
            const result = employee.getName();
            expect(result).toEqual("Max")
        })
    })    

    describe("getEmail", () => {
        it("should return the Email of the employee", () => {
            const employee = new Employee("Max", 45, "jmg5369@gmail.com");
            const result = employee.getEmail();
            expect(result).toEqual("jmg5369@gmail.com")
        })
    })    

    describe("getId", () => {
        it("should return the Id of the employee", () => {
            const employee = new Employee("Max", 45, "jmg5369@gmail.com");
            const result = employee.getId();
            expect(result).toEqual(45)
        })
    })   
    
    describe("getRole", () => {
        it("should return the role of the employee", () => {
            const employee = new Employee("Max", 45, "jmg5369@gmail.com");
            const result = employee.getRole();
            expect(result).toEqual("Employee")
        })
    })    
})