const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./src/page-template');
const team = [];

function promptManager() {
    console.log(`
    =====================================
    Welcome to the Team Profile Generator
    =====================================
    `);

    console.log(`
    Let's build your team starting with the manager.
    `);
    
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the name of the team manager? (Required)",
                validate: managerNameInput => {
                    if (managerNameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the team manager.');
                        return false;
                    }
                }
            },
            {
                type: "number",
                name: "managerId",
                message: 'What is the employee ID of the team manager? (Required)',
                validate: managerIdInput => {
                    if (managerIdInput) {
                        return true;
                    } else {
                        console.log('Please enter the employee ID of the team manager.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: 'What is the email address of the team manager? (Required)',
                validate: managerEmailInput => {
                    if (managerEmailInput) {
                        return true;
                    } else {
                        console.log('Please enter the email address of the team manager.');
                        return false;
                    }
                }
            },
            {
                type: "number",
                name: "managerOfficeNumber",
                message: 'What is the office number for the team manager? (Required)',
                validate: managerOfficeNumberInput => {
                    if (managerOfficeNumberInput) {
                        return true;
                    } else {
                        console.log('Please enter the office number for the team manager.');
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber, answers.manager);
            team.push(manager);
            promptMember();
        });
};

function promptMember() {
    console.log(`
    Let's add a team member.
    `);
    
    inquirer
        .prompt([{
            type: 'list',
            name: 'role',
            message: 'Which type of team member would you like to add. (Required)',
            choices: ['Engineer', 'Intern', 'None, I am finished building the team']
        }]).then(chosen => {
            switch (chosen.role) {
                case 'Engineer':
                    promptEngineer();
                    break;
                case 'Intern':
                    promptIntern();
                    break;
                case 'None, I am finished building the team':
                    console.log(`
    ======================================
    Your New Team Profile Has Been Created
    ======================================
                    `)
                    buildProfile();
                    break;
            }
        });
};

function promptEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of the engineer? (Required)', 
                validate: engineerNameInput => {
                    if (engineerNameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the engineer.');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'engineerId',
                message: 'What is the employee ID of the engineer? (Required)',
                validate: engineerIdInput => {
                    if (engineerIdInput) {
                        return true;
                    } else {
                        console.log('Please enter the employee ID of the engineer.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: 'What is the email address of the engineer? (Required)',
                validate: engineerEmailInput => {
                    if (engineerEmailInput) {
                        return true;
                    } else {
                        console.log('Please enter the email address of the engineer.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: 'What is the GitHub username of the engineer? (Required)',
                validate: engineerGithubInput => {
                    if (engineerGithubInput) {
                        return true;
                    } else {
                        console.log('Please enter the GitHub username of the engineer.');
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub, answers.engineer);
            team.push(engineer);
            promptMember();
        })
};

function promptIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the name of the intern? (Required)', 
                validate: internNameInput => {
                    if (internNameInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the intern.');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'internId',
                message: 'What is the employee ID of the intern? (Required)',
                validate: internIdInput => {
                    if (internIdInput) {
                        return true;
                    } else {
                        console.log('Please enter the employee ID of the intern.');
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: 'What is the email address of the intern? (Required)',
                validate: internEmailInput => {
                    if (internEmailInput) {
                        return true;
                    } else {
                        console.log('Please enter the email address of the intern.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the name of the school the intern is attending? (Required)',
                validate: internSchoolInput => {
                    if (internSchoolInput) {
                        return true;
                    } else {
                        console.log('Please enter the name of the school the intern is attending.');
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool, answers.intern);
            team.push(intern);
            promptMember();
        })
};

function buildProfile() {
    fs.writeFileSync('./dist/team-profile.html', generateTeam(team), 'UTF-8');
}

promptManager();