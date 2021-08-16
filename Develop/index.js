const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

var teamArray = [];

createManager();
function createManager() {

inquirer
  .prompt([
    {
      type: "confirm",
      name: "confirmedTeamStatement",
      message: "Would you like to create a new team?",
    },
])



.then((confirm) => {
    if (confirm.confirmedTeamStatement == true) {
        inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "Enter the name of the manager.",
              },
              {
                type: "input",
                name: "id",
                message: "Enter the manager id",
              },
              {
                type: "input",
                name: "email",
                message: "Enter the manager email",
              },
              {
                type: "input",
                name: "officeNumber",
                message: "Enter the manager's office number",
              },
        ])
        .then(({name, id, email, officeNumber}) => {
            const manager = new Manager(
                name, id, email, officeNumber
            )
            teamArray.push(manager);
            createHTMLp1();
            selectScreen();
        
            
    })
} else {
    process.exit();
}
})
}    



function selectScreen() {
    inquirer
    .prompt([
        {
            type: "confirm",
            name: "newEmployeeConfirm",
            message: "Do you want to add an employee?",
        }
    ])
    .then((answer) => {
        if (answer.newEmployeeConfirm == true) {
            newEmployee();
        } else {
            console.log(teamArray);
            console.log('Your request is being processed.')
            createCards(teamArray);

        }
    }) 
}

function newEmployee() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "role",
            message: "Do you want to add an engineer or an intern?",
            choices: ["engineer", "intern"]
        }
    ])
    .then(({role}) => {
        if (role == 'engineer') {
            createEngineer();
        } else if (role == 'intern') {
            createIntern();

        }
    }) 
}

function createEngineer () {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the name of the engineer.",
          },
          {
            type: "input",
            name: "id",
            message: "Enter the engineer id",
          },
          {
            type: "input",
            name: "email",
            message: "Enter the engineer email",
          },
          {
            type: "input",
            name: "github",
            message: "Enter the engineer's github handle",
          },
    ])
    .then(({name, id, email, github}) => {
        const engineer = new Engineer(
            name, id, email, github
        )
        teamArray.push(engineer);
        
        selectScreen();
    
        
})
} 

function createIntern () {
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "Enter the name of the intern.",
          },
          {
            type: "input",
            name: "id",
            message: "Enter the intern id",
          },
          {
            type: "input",
            name: "email",
            message: "Enter the intern email",
          },
          {
            type: "input",
            name: "school",
            message: "Enter the intern's current school",
          },
    ])
    .then(({name, id, email, school}) => {
        const intern = new Intern(
            name, id, email, school
        )
        teamArray.push(intern);
        
        selectScreen();
    
        
})
} 




function createHTMLp1() {
   const header = `<!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
       <link
         rel="stylesheet"
         href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
       />
       <title>Team Profile Generator</title>
     </head>
     <body>
       <!-- Header -->
       <div
         style="background-color: lightsalmon; color: white"
         class="jumbotron jumbotron-fluid"
       >
         <h1 style="text-align: center">My Team</h1>
       </div>
       <!-- Body -->
       <div style="margin-left: 2rem; margin-right: 2rem" class="row">
   `;

   fs.writeFile('teamProfile.html', header, (err) => 
   err
   ? console.log(err)
   :console.log("Header sucessfully loaded"));
 };

 function createCards(teamArray) {
    var loopCount = 0;
    teamMemberCount = teamArray.length;
    teamArray.forEach((teammate) => {
      let htmlCards = "";
      const name = teammate.getName();
      const id = teammate.getId();
      const email = teammate.getEmail();
      const role = teammate.getRole();
      if (role == "Manager") {
        const officeNumber = teammate.getOfficeNumber();
        htmlCards = `<div
        class="card"
        style="width: 18rem; margin-left: 1rem; margin-right: 1rem"
      >
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${role}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: <a href = 'mailto:${email}'> ${email}</a></li>
          <li class="list-group-item">Office Number: ${officeNumber}</li>
        </ul>
      </div>`;
      } else if (role == "Engineer") {
        const github = teammate.getGithub();
        htmlCards = `<div
        class="card"
        style="width: 18rem; margin-left: 1rem; margin-right: 1rem"
      >
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${role}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: <a href = 'mailto:${email}'> ${email}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${github}"> ${github}</a></li>
        </ul>
      </div>`;
      } else if (role == "Intern") {
        const school = teammate.getSchool();
        htmlCards = `<div
        class="card"
        style="width: 18rem; margin-left: 1rem; margin-right: 1rem"
      >
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${role}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: <a href = 'mailto:${email}'> ${email}</a></li>
          <li class="list-group-item">School: ${school}</li>
        </ul>
      </div>`;
      }
      fs.appendFile("teamProfile.html", htmlCards, function (err) {
        if (err) {
          console.log(err);
        }
        loopCount++;
        if (loopCount == teamMemberCount) {
          finalHTML();
        }
      });
      if (loopCount == teamMemberCount) {
        finalHTML();
      }
    });
  }
  // func which renders the end of the html page
  function finalHTML() {
    const finalPortion = `</div>
    </body>
  </html>`;
    fs.appendFile("teamProfile.html", finalPortion, (err) =>
      err ? console.log(err) : console.log("Page is now complete")
    );
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
