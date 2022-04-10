const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Lib/Manager");
const Engineer = require("./Lib/Engineer");
const Intern = require("./Lib/Intern");

const dataStructure = [{}, [], []];

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the name of your Manager?",
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the Id of your Manager?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the email of your Manager?",
      },
      {
        type: "input",
        name: "managerNumber",
        message: "What is the office number for your Manager?",
      },
    ])
    .then((res) => {
      const manager = new Manager(
        res.managerName,
        res.managerId,
        res.managerEmail,
        res.managerNumber
      );
      dataStructure[0] = manager;
      next();
    });
}

function next() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "option",
        message: "What would you like to do next?",
        choices: ["Add a new Engineer", "Add a new Intern", "Complete Team"],
      },
    ])
    .then((res) => {
      if (res.option === "Add a new Engineer") {
        createEngineer();
      } else if (res.option === "Add a new Intern") {
        createIntern();
      } else if (res.option === "Complete Team") {
        completeTeam();
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of your Engineer?",
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the Id of your Engineer?",
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the email of your Engineer?",
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "What is the github username for your Engineer?",
      },
    ])
    .then((res) => {
      const engineer = new Engineer(
        res.engineerName,
        res.engineerId,
        res.engineerEmail,
        res.engineerGithub
      );
      dataStructure[1].push(engineer);
      next();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the name of your intern?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the Id of your intern?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the email of your intern?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What school did your intern attend?",
      },
    ])
    .then((res) => {
      const intern = new Intern(
        res.internName,
        res.internId,
        res.internEmail,
        res.internSchool
      );
      dataStructure[2].push(intern);
      next();
    });
}

function completeTeam() {
  const managerData = dataStructure[0];
  const engineerData = dataStructure[1];
  const internData = dataStructure[2];
  console.log(managerData);

  let newHtmlStr = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    </head>
    
    <body>
        <nav style="background-color: blue !important;" class="navbar navbar-light bg-light justify-content-center">
            <span class="text-white navbar-brand mb-0 h1">Navbar</span>
        </nav>
        <div class="container d-flex flex-wrap justify-content-center mt-5">
    `;

  newHtmlStr = newHtmlStr.concat(managerData.generateHtmlString());

  for (let i = 0; i < engineerData.length; i++) {
    console.log(engineerData[i]);
    newHtmlStr = newHtmlStr.concat(engineerData[i].generateHtmlString());
  }
  for (let i = 0; i < internData.length; i++) {
    console.log(internData[i]);
    newHtmlStr = newHtmlStr.concat(internData[i].generateHtmlString());
  }
  let finalHtmlStr = `
    </div>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>
    `;

  newHtmlStr = newHtmlStr.concat(finalHtmlStr);

  createHTMLDoc(newHtmlStr);
}
function createHTMLDoc(data) {
  fs.writeFile("index.html", data, (error) => {
    error ? console.log(error) : console.log("success");
  });
}

createManager();
