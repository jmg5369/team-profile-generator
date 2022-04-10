const Employee = require('./Employee')


class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
  

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school;
    }

    generateHtmlString() {
        return `
        <div class="card" style="width: 18rem;">
            <div style="background-color: blue !important;" class="text-white card-header">
                Intern
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${this.name}</li>
                <li class="list-group-item">${this.email}</li>
                <li class="list-group-item">
                    School: ${this.school}
                </li>
            </ul>
        </div>
        `
    }
  
}
  module.exports = Intern;
  