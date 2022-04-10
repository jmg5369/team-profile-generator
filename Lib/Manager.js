const Employee = require('./Employee')


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
  

    getRole() {
        return "Manager"
    }

    generateHtmlString() {
        return `
        <div class="card" style="width: 18rem;">
            <div style="background-color: blue !important;" class="text-white card-header">
               Manager
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${this.name}</li>
                <li class="list-group-item">${this.email}</li>
                <li class="list-group-item">
                    Office Number: ${this.officeNumber}
                </li>
            </ul>
        </div>
        `
    }

  
}
  module.exports = Manager;
  