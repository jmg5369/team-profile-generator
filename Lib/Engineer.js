const Employee = require('./Employee')


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
  

    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github;
    }

    generateHtmlString() {
        return `
        <div class="card" style="width: 18rem;">
            <div style="background-color: blue !important;" class="text-white card-header">
               Engineer
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${this.name}</li>
                <li class="list-group-item">${this.email}</li>
                <li class="list-group-item">
                    Github: <a href='https://github.com/${this.github}'>${this.github}</a>
                </li>
            </ul>
        </div>
        `
    }
  
}
  module.exports = Engineer;
  